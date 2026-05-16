import os
import glob
import re

html_files = glob.glob('*.html')

for file in html_files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()

    # We can replace the precise anchor tags
    # Header links
    content = re.sub(r'<a([^>]*href=)"#"([^>]*>Home</a>)', r'<a\1"index.html"\2', content)
    content = re.sub(r'<a([^>]*href=)"#"([^>]*>About</a>)', r'<a\1"about.html"\2', content)
    content = re.sub(r'<a([^>]*href=)"#"([^>]*>Services</a>)', r'<a\1"services.html"\2', content)
    content = re.sub(r'<a([^>]*href=)"#"([^>]*>Case Studies</a>)', r'<a\1"case-studies.html"\2', content)
    content = re.sub(r'<a([^>]*href=)"#"([^>]*>Pricing</a>)', r'<a\1"pricing.html"\2', content)
    content = re.sub(r'<a([^>]*href=)"#"([^>]*>Blogs</a>)', r'<a\1"blogs.html"\2', content)
    content = re.sub(r'<a([^>]*href=)"#"([^>]*>Contact</a>)', r'<a\1"contact.html"\2', content)
    content = re.sub(r'<a([^>]*href=)"#"([^>]*>Privacy Policy</a>)', r'<a\1"legal.html"\2', content)
    content = re.sub(r'<a([^>]*href=)"#"([^>]*>Terms of Service</a>)', r'<a\1"legal.html"\2', content)

    # Some headers might have buttons without anchor tags for Contact. But let's check for any Contact button/link.
    
    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)

print("Navigation updated successfully.")
