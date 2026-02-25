# PRD - DirectorFlow IA & Anime Studio

## 1. Visão Geral
O DirectorFlow é um orquestrador de IA para criação de vídeos cinematográficos e Animes. O sistema utiliza um modelo de "Bring Your Own Key" (BYOK), focando em alta performance e baixo custo operacional.

## 2. Novas Funcionalidades: Foco em Anime
### 2.1 Estúdio de Anime (New)
- **Anime Engine:** Integração com modelos especializados em Cel-shading e Estética 2D.
- **Character Consistency:** Opção para manter o mesmo personagem em diferentes cenas (via Seed/LoRA).
- **Storyboard de Anime:** Geração de decupagem visual no estilo mangá antes da animação.

### 2.2 Agente de Inteligência (LLM)
- **Motor Principal:** DeepSeek V3.2 (Substituindo ChatGPT).
- **Capacidade:** Roteirização criativa, diálogos dramáticos e estruturação de cenas com 128k de contexto.

### 2.3 Central de APIs (Gratuitas/Freemium)
- **Texto:** DeepSeek (5M tokens free).
- **Voz:** ElevenLabs (Camada gratuita de 10k caracteres).
- **Imagem/Anime:** Leonardo.ai (150 tokens/dia) ou Hugging Face (Serverless Free).

## 3. Workflow Atualizado
1. **Brainstorm:** DeepSeek gera o roteiro e as descrições de cenas (prompts).
2. **Criação de Ativos:** Leonardo.ai gera os frames no estilo Anime selecionado.
3. **Animação:** Luma Dream Machine ou Kling (via API) animam os frames.
4. **Finalização:** Agente de Sonoplastia une áudio e vídeo.