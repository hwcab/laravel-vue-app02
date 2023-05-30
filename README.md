# laravel-vue-app02

- web
- app
- db

## 導入手順

## .envファイル作成
- .env.example を元に作成

### Dockerビルド
- `docker-compose up -d --build`

### appコンテナに入りLaravelインストール
- `docker exec -it lv2_app bash`
- `Project directory "/work/." is not empty.` が出たら、
`rm .DS_Store`
- `composer create-project --prefer-dist "laravel/laravel" .`

### MySQLに接続&マイグレーション確認
- `laravel-app/.env` を編集
```
DB_CONNECTION=mysql
DB_HOST=lv2_db // 変更
DB_PORT=3306
DB_DATABASE=db_local // 変更
DB_USERNAME=admin // 変更
DB_PASSWORD=password // 変更
```
- `php artisan migrate`
- Access denied エラーが出たら、appコンテナを抜けて以下を実行<br>参考(https://qiita.com/fumi_042/items/7d1c14e335ab1c226e0f)

```
docker-compose down --volumes
docker-compose up -d --build
```

### vueインストール
- `docker exec -it lv2_node ash`
- `npm install -g @vue/cli`
- `rm -rf package.json webpack.mix.js`
- `vue create frontend`
- `cd frontend`
- `touch vue.config.js`
- `cd frontend`
- `mv src app`
- `mkdir src`
- `mv app src`
- `mkdir templates`
- `mv public/index.html templates/base.html`
