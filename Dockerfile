FROM arm32v7/node

# Bundle APP files
COPY commands commands/
COPY events events/
COPY src src/
COPY package.json .
COPY process.yml .
COPY main.js main.js
COPY config.js config.js

# Install app dependencies
ENV NPM_CONFIG_LOGLEVEL warn
RUN npm install --production
RUN npm install pm2 -g

# Expose the listening port of your app
EXPOSE 3000

# Show current folder structure in logs
RUN ls -al -R

CMD ["pm2-runtime", "process.yml"]