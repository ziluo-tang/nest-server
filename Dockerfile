FROM node:16

LABEL author="tangxiaoxin"

LABEL email="1302947749@qq.com"

RUN apt-get update
RUN apt-get install git -y

RUN git config --global user.email "1302947749@qq.com"

RUN git config --global user.name "tangxiaoxin"

WORKDIR /app

RUN git clone https://github.com/ziluo-tang/nest-server.git /nest-server

WORKDIR /nest-server

RUN npm install
RUN npm run build

CMD node dist/main