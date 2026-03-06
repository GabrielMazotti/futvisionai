
## Alterar link dos botões WhatsApp

**Tarefa**: Atualizar o destino dos dois botões CTA da página para um novo link WhatsApp com mensagem personalizada da Beatriz.

**Estrutura atual**:
- Ambos os botões na página (hero + "O QUE RECEBES") utilizam `CTAButton` que importa `TELEGRAM_INVITE_URL` de `src/lib/constants.ts`
- A constante está centralizada, facilitando a alteração

**O que alterar**:
- Atualizar `TELEGRAM_INVITE_URL` em `src/lib/constants.ts` para o novo link:
  ```
  https://wa.me/5531973637973?text=Ol%C3%A1!%20Tudo%20bem%3F%20%F0%9F%98%8A%0A%0ASou%20a%20Beatriz%2C%20da%20FutVision.%20Vi%20que%20queres%20a%20nossa%20IA%20a%20render%20para%20ti%20hoje%2C%20certo%3F%20Como%20te%20chamas%3F
  ```
- Nenhuma outra alteração necessária, pois ambos os botões já referenciam esta constante

**Efeito**: Os dois botões "QUERO O MEU ACESSO" e "ENTRAR AGORA" redirecionarão para o novo número (+35 31973637973) com a mensagem de apresentação da Beatriz.
