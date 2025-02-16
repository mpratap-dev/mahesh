module.exports = {
    images: {
        domains: ['media2.dev.to'],
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'media2.dev.to',
              port: '',
              pathname: '/dynamic/image/**',
            },
          ],
    },
}
