FROM node:12

WORKDIR /www/app

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 3030

CMD ["npm", "run", "dev"]


