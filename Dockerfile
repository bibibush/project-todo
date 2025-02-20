FROM node:20

WORKDIR /app
COPY . .
RUN npm install --force

CMD ["npm", "run", "deploy"]

EXPOSE 3000