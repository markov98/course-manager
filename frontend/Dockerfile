FROM node:18

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Expose Angular's default dev server port
EXPOSE 4200

# Start with Angular CLI's dev server
CMD ["npx", "ng", "serve", "--host", "0.0.0.0"]