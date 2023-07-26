FROM node:18-alpine

WORKDIR /app

COPY . .

ENV PORT=3000

EXPOSE 3000

RUN npm install --production

RUN npm run build

CMD ["npm", "start"]
