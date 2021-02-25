# docker-laravel02

docker-laravel01を以下のコンテナ構成に拡張したもの

- web
- app
- db
- memcached
- node

## 以下導入手順

### Dockerビルド
- `docker-compose up -d --build`

### appコンテナに入りLaravelインストール
- `docker exec -it app_1 ash`
- `Project directory "/work/." is not empty.` が出たら、
`rm .DS_Store`
- `composer create-project --prefer-dist laravel/laravel .`

### MySQLに接続、マイグレーション確認
- `laravel-app/.env` を編集
```
DB_CONNECTION=mysql
DB_HOST=db_1 // 変更
DB_PORT=3306
DB_DATABASE=laravel_local // 変更
DB_USERNAME=admin // 変更
DB_PASSWORD=password // 変更
```
- `php artisan migrate`
- Access denied エラーが出たら、appコンテナを抜けて以下を実行<br>参考(https://qiita.com/fumi_042/items/7d1c14e335ab1c226e0f)

```
docker-compose down --volumes
docker-compose up -d --build
```

### npmインストール
- `docker exec -it node_1 ash`
- `npm install`
- `npm run dev`

### memcached接続確認
- `laravel-app/.env` を編集
```
CACHE_DRIVER=memcached // 変更

MEMCACHED_HOST=memcached_1 // 追記
MEMCACHED_PORT=11211 // 追記
```
- `docker exec -it app_1 ash`
- `php artisan tinker`
- `\Cache::store('memcached')->put('sample_key', 'sample_value', 600);`
- `\Cache::store('memcached')->get('sample_key');`<br>`'sample_value'`と表示されれば接続確認完了

