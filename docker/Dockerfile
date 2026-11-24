# Imagem oficial e otimizada do Node.js LTS
FROM node:20-alpine

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia os manifestos de dependência primeiro para aproveitar o cache de camadas do Docker
COPY package*.json ./

# Instala todas as dependências do projeto (produção e desenvolvimento)
RUN npm install

# Copia o restante dos arquivos do projeto
COPY . .

# Expõe a porta 3000 para acesso externo
EXPOSE 3000

# Executa o servidor de desenvolvimento nativo do Vite na porta 3000
CMD ["npm", "run", "dev"]
