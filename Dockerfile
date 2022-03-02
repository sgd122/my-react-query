FROM node:16.14.0-alpine3.14

# Creating working directory
WORKDIR /code

ENV PATH /code/node_modules/.bin:$PATH

COPY package.json /code/package.json
RUN yarn

CMD ["yarn", "start"]
