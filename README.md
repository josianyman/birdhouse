### Quickstart

1. Start DB (from folder ./cms)

```
$ docker-compose -f birdhouse.yml up
```

2. Start Strapi backend (from folder ./cms)

```
$ nvm use && npm i && npm run build && npm run develop
```

3. Start Next.JS React UI (from folder ./pwa)

```
$ nvm use && npm i && npm run dev
```
