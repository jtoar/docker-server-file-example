# README

To reproduce...

- upgrade to the RC:

```bash
yarn rw upgrade -t rc
6.4.0-rc.45+cd3494993
```

- set up Docker:

```bash
yarn rw exp setup-docker
```

- set up the server file:

```bash
yarn rw exp setup-server-file
```

- diff the generated server file with the one [here](https://github.com/jtoar/docker-server-file-example/blob/main/api/src/server.ts); there's a few changes you'll have to make (in particular, the host)

- add the `@redwoodjs/realtime` package:

```bash
# make sure the version is the same as all the other `@redwoodjs` packages:
yarn workspace api add @redwoodjs/realtime@6.4.0-rc.45
```

- update the `Dockerfile` to use the server file:

```diff
- CMD [ "node_modules/.bin/rw-server", "api", "--load-env-files" ]
+ CMD [ "node", "./api/dist/server.js" ]
```

- if you're deploying to Fly, use their [CLI](https://fly.io/docs/hands-on/install-flyctl/). just say yes to everything (but you can say no to the Postgresql and Upstash redis databases if you don't want them):

```bash
flyctl launch
```

- after you get a fly.toml, carefully look at the diff in this commit: https://github.com/jtoar/docker-server-file-example/commit/07810611e270f2c1136a5e17bce1763d8f87c487. particularly, the changes to migrate.sh and start.sh, they include the full paths to the app (`/home/node/app/...`)

- proof this works: https://small-pine-440.fly.dev/ (the machine is most likely suspended to save resources, but i assure you i deployed it!)
