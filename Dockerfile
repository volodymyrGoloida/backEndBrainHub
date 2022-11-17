FROM node:14 

WORKDIR /app

COPY package.json ./
COPY package-lock.json ./

RUN npm install

COPY . ./

RUN npm run build

EXPOSE 5835

CMD ["npm", "run","build" ]

