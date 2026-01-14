import React, { useState, useEffect } from 'react';
import { mentorsData } from '../data/Mentors/index';
import { useParams, Link } from 'react-router-dom';
import { Mail, Linkedin, GraduationCap, Award, Github } from 'lucide-react';
import styles from './MentorProfile.module.css';

const MentorProfile = () => {
    const { mentorName } = useParams();
    const [selectedYear, setSelectedYear] = useState(null);
    const [publications, setPublications] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const mentor = mentorsData.find(m =>
        m.route.toLowerCase().replace(/ /g, '-') === mentorName
    );

    useEffect(() => {
        const fetchMentorPublications = async () => {
            if (!mentor) return;

            try {
                setLoading(true);
                setError(null);

                const response = await fetch(`https://ccet.acm.org/APIs/publications.php?limit=1000&sort_by=year&sort_order=desc`);

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const result = await response.json();

                if (result.success) {
                    const mentorPublications = result.data.filter(pub => {
                        if (!pub.authors) return false;

                        const authors = pub.authors.toLowerCase();
                        const mentorNameLower = mentor.name.toLowerCase();

                        const nameParts = mentor.name.split(' ').filter(part => part.length > 1);

                        return nameParts.some(part =>
                            authors.includes(part.toLowerCase())
                        );
                    });

                    setPublications(mentorPublications);
                } else {
                    throw new Error(result.error || "Failed to fetch publications");
                }
            } catch (err) {
                console.error("Error fetching mentor publications:", err);
                setError(err.message);
                setPublications([]);
            } finally {
                setLoading(false);
            }
        };

        fetchMentorPublications();
    }, [mentor]);

    if (!mentor) {
        return <div className={styles.notFound}>Mentor not found</div>;
    }

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

    const groupPublicationsByYear = (pubs) => {
        const grouped = {};
        pubs.forEach(pub => {
            const year = pub.year?.toString() || 'Unknown';
            if (!grouped[year]) {
                grouped[year] = [];
            }
            grouped[year].push(pub);
        });
        return grouped;
    };

    const renderPublications = () => {
        if (loading) {
            return (
                <div className={styles.emptyState}>
                    <div className={styles.loading}>
                        <i className="fa-solid fa-spinner fa-spin"></i>
                        <p>Loading publications...</p>
                    </div>
                </div>
            );
        }

        if (error) {
            return (
                <div className={styles.emptyState}>
                    <p>Error loading publications: {error}</p>
                </div>
            );
        }

        const groupedPublications = groupPublicationsByYear(publications);
        const years = Object.keys(groupedPublications).sort((a, b) => parseInt(b) - parseInt(a));

        if (years.length === 0) {
            return (
                <div className={styles.emptyState}>
                    <p>No publications found for {mentor.name}.</p>
                </div>
            );
        }

        if (selectedYear === null && years.length > 0) {
            setSelectedYear(years[0]);
        }

        const selectedPubs = selectedYear ? groupedPublications[selectedYear] : [];

        const typeOrder = { 'journal': 1, 'conference': 2 };
        const sortedPubs = selectedPubs.sort((a, b) => {
            const typeA = a.type?.toLowerCase() || 'other';
            const typeB = b.type?.toLowerCase() || 'other';
            const orderA = typeOrder[typeA] || 999;
            const orderB = typeOrder[typeB] || 999;
            return orderA - orderB;
        });

        return (
            <div className={styles.publicationsContainer}>
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

                {selectedYear && (
                    <div className={styles.publicationsList}>
                        <div className={styles.publicationsHeader}>
                            <h3>{selectedYear}</h3>
                            <span className={styles.totalCount}>
                                {sortedPubs.length} publication{sortedPubs.length !== 1 ? 's' : ''}
                            </span>
                        </div>

                        <div className={styles.publicationsScrollContainer}>
                            <div className={styles.publicationsGrid}>
                                {sortedPubs.map((pub, index) => (
                                    <div key={`${pub.id}-${index}`} className={styles.publicationCard}>
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

                                        {(pub.url) && (
                                            <div className={styles.cardFooter}>
                                                <a
                                                    href={pub.url}
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
                                            {edu.thesisUrl && (
                                                <> <a
                                                    href={edu.thesisUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={styles.thesisLink}
                                                >
                                                    (View Thesis)
                                                </a></>
                                            )}
                                        </p>
                                    )}
                                    {edu.supervisor && (
                                        <p className={styles.supervisor}>
                                            <strong>Supervisor:</strong> {edu.supervisor}
                                        </p>
                                    )}
                                    {edu.description && (
                                        <p className={styles.description}>{edu.description}</p>
                                    )}
                                    {edu.projectInfo && (
                                        <p className={styles.projectInfo}>
                                            <em>{edu.projectInfo}</em>
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Publications</h2>
                    {renderPublications()}
                </section>

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

                {((mentor.phdTeam && mentor.phdTeam.length > 0) || (mentor.btechTeam && mentor.btechTeam.length > 0)) && (
                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>Research Teams</h2>

                        <div className={styles.teamsContainer}>
                            {mentor.phdTeam && mentor.phdTeam.length > 0 && (
                                <div className={styles.teamCategory}>
                                    <h3 className={styles.teamTitle}>PhD Students</h3>
                                    <div className={styles.teamGrid}>
                                        {mentor.phdTeam.map((member, index) => (
                                            <div key={index} className={styles.teamMember}>
                                                <img src={member.img} alt={member.name} className={styles.memberPhoto} />
                                                <span className={styles.memberName}>{member.name}</span>
                                                {member.social && (
                                                    <div className={styles.memberSocial}>
                                                        {member.social.linkedin && (
                                                            <a
                                                                href={member.social.linkedin}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className={styles.memberSocialLink}
                                                                title="LinkedIn"
                                                            >
                                                                <Linkedin size={16} />
                                                            </a>
                                                        )}
                                                        {member.social.github && (
                                                            <a
                                                                href={member.social.github}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className={styles.memberSocialLink}
                                                                title="GitHub"
                                                            >
                                                                <Github size={16} />
                                                            </a>
                                                        )}
                                                    </div>
                                                )}
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
                                                {member.social && (
                                                    <div className={styles.memberSocial}>
                                                        {member.social.linkedin && (
                                                            <a
                                                                href={member.social.linkedin}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className={styles.memberSocialLink}
                                                                title="LinkedIn"
                                                            >
                                                                <Linkedin size={16} />
                                                            </a>
                                                        )}
                                                        {member.social.github && (
                                                            <a
                                                                href={member.social.github}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className={styles.memberSocialLink}
                                                                title="GitHub"
                                                            >
                                                                <Github size={16} />
                                                            </a>
                                                        )}
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </section>
                )}
            </div>
        </div>
    );
};

export default MentorProfile;