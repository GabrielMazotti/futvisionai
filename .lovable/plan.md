

## Plano: Substituir rastreamentos pelo novo GTM

### O que será feito

No `index.html`, existem dois rastreamentos que serão removidos:
1. **GTM antigo** (`GTM-MVKFXPRG`) - no `<head>` (linhas 7-13) e no `<body>` (linhas 37-40)
2. **Track4You** - script externo (linhas 32-33)

Ambos serão removidos e substituídos pelo seu novo GTM **GTM-PLN4TGCF**, inserido corretamente:
- Script principal no `<head>`
- Fallback `<noscript>` no início do `<body>`

### Resultado final

O `index.html` terá apenas o GTM `GTM-PLN4TGCF` como rastreamento, sem nenhum outro pixel ou script de tracking.

