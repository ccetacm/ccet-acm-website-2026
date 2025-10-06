import React, { useState } from 'react';
import { mentorsData } from '../data/Mentors/index';
import { useParams, Link } from 'react-router-dom';
import { Mail, Linkedin, GraduationCap, Award } from 'lucide-react';
import styles from './MentorProfile.module.css';

const MentorProfile = () => {
    const { mentorName } = useParams();
    const [selectedYear, setSelectedYear] = useState(null);

    const mentor = mentorsData.find(m =>
        m.name.toLowerCase().replace(/ /g, '-') === mentorName
    );

    if (!mentor) {
        return <div className={styles.notFound}>Mentor not found</div>;
    }

    // Helper function to format DOI as clickable URL
    const formatDOI = (doi) => {
        if (!doi) return null;

        if (doi.startsWith('http')) {
            return doi;
        }

        if (doi.startsWith('10.')) {
            return `https://doi.org/${doi}`;
        }

        if (doi.toLowerCase().startsWith('doi:')) {
            return `https://doi.org/${doi.substring(4)}`;
        }

        return doi;
    };

    const renderPublications = () => {
        if (!mentor.publications || Object.keys(mentor.publications).length === 0) {
            return (
                <div className={styles.emptyState}>
                    <p>No publications available.</p>
                </div>
            );
        }

        const years = Object.keys(mentor.publications).sort((a, b) => parseInt(b) - parseInt(a));

        // Set initial year if not selected
        if (selectedYear === null && years.length > 0) {
            setSelectedYear(years[0]);
        }

        const selectedPubs = selectedYear ? mentor.publications[selectedYear] : [];
        let pubsArray = Array.isArray(selectedPubs) ? selectedPubs : (selectedPubs ? [selectedPubs] : []);

        // Sort publications by type (Journal first, then Conference, then others)
        const typeOrder = { 'journal': 1, 'conference': 2 };
        pubsArray = pubsArray.sort((a, b) => {
            const typeA = a.type?.toLowerCase() || 'other';
            const typeB = b.type?.toLowerCase() || 'other';
            const orderA = typeOrder[typeA] || 999;
            const orderB = typeOrder[typeB] || 999;
            return orderA - orderB;
        });

        return (
            <div className={styles.publicationsContainer}>
                {/* Year Navigation */}
                <div className={styles.yearNavigation}>
                    {years.map((year) => (
                        <button
                            key={year}
                            className={`${styles.yearButton} ${selectedYear === year ? styles.activeYear : ''}`}
                            onClick={() => setSelectedYear(year)}
                        >
                            {year}
                        </button>
                    ))}
                </div>

                {/* Publications List */}
                {selectedYear && (
                    <div className={styles.publicationsList}>
                        <div className={styles.publicationsHeader}>
                            <h3>{selectedYear}</h3>
                            <span className={styles.totalCount}>
                                {pubsArray.length} publication{pubsArray.length !== 1 ? 's' : ''}
                            </span>
                        </div>

                        <div className={styles.publicationsScrollContainer}>
                            <div className={styles.publicationsGrid}>
                                {pubsArray.map((pub, index) => (
                                    <div key={index} className={styles.publicationCard}>
                                        <div className={styles.cardHeader}>
                                            <h4 className={styles.publicationTitle}>{pub.title}</h4>
                                            {pub.type && (
                                                <span className={`${styles.publicationType} ${styles[pub.type?.toLowerCase().replace(/\s+/g, '')]}`}>
                                                    {pub.type}
                                                </span>
                                            )}
                                        </div>

                                        <div className={styles.cardContent}>
                                            <p className={styles.authors}>
                                                <strong>Authors:</strong> {pub.authors}
                                            </p>
                                            <p className={styles.journal}>
                                                <strong>Journal/Conference:</strong> {pub.journal}
                                            </p>

                                            {pub.doi && (
                                                <p className={styles.doi}>
                                                    <strong>DOI:</strong> {pub.doi}
                                                </p>
                                            )}
                                        </div>

                                        {(pub.url || pub.doi) && (
                                            <div className={styles.cardFooter}>
                                                <a
                                                    href={pub.url || formatDOI(pub.doi)}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={styles.viewButton}
                                                >
                                                    View Publication →
                                                </a>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    };

    return (
        <div className={styles.container}>
            {/* Profile Header */}
            <div className={styles.profileHeader}>
                <div className={styles.mainImageContainer}>
                    <img
                        src={mentor.imgSrc}
                        alt={mentor.name}
                        className={styles.mainImage}
                    />
                </div>

                <div className={styles.profileInfo}>
                    <h1 className={styles.name}>{mentor.name}</h1>
                    <h2 className={styles.title}>{mentor.title}</h2>
                    <p className={styles.about}>{mentor.about}</p>

                    {mentor.social && (
                        <div className={styles.socialLinks}>
                            {mentor.social.email && (
                                <a href={mentor.social.email} className={styles.socialButton}>
                                    <Mail size={20} />
                                </a>
                            )}
                            {mentor.social.linkedin && (
                                <a href={mentor.social.linkedin} target="_blank" rel="noopener noreferrer" className={styles.socialButton}>
                                    <Linkedin size={20} />
                                </a>
                            )}
                            {mentor.social.scholar && (
                                <a href={mentor.social.scholar} target="_blank" rel="noopener noreferrer" className={styles.socialButton}>
                                    <GraduationCap size={20} />
                                </a>
                            )}
                            {mentor.social.orcid && (
                                <a href={mentor.social.orcid} target="_blank" rel="noopener noreferrer" className={styles.socialButton}>
                                    <Award size={20} />
                                </a>
                            )}
                        </div>
                    )}
                </div>

                {mentor.additionalImg && (
                    <div className={styles.secondaryImageContainer}>
                        <img
                            src={mentor.additionalImg}
                            alt={`${mentor.name} additional`}
                            className={styles.secondaryImage}
                        />
                    </div>
                )}
            </div>

            {/* Content Sections */}
            <div className={styles.contentSections}>
                {/* Skills Section */}
                {mentor.skills && mentor.skills.length > 0 && (
                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Skills & Expertise</h2>
                        <div className={styles.skillsContainer}>
                            {mentor.skills.map((skill, index) => (
                                <span key={index} className={styles.skillTag}>
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </section>
                )}

                {/* Education Section */}
                {mentor.education && mentor.education.length > 0 && (
                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Education</h2>
                        <div className={styles.educationList}>
                            {mentor.education.map((edu, index) => (
                                <div key={index} className={styles.educationItem}>
                                    <h3 className={styles.degree}>{edu.degree}</h3>
                                    <p className={styles.institution}>{edu.institution}</p>
                                    <p className={styles.date}>{edu.date}</p>
                                    {edu.dissertation && (
                                        <p className={styles.dissertation}>
                                            <strong>Dissertation:</strong> {edu.dissertation}
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Publications Section */}
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Publications</h2>
                    {renderPublications()}
                </section>

                {/* Projects Section */}
                {mentor.projects && mentor.projects.length > 0 && (
                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Projects</h2>
                        <div className={styles.projectsList}>
                            {mentor.projects.map((project, index) => (
                                <div key={index} className={styles.projectCard}>
                                    <h3>{project.title}</h3>
                                    <div className={styles.projectDetails}>
                                        <p><strong>Agency:</strong> {project.agency}</p>
                                        <p><strong>Status:</strong> {project.status}</p>
                                        <p><strong>Role:</strong> {project.role}</p>
                                        <p><strong>Amount:</strong> {project.amount}</p>
                                        <p><strong>Year:</strong> {project.year}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Research Teams */}
                {((mentor.phdTeam && mentor.phdTeam.length > 0) || (mentor.btechTeam && mentor.btechTeam.length > 0)) && (
                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Research Teams</h2>

                        {mentor.phdTeam && mentor.phdTeam.length > 0 && (
                            <div className={styles.teamCategory}>
                                <h3 className={styles.teamTitle}>PhD Students</h3>
                                <div className={styles.teamGrid}>
                                    {mentor.phdTeam.map((member, index) => (
                                        <div key={index} className={styles.teamMember}>
                                            <img src={member.img} alt={member.name} className={styles.memberPhoto} />
                                            <span className={styles.memberName}>{member.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {mentor.btechTeam && mentor.btechTeam.length > 0 && (
                            <div className={styles.teamCategory}>
                                <h3 className={styles.teamTitle}>B.Tech Students</h3>
                                <div className={styles.teamGrid}>
                                    {mentor.btechTeam.map((member, index) => (
                                        <div key={index} className={styles.teamMember}>
                                            <img src={member.img} alt={member.name} className={styles.memberPhoto} />
                                            <span className={styles.memberName}>{member.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </section>
                )}
            </div>
        </div>
    );
};

export default MentorProfile;