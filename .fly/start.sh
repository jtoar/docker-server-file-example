#!/bin/sh

set -ex

if [ -n $MIGRATE_ON_BOOT ]; then
  $(dirname $0)/migrate.sh
fi

node /home/node/app/api/dist/server.js --enable-web
