module.exports = {
  // basePath: '/n', // only for export
  eslint: {
    // Warning: Dangerously allow production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true
  },
  trailingSlash: true,
  // images: {
  //   loader: 'akamai',
  //   path: 'https://grupolozano.com.mx/n/'
  // },
  // only for export
  exportPathMap: async function (defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
    return {
      '/': { page: '/' },
      '/about': { page: '/about' },
      '/contact': { page: '/contact' },
      '/market-reports': { page: '/market-reports' },
      '/market-reports/gdt': { page: '/market-reports/gdt' },
      '/market-reports/gdt/product': { page: '/market-reports/gdt/product' },
      '/market-reports/graphics': { page: '/market-reports' },
      '/market-reports/imports': { page: '/market-reports' },
      '/milk-partners': { page: '/milk-partners' },
      '/news': { page: '/news' },
      '/products-services': { page: '/products-services' },
      '/privacy': { page: '/privacy' }
    }
  }
}
