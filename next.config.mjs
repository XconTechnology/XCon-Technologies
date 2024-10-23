/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "nodejs.org",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "seeklogo.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "laravel.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.iconscout.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.vectorlogo.zone",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "static.xx.fbcdn.net",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn4.iconfinder.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn3.iconfinder.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "storage.googleapis.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "pixelpk.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "icon.icepanel.io",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "*.amazonaws.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "github.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "d2jdgazzki9vjm.cloudfront.net",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "brandslogos.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "img.freepik.com",
        pathname: "/**",
      },
    ],
    // Add this for local images
    unoptimized: false, // Keep image optimization
    dangerouslyAllowSVG: true, // If you're using SVG images
  },
};

export default nextConfig;
