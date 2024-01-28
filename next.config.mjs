/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.dicebear.com",
        port: "",
        pathname: "/7.x/pixel-art/**",
      },
      {
        protocol: "https",
        hostname: "cdn.modyo.cloud",
        port: "",
        pathname: "/uploads/**",
      },
    ],
  },
};

export default nextConfig;
