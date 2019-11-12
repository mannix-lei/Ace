FROM node

COPY package*.json ./

RUN npm install

RUN npm run build

COPY dist/ /usr/share/nginx/html/