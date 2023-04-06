FROM node:14.16.1-alpine

WORKDIR /app/frontend

COPY frontend/package*.json .
RUN npm install

COPY frontend/ .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
