## Birdhouse tracking app

Opensource project for storing and track birdhouses and yearly species in each birdhouses. 

### Development quickstart

Requires `docker` `docker-compose` and `nvm` along with `npm` and `node`

1. Start DB (from folder `cms`)
```
$ docker-compose -f birdhouse.yml up
```
2. Start Strapi backend (from folder `cms`)
```
$ nvm use && npm i && npm run build && npm run develop
```
3. Start Next.JS React UI (from folder `ui`)
```
$ nvm use && npm i && npm run dev
```
