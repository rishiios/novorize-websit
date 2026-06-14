import os
import re
import json

files = ['index.html', 'about.html', 'services.html', 'case-studies.html', 'pricing.html', 'blogs.html', 'contact.html']

for f in files:
    with open(f, 'r', encoding='utf-8') as file:
        content = file.read()

    # Extract title and description
    title_match = re.search(r'(?i)<title>(.*?)</title>', content)
    title = title_match.group(1) if title_match else "NAIZO"
    
    desc_match = re.search(r'(?i)<meta\s+(?:name="description"\s+content="([^"]*)"|content="([^"]*)"\s+name="description")\s*/?>', content)
    description = desc_match.group(1) if desc_match and desc_match.group(1) else (desc_match.group(2) if desc_match else "Grow your local business online with NAIZO.")

    # Remove existing og and twitter tags
    content = re.sub(r'(?i)<meta\s+(?:property|name)="(?:og|twitter):[^"]*"\s+content="[^"]*"\s*/?>\s*', '', content)
    
    # Remove existing schema to avoid duplicates (very naive removal, but works for the current format)
    content = re.sub(r'(?s)<script type="application/ld\+json">.*?</script>\s*', '', content)

    # Base Schema
    schemas = [
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
                    "item": f"https://naizo.in/{f if f != 'index.html' else ''}"
                }
            ]
        }
    ]

    # FAQ Schema logic
    if f == 'pricing.html':
        schemas.append({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {"@type": "Question", "name": "Are there any hidden costs?", "acceptedAnswer": {"@type": "Answer", "text": "No, our pricing is completely transparent. What you see is what you pay."}},
                {"@type": "Question", "name": "Do I have to pay every month?", "acceptedAnswer": {"@type": "Answer", "text": "For website development, it's a one-time fee. Monthly marketing plans are optional."}}
            ]
        })
    elif f == 'contact.html':
        schemas.append({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {"@type": "Question", "name": "How quickly do you respond?", "acceptedAnswer": {"@type": "Answer", "text": "We usually respond within 2 hours during business time."}},
                {"@type": "Question", "name": "Do you work outside Bihar?", "acceptedAnswer": {"@type": "Answer", "text": "Yes, we handle clients across India seamlessly via remote communication."}}
            ]
        })
    elif f == 'services.html':
        schemas.append({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {"@type": "Question", "name": "What services do you provide?", "acceptedAnswer": {"@type": "Answer", "text": "We specialize in Website Development, Social Media Marketing, and Local SEO."}},
                {"@type": "Question", "name": "Do you help local businesses?", "acceptedAnswer": {"@type": "Answer", "text": "Yes, we are experts in growing schools, clinics, restaurants, and retail shops."}}
            ]
        })

    # Article schema for blogs.html
    if f == 'blogs.html':
        schemas.append({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": title,
            "description": description,
            "author": {"@type": "Organization", "name": "NAIZO"},
            "publisher": {"@type": "Organization", "name": "NAIZO", "logo": {"@type": "ImageObject", "url": "https://naizo.in/logo.png"}},
            "datePublished": "2026-05-30"
        })

    schema_tags = "\n".join([f'<script type="application/ld+json">\n{json.dumps(s, indent=2)}\n</script>' for s in schemas])

    og_tags = f"""
<meta property="og:title" content="{title}" />
<meta property="og:description" content="{description}" />
<meta property="og:image" content="https://naizo.in/social-preview.png" />
<meta property="og:url" content="https://naizo.in/{f if f != 'index.html' else ''}" />
<meta property="og:type" content="{'article' if f == 'blogs.html' else 'website'}" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="{title}" />
<meta name="twitter:description" content="{description}" />
<meta name="twitter:image" content="https://naizo.in/social-preview.png" />
"""

    new_head_content = og_tags + "\n" + schema_tags + "\n</head>"
    content = content.replace("</head>", new_head_content)

    with open(f, 'w', encoding='utf-8') as file:
        file.write(content)
    
    print(f"Injected OG and Schema for {f}")
