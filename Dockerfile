# version of node to use
FROM node:12
# define working directory for docker
WORKDIR /usr/src/app
# copy all our source code into the working directory
COPY . .
# install npm dependencies
RUN npm install --only=production
# build for production
RUN npm run build
RUN rm -r `ls | grep -v "build\|app.yaml"`
# expose port 8080 for our server to run on
EXPOSE 8080
# command to start our server
CMD [ "npm", "start" ]