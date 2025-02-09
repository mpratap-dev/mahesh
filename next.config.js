module.exports = {
    images: {
        domains: ['res.cloudinary.com', 'media2.dev.to'],
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'media2.dev.to',
              port: '',
              pathname: '/cdn-cgi/image/**',
            },
          ],
    },
}
