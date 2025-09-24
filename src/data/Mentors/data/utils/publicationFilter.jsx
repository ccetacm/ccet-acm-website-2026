export const filterPublicationsForSudhakar = (allPublications) => {
    const filtered = {};

    Object.entries(allPublications).forEach(([year, publications]) => {
        // Ensure publications is an array
        const pubsArray = Array.isArray(publications) ? publications : [publications];

        const sudhakarPubs = pubsArray.filter(pub => {
            const authors = pub.authors || '';

            // More comprehensive name matching
            return authors.includes("Sudhakar Kumar") ||
                authors.includes("Kumar, S.") ||
                authors.includes("Kumar, Sudhakar") ||
                authors.includes("S. Kumar") ||
                authors.includes("Sudhakar") ||
                /Kumar,\s*S(\.|udhakar)?/i.test(authors) ||
                /Sudhakar\s*Kumar/i.test(authors) ||
                // Split by comma and check each author part
                authors.split(',').some(author => {
                    const trimmedAuthor = author.trim();
                    return trimmedAuthor === "S. Kumar" ||
                        trimmedAuthor === "Sudhakar Kumar" ||
                        trimmedAuthor === "S Kumar" ||
                        trimmedAuthor === "Kumar S" ||
                        /^S\.?\s*Kumar$/i.test(trimmedAuthor) ||
                        /^Sudhakar\s*Kumar$/i.test(trimmedAuthor);
                });
        });

        if (sudhakarPubs.length > 0) {
            filtered[year] = sudhakarPubs;
        }
    });

    return filtered;
};