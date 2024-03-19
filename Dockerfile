FROM node:16

LABEL author="tangxiaoxin"

LABEL email="1302947749@qq.com"

RUN apt-get update
RUN apt-get install git -y

RUN git clone https://github.com/ziluo-tang/nest-server.git /app/nest-server

EXPOSE 3000

WORKDIR /app/nest-server

RUN npm install && \
    npm run build

RUN rm -rf src && \
rm -rf test && \
rm -rf tsconfig.json && \
rm -rf yarn.lock && \
rm -rf .gitignore && \
rm -rf .eslintrc.js && \
rm -rf .prettierrc.js && \
rm -rf .vscode && \
rm -rf .git && \
rm -rf .idea && \
rm -rf .DS_Store


CMD node dist/main