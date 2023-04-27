
FROM node:18.16

# Directorio
WORKDIR /memoriesofthenile

COPY package*.json ./ 

#Instalar dependencias
RUN npm install

COPY . .

RUN npm run build

EXPOSE 4000

CMD ["npm", "start"]