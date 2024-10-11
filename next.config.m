/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/', // URL d'origine
        destination: '/home', // URL de destination
        permanent: true, // Redirection permanente (HTTP 301)
      },
    ];
  },
};

export default nextConfig;