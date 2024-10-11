/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [

      
        {
          protocol: 'https',
          hostname: 'cdn-icons-png.flaticon.com',
       },
        
        {
          protocol: 'https',
          hostname: 'flaticon.com',
       },
        
        {
            protocol: 'https',
            hostname: 'img.icons8.com',
         },
     
        {
            protocol: 'https',
            hostname: 'uxwing.com',
         },
        {
            protocol: 'https',
            hostname: 'cdn4.iconfinder.com',
         },
        
        {
          protocol: 'https',
          hostname: 'cdn.iconscout.com',
        },
        {
          protocol: 'https',
          hostname: 'freesvg.org',
        },
        {
          protocol: 'https',
          hostname: 'icons.veryicon.com',
        },
        {
          protocol: 'https',
          hostname: 'seeklogo.com',
        },
        {
          protocol: 'https',
          hostname: 'static-00.iconduck.com',
        },
        {
          protocol: 'https',
          hostname: 'upload.wikimedia.org',
        },
      ],
      deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
      imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
      formats: ['image/avif', 'image/webp'],
    },
    reactStrictMode: true,
    swcMinify: true,
  };
  
  export default nextConfig;
  