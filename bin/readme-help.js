#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const readmeMarkdown = fs.readFileSync(path.relative(process.cwd(), 'README.md')).toString();

require('../index.js')(readmeMarkdown);