/** @type {import('next').NextConfig} */


module.exports = {
    webpack: (config) => {
      config.module.rules.push({
        test: /\.(mp3)$/,
        use: {
          loader: 'file-loader',
          options: {
            publicPath: '/_next/static/sounds/',
            outputPath: 'static/sounds/',
            name: '[name].[ext]',
            esModule: false,
          },
        },
      });
      return config;
    },
    images:{
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.pexels.com',
        },
        {
          protocol: 'https',
          hostname: 'lh3.googleusercontent.com',
        },
        {
          protocol: 'https',
          hostname: 'firebasestorage.googleapis.com',
        }
        
      ]
  }
  }; 

  