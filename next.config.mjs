/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol: "https",
                hostname:"images.unsplash.com"
            },
            {
                protocol: "https",
                hostname:"c1.wallpaperflare.com"
            },
            {
                protocol: "https",
                hostname:"c0.wallpaperflare.com"
            }
        ]
    }
};

export default nextConfig;
