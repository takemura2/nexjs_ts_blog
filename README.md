# dockerでのnextjs開発環境構築(typescriptでのblogサンプル)

### nodeコンテナの起動
```
docker compose up -d
```

### nodeコンテナに入る
```
docker exec -it nextjs_ts_blog bash
```
### 必要モジュールのインストール(初回のみ)
```
cd app
npm install
```

### 起動
```npm run dev```

### 確認
http://localhost:3000

### コンテナの削除
```
docker compose down
```
