const fs = require('fs');

const files = ['index.html', 'about.html', 'services.html', 'case-studies.html', 'pricing.html', 'blogs.html', 'contact.html'];

files.forEach(f => {
    let content = fs.readFileSync(f, 'utf8');

    // Extract title and description
    const titleMatch = content.match(/<title>(.*?)<\/title>/i);
    const title = titleMatch ? titleMatch[1] : "NAIZO";
    
    const descMatch1 = content.match(/<meta\s+name="description"\s+content="([^"]*)"\s*\/?>/i);
    const descMatch2 = content.match(/<meta\s+content="([^"]*)"\s+name="description"\s*\/?>/i);
    const description = (descMatch1 && descMatch1[1]) ? descMatch1[1] : ((descMatch2 && descMatch2[1]) ? descMatch2[1] : "Grow your local business online with NAIZO.");

    // Remove existing og and twitter tags
    content = content.replace(/<meta\s+(property|name)="(og|twitter):[^"]*"\s+content="[^"]*"\s*\/?>\s*/gi, '');
    
    // Remove existing schema scripts
    content = content.replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>\s*/gi, '');

    // Base Schema
    const schemas = [
        {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "NAIZO",
            "url": "https://naizo.in/",
            "logo": "https://naizo.in/logo.png",
            "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-9546059823",
                "contactType": "customer service"
            }
        },
        {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "NAIZO",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Bihta, Patna",
                "addressRegion": "Bihar",
                "addressCountry": "IN",
                "postalCode": "801103"
            },
            "telephone": "+91-9546059823",
            "url": "https://naizo.in/"
        },
        {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "NAIZO",
            "url": "https://naizo.in/"
        },
        {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://naizo.in/"
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "name": title.split(' | ')[0],
                    "item": `https://naizo.in/${f === 'index.html' ? '' : f}`
                }
            ]
        }
    ];

    // FAQ Schema
    if (f === 'pricing.html') {
        schemas.push({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {"@type": "Question", "name": "Are there any hidden costs?", "acceptedAnswer": {"@type": "Answer", "text": "No, our pricing is completely transparent. What you see is what you pay."}},
                {"@type": "Question", "name": "Do I have to pay every month?", "acceptedAnswer": {"@type": "Answer", "text": "For website development, it's a one-time fee. Monthly marketing plans are optional."}}
            ]
        });
    } else if (f === 'contact.html') {
        schemas.push({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {"@type": "Question", "name": "How quickly do you respond?", "acceptedAnswer": {"@type": "Answer", "text": "We usually respond within 2 hours during business time."}},
                {"@type": "Question", "name": "Do you work outside Bihar?", "acceptedAnswer": {"@type": "Answer", "text": "Yes, we handle clients across India seamlessly via remote communication."}}
            ]
        });
    } else if (f === 'services.html') {
        schemas.push({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {"@type": "Question", "name": "What services do you provide?", "acceptedAnswer": {"@type": "Answer", "text": "We specialize in Website Development, Social Media Marketing, and Local SEO."}},
                {"@type": "Question", "name": "Do you help local businesses?", "acceptedAnswer": {"@type": "Answer", "text": "Yes, we are experts in growing schools, clinics, restaurants, and retail shops."}}
            ]
        });
    } else if (f === 'blogs.html') {
        schemas.push({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": title,
            "description": description,
            "author": {"@type": "Organization", "name": "NAIZO"},
            "publisher": {"@type": "Organization", "name": "NAIZO", "logo": {"@type": "ImageObject", "url": "https://naizo.in/logo.png"}},
            "datePublished": "2026-05-30"
        });
    }

    const schemaTags = schemas.map(s => `<script type="application/ld+json">\n${JSON.stringify(s, null, 2)}\n</script>`).join('\n');

    const ogTags = `
<meta property="og:title" content="${title}" />
<meta property="og:description" content="${description}" />
<meta property="og:image" content="https://naizo.in/social-preview.png" />
<meta property="og:url" content="https://naizo.in/${f === 'index.html' ? '' : f}" />
<meta property="og:type" content="${f === 'blogs.html' ? 'article' : 'website'}" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="${title}" />
<meta name="twitter:description" content="${description}" />
<meta name="twitter:image" content="https://naizo.in/social-preview.png" />
`;

    const newHeadContent = ogTags + "\n" + schemaTags + "\n</head>";
    content = content.replace("</head>", newHeadContent);

    fs.writeFileSync(f, content, 'utf8');
    console.log(`Injected OG and Schema for ${f}`);
});
