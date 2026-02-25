# ARCH - Arquitetura DirectorFlow (Versão Anime & DeepSeek)

## 1. Stack e Provedores
- **LLM Engine:** DeepSeek API (Base URL: `https://api.deepseek.com`).
- **Anime/Image Generation:** Leonardo.ai API ou Hugging Face Inference API.
- **Video/Animation:** Luma Dream Machine (Ray-2) ou Kling AI.
- **Database:** Prisma + Turso (SQLite/LibSQL) - Conexão via `libsql://`.

## 2. Infraestrutura Online (Cloud)
- **Hospedagem:** Vercel (Frontend & Serverless Functions).
- **Banco de Dados:** Turso (SQLite/LibSQL) - Conexão via `libsql://`.
- **Variáveis de Ambiente:**
  - `TURSO_DATABASE_URL`: URL fornecida pelo dashboard do Turso.
  - `TURSO_AUTH_TOKEN`: Token de acesso do Turso.
  - `ENCRYPTION_KEY`: Chave para criptografar as APIs dos usuários.

## 3. Modelagem do Banco (Prisma Schema)
```prisma
model User {
  id        String   @id @default(cuid())
  email     String   @unique
  settings  Setting?
}

model Setting {
  id              String @id @default(cuid())
  userId          String @unique
  user            User   @relation(fields: [userId], references: [id])
  
  // Chaves de API Gratuitas/BYOK
  deepseekKey     String? // Para Roteiros (Grátis 5M tokens)
  elevenlabsKey   String? // Para Voz
  leonardoKey     String? // Para Anime/Imagens
  lumaKey         String? // Para Animação de Vídeo

  // Preferências de Anime
  animeStyle      String? @default("shonen") // shonen, seinen, ghibli
  isAnimeMode     Boolean @default(false)
}