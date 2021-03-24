# test-be-assignment

## new migrations

Docs [here](https://db-migrate.readthedocs.io/en/latest/Getting%20Started/commands/)

- run `node -r dotenv-safe/config node_modules/db-migrate/bin/db-migrate create <name> -v -e dev`
- edit `migrations/sqls/<hash>-<name>.<up|down>.sql` files
- run `node -r dotenv-safe/config node_modules/db-migrate/bin/db-migrate up -v -e dev`
