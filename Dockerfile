FROM node:alpine

# 設置此路徑為工作目錄，接下來的命令皆會以此目錄為起點執行。
WORKDIR /usr/app

# 先建立一個空的server目錄，放入 package.json、tsconfig.json
RUN mkdir server
COPY ./server/package.json ./server/package.json

# 切換目錄到 app/server後，安裝依賴
RUN cd ./server && npm install

# 將當前所有內容複製到WORKDIR
COPY . .

RUN cd ./server && npm run build

# 在 /app 裡，執行 npm start 啟動server
CMD ["npm", "start"]