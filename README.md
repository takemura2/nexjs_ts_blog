# dockerでのnextjs開発環境構築

### nodeコンテナの起動
```
cd docker
docker compose up -d
```

### nodeコンテナに入る
```
docker exec -it nextjs-sample1 zsh
```
### 必要モジュールのインストール(初回のみ)
```
npm init
```

### 起動
```npm run dev```

### 確認
http://localhost:3000

### コンテナの削除
dockerディレクトリに移動し
```
docker compose down
```
