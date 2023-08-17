FROM node:16-bullseye

WORKDIR /app-genderless

COPY package.json ./
RUN npm install

COPY . .

EXPOSE 3001
CMD [ "npm", "start" ]

