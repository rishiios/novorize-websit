const fs = require('fs');

const descriptions = {
    'about.html': 'Learn about NAIZO, a Bihar-based digital growth agency dedicated to helping local businesses, schools, and clinics get more customers online.',
    'services.html': 'NAIZO offers premium website development, social media marketing, and local SEO services to help your business dominate the local market.',
    'case-studies.html': 'Explore real success stories of schools, clinics, and restaurants that scaled their growth and revenue using NAIZO\'s digital marketing strategies.',
    'pricing.html': 'Transparent and affordable pricing for website development and marketing packages. Start your digital growth journey with NAIZO today.',
    'contact.html': 'Get in touch with NAIZO. Book a free consultation and let\'s discuss how we can grow your business with a stunning website and smart marketing.',
    'blogs.html': 'Read the latest insights, tips, and strategies on digital marketing, local SEO, and business growth from the experts at NAIZO.',
    'legal.html': 'Privacy policy and terms of service for NAIZO.'
};

for (const [file, desc] of Object.entries(descriptions)) {
    if (!fs.existsSync(file)) continue;
    let content = fs.readFileSync(file, 'utf8');

    // Remove any existing standard description meta
    content = content.replace(/<meta\s+name="description"\s+content="[^"]*"\s*\/?>/gi, '');
    content = content.replace(/<meta\s+content="[^"]*"\s+name="description"\s*\/?>/gi, '');

    // Add the new standard description right after <title>
    content = content.replace(/(<title>.*?<\/title>)/i, `$1\n<meta name="description" content="${desc}" />`);

    // Update og:description
    content = content.replace(/<meta property="og:description" content="[^"]*" \/>/gi, `<meta property="og:description" content="${desc}" />`);
    
    // Update twitter:description
    content = content.replace(/<meta name="twitter:description" content="[^"]*" \/>/gi, `<meta name="twitter:description" content="${desc}" />`);

    // Add canonical to legal.html if missing
    if (file === 'legal.html' && !content.includes('rel="canonical"')) {
        content = content.replace(/(<meta name="description".*?>)/i, `$1\n<link rel="canonical" href="https://naizo.in/legal"/>`);
    }

    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated descriptions for ${file}`);
}
