FROM node:20

WORKDIR /app
COPY . .
RUN npm install
RUN npx prisma migrate deploy
RUN npx prisma generate 
RUN npm run build

CMD ["npm", "start"]

EXPOSE 3000