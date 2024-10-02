/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['uxwing.com','cdn4.iconfinder.com','cdn.iconscout.com', 'freesvg.org', 'icons.veryicon.com', 'seeklogo.com', 'static-00.iconduck.com', 'upload.wikimedia.org','img.icons8.com'], 
      deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
      imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
      formats: ['image/avif', 'image/webp'], // Formats d'image optimisés
    },
    reactStrictMode: true, // Option recommandée pour une meilleure détection des erreurs
    swcMinify: true, // Minification pour de meilleures performances
  };
  
  export default nextConfig;
  