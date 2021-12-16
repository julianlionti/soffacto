FROM node:14.15.4-alpine as build

WORKDIR /app

COPY package*.json ./

FROM build as test
RUN npm ci
COPY . .
CMD [ "npm", "run", "test" ]

RUN npm install

COPY . .

RUN npm run build

FROM nginx:1.21.3

COPY --from=build /app/dist/ /usr/share/nginx/html
COPY --from=build /app/nginx/nginx.conf /etc/nginx/conf.d/default.conf

ENTRYPOINT ["nginx", "-g", "daemon off;"]