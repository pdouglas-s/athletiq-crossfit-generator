/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configurações otimizadas para produção
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  // Configuração para deploy estático (descomente se usar GitHub Pages)
  // output: 'export',
  // trailingSlash: true,
  // images: {
  //   unoptimized: true
  // }
}

module.exports = nextConfig
