const fs = require('fs');

const htmlFiles = [
    'index.html',
    'about.html',
    'services.html',
    'case-studies.html',
    'pricing.html',
    'contact.html',
    'blogs.html',
    'legal.html'
];

const faviconTags = `
    <!-- Favicons -->
    <link rel="icon" type="image/x-icon" href="/favicon.ico">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="apple-touch-icon" href="/apple-touch-icon.png">
`;

htmlFiles.forEach(file => {
    if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf8');

        // Remove the old SVG favicon
        content = content.replace(/<link rel="icon" type="image\/x-icon" href="data:image\/svg\+xml.*?>/g, '');
        content = content.replace(/<link rel="icon" type="image\/x-icon".*?>/g, '');
        content = content.replace(/<link rel="icon" type="image\/png".*?>/g, '');
        content = content.replace(/<link rel="apple-touch-icon".*?>/g, '');

        // Inject the new favicons before </head>
        content = content.replace('</head>', `${faviconTags.trim()}\n</head>`);

        fs.writeFileSync(file, content, 'utf8');
        console.log(`Injected favicons into ${file}`);
    }
});
