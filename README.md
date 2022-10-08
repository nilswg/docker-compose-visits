# docker-compose-visits

一個簡單的訪問網絡應用, 使用 nodejs構建,並由docker-compose自動部署。
要先安裝docker，如果是windows或mac則要安裝對應的docker桌面應用程式

啟動容器，可輸入
```bash
docker-compose up -d
```

當鏡像內容有修改時，希望重建容器後再啟動時，可輸入
```bash
docker-compose up --build
```

停止正在運行的容器，可輸入
```bash
docker-compose down
```

當容器已經停止時，欲清除所有資料紀錄，可輸入
```bash
npm run docker-clean
```

目前對外預設監聽埠口為 8001，亦可自行至 docker-compose.yml 去修改為其他埠口。
```
http://localhost:8001
```


其他配置細節可參考 Notion 文件連結 📚 https://gratis-number-79a.notion.site/Docker-Multiple-Containers-5f142bba470547359e48436953732a53

Demo 影片 👀
![docker-compose-visits-demo](https://user-images.githubusercontent.com/64550861/194639482-b5545ee1-0538-4e5e-8a77-9a3283985fff.gif)