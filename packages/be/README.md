## running

- setup your `.env` just copy `.env.example` content
- `yarn start`

- `http://localhost:8081/graphql`

## gql types / codegen

- `yarn codegen`

## db types

- `yarn sql2ts`

## new migrations (if decided to go for nice to haves)

Docs [here](https://db-migrate.readthedocs.io/en/latest/Getting%20Started/commands/)

- run `node -r dotenv-safe/config node_modules/db-migrate/bin/db-migrate create <name> -v -e dev`
- edit `migrations/sqls/<hash>-<name>.<up|down>.sql` files
- run `node -r dotenv-safe/config node_modules/db-migrate/bin/db-migrate up -v -e dev`
