const cheerio = require('cheerio');

module.exports = function (markdown) {
    const $ = cheerio.load(markdown);
    const $readme = $('#readme-help');

    const intro = $readme.attr('intro');
    const promptMessage = $readme.attr('prompt');
    let level = 2;
    try {
        level = parseInt($readme.attr('level')) || 2;
    } catch(e) {}
    const headingMarkdown = '#'.repeat(level);
    const headingRegex = new RegExp(`(?:^|\n)${headingMarkdown}(.*?)\n`);
    const readmeHelpMarkdown = $readme.html();
    
    let parts = readmeHelpMarkdown.split(headingRegex);
    if (!parts.length) {
        return {
            promptMessage,
            intro,
            sections: [],
        }
    }
    
    if (parts[0].trim() === '') {
        parts = parts.slice(1);
    }

    const sections = [];
    while (parts.length > 1) {
        sections.push({
            title: parts.shift().trim(),
            contents: parts.shift(),
        })
    }
    return {
        promptMessage,
        intro,
        sections,
    }
}
