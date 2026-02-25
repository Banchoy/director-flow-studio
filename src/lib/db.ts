/**
 * Prisma Client — DirectorFlow
 *
 * Instancia o Prisma Client com o driver adapter do Turso (LibSQL).
 * Usa singleton pattern para evitar múltiplas conexões em desenvolvimento.
 *
 * Em produção (Vercel Edge Runtime), cria uma nova instância por request.
 */
import { PrismaClient } from '@prisma/client'
import { PrismaLibSql } from '@prisma/adapter-libsql'
import { createClient } from '@libsql/client'

declare global {
  // eslint-disable-next-line no-var
  var __prisma: PrismaClient | undefined
}

function createPrismaClient(): PrismaClient {
  const libsql = createClient({
    url: process.env.TURSO_DATABASE_URL!,
    authToken: process.env.TURSO_AUTH_TOKEN ?? '',
  })

  const adapter = new PrismaLibSql(libsql)

  return new PrismaClient({ adapter } as ConstructorParameters<typeof PrismaClient>[0])
}

export const db: PrismaClient =
  globalThis.__prisma ?? createPrismaClient()

if (process.env.NODE_ENV !== 'production') {
  globalThis.__prisma = db
}
