FROM node:14

WORKDIR /usr/src/app

COPY ./src .

RUN npm install

RUN npm install -g sequelize-cli

RUN npm install mysql2

EXPOSE 8000

CMD ["npm", "start"]