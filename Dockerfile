FROM node:12-alpine AS builder
WORKDIR /socket.io/build
COPY . .
RUN npm install 


FROM node:12-alpine 
WORKDIR /socket.io/run
COPY --from=builder /socket.io/build .
EXPOSE 3000
CMD ["node", "index.js"]