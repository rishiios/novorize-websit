$files = Get-ChildItem -Filter "*.html"
foreach ($f in $files) {
    $content = Get-Content -Path $f.FullName -Raw
    $content = $content -replace '<a([^>]*href=)"#"([^>]*>Home</a>)', '<a$1"index.html"$2'
    $content = $content -replace '<a([^>]*href=)"#"([^>]*>About</a>)', '<a$1"about.html"$2'
    $content = $content -replace '<a([^>]*href=)"#"([^>]*>Services</a>)', '<a$1"services.html"$2'
    $content = $content -replace '<a([^>]*href=)"#"([^>]*>Case Studies</a>)', '<a$1"case-studies.html"$2'
    $content = $content -replace '<a([^>]*href=)"#"([^>]*>Pricing</a>)', '<a$1"pricing.html"$2'
    $content = $content -replace '<a([^>]*href=)"#"([^>]*>Blogs</a>)', '<a$1"blogs.html"$2'
    $content = $content -replace '<a([^>]*href=)"#"([^>]*>Contact</a>)', '<a$1"contact.html"$2'
    $content = $content -replace '<a([^>]*href=)"#"([^>]*>Privacy Policy</a>)', '<a$1"legal.html"$2'
    $content = $content -replace '<a([^>]*href=)"#"([^>]*>Terms of Service</a>)', '<a$1"legal.html"$2'
    Set-Content -Path $f.FullName -Value $content -Encoding UTF8
}
Write-Host "Navigation updated successfully."
