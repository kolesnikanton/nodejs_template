FROM node:latest

# To optimize
ENV NODE_ENV=production

# Directory as the default location for all subsequent commands
WORKDIR /app

# Copy files to install node_modules. Only copying the package.json files because this allows us to take advantage of cached Docker layers
COPY ["package.json", "package-lock.json*", "./"]

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
