

# Otimizacao de Performance - Corrigir PageView 40%

## Problema Identificado

A pagina esta perdendo 60% dos PageViews porque o GTM nao consegue disparar antes do navegador travar em dispositivos mais lentos. As causas principais sao:

### 1. RadarAnimation com requestAnimationFrame + setState (CRITICO)
O componente `RadarAnimation.tsx` executa `requestAnimationFrame` em loop infinito, chamando `setSweepAngle()` e `setDollarSigns()` a cada frame (~60x por segundo). Isso causa re-renders massivos do React e consome toda a CPU, especialmente em celulares.

### 2. Google Fonts via @import no CSS (BLOQUEANTE)
O `index.css` carrega duas fontes (Inter + Space Grotesk) via `@import url(...)`, que bloqueia a renderizacao da pagina ate as fontes serem baixadas.

### 3. Framer Motion em todos os elementos do Hero
Todas as animacoes do HeroSection usam `motion.div` com `initial={{ opacity: 0 }}`, o que significa que o conteudo principal fica invisivel ate o JavaScript carregar e executar.

---

## Plano de Correcao

### Passo 1: Reescrever RadarAnimation com CSS puro
- Substituir o `requestAnimationFrame` + `setState` por uma animacao CSS `@keyframes rotate` para o sweep
- Os sinais de `$` serao animados com `animation-delay` em CSS ao inves de logica JavaScript
- Isso elimina completamente os re-renders do React

### Passo 2: Mover Google Fonts para o index.html com preconnect
- Remover o `@import` do `index.css`
- Adicionar `<link rel="preconnect">` e `<link rel="stylesheet">` no `index.html` com `display=swap`
- Adicionar `font-display: swap` para que o texto apareca imediatamente com fonte fallback

### Passo 3: Remover opacity:0 inicial do HeroSection
- Trocar as animacoes `initial={{ opacity: 0 }}` do framer-motion por animacoes que nao escondem o conteudo
- Alternativa: usar CSS animations simples com `animate-fade-up` que ja existem no projeto
- O conteudo principal (titulo, subtitulo, CTA) ficara visivel imediatamente

### Passo 4: Lazy load do RadarAnimation
- Envolver o `RadarAnimation` com `React.lazy()` e `Suspense`
- Isso permite que o conteudo acima (titulo + CTA) renderize primeiro
- O radar carrega depois sem bloquear a pagina

---

## Arquivos Modificados

| Arquivo | Alteracao |
|---------|-----------|
| `src/components/RadarAnimation.tsx` | Reescrever para usar CSS animations ao inves de requestAnimationFrame |
| `src/index.css` | Remover @import de Google Fonts |
| `index.html` | Adicionar link preconnect + stylesheet para fontes |
| `src/components/sections/HeroSection.tsx` | Simplificar animacoes para nao esconder conteudo |

## Resultado Esperado

- A pagina renderiza conteudo visivel em menos de 1 segundo
- O GTM dispara antes do usuario desistir
- A CPU do celular nao fica travada com re-renders
- PageView deve subir significativamente (proximo de 80-100%)

