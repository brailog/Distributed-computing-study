Antes de começar, assista a este tutorial para iniciantes em Sockets com Node.JS:
https://www.youtube.com/watch?v=R84rTfBMaoU

# Exercício

1. Semelhante ao exemplo do vídeo acima, crie uma aplicação console que funcionará como chat ponto a ponto, onde um cliente utiliza socket para se conectar a um Servidor. Tanto no cliente como no servidor será possível digitar mensagens do chat a partir do console.
---
2. Baseado no exemplo anterior, crie uma nova versão para o chat, desta vez com suporte a conexão simultânea de vários clientes. Agora o servidor não necessita mais receber texto do console. Ele será apenas o mediador das mensagens entre os vários clientes conectados.   
Alguns requisitos:  
- 2.1. O servidor deve pedir ao usuário cliente para digitar um nome de modo que as mensagens decada usuário possam ser identificadas.  
- 2.2 As mensagens enviadas por um cliente são replicadas para todos os outros clientes.  

> **Exemplo hipotético de conversação:**
Alex: Muito bom esse servidor.  
Ze: vsf muito complicado programar com sockets  
Maria: Pra mim foi facinho. Vcs são enrolados.  
Alex: kkkkk  
Ze: LOL

---
**Perguntas para discussão**  
Quais as principais dificuldades?  
Quais as principais diferenças entre a implementação da questão 1 e da questão 2?  
Como gerenciar as conexões entre clientes na questão 2?  
Como identificar as mensagens e os remetentes para seguir a formatação do exemplo?  