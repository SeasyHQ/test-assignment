# test-assignment

## use cases for frontend

## use cases for backend

- query marinas, cities, countries, amenities, photos and their relevant properties
- query all marinas in a city
- query all marinas in a country
- add marina mutation with validation (e.g. yup)

nice to have:

- account schema
- authentication + authorization for add marina mutation
- pagination

## running

- `yarn start`

## gql types / codegen

- `yarn codegen`

## db types

- `yarn sql2ts`

## new migrations (if decided to go for nice to haves)

Docs [here](https://db-migrate.readthedocs.io/en/latest/Getting%20Started/commands/)

- run `node -r dotenv-safe/config node_modules/db-migrate/bin/db-migrate create <name> -v -e dev`
- edit `migrations/sqls/<hash>-<name>.<up|down>.sql` files
- run `node -r dotenv-safe/config node_modules/db-migrate/bin/db-migrate up -v -e dev`
