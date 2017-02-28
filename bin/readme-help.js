#!/usr/bin/env node
const fs = require('fs');
const readmeMarkdown = fs.readFileSync('README.md').toString();

require('../index.js')(readmeMarkdown);