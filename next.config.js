module.exports = {
    images: {
        domains: ['res.cloudinary.com'],
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'media.dev.to',
              port: '',
              pathname: '/cdn-cgi/image/**',
            },
          ],
    },
}
