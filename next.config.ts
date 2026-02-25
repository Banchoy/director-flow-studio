import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    experimental: {
        // Necessário para suporte ao driver adapter do Prisma com Turso
        serverComponentsExternalPackages: ["@libsql/client"],
    },
}

export default nextConfig
