/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'lizurfomyjlgtkcccepew.supabase.co',
            }
        ]
    }
}

module.exports = nextConfig
