FROM node:14-alpine as build
WORKDIR /app
COPY package.json .
RUN npm i
COPY ./ .
RUN ["npm","run","build"]

FROM node:14-alpine
# RUN apk install dumb-init
ENV NODE_ENV production
# USER node
WORKDIR /app
COPY --from=build /app/package.json .
RUN npm i --only=production
COPY --from=build /app/dist /app/dist
ARG PORT=30200
ENV PORT=${PORT}
EXPOSE ${PORT}
ENTRYPOINT ["node","dist/main"]