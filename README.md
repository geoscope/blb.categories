# BigLittleBuy - Categories Microservice

## Description

BLB Categories Microservice

## Installation

```bash
$ npm install
```

---

## Environment files for configuration

The following files are considered, in this order, for configuration items:

1. local.env
2. dev.env
3. test.env
4. staging.env
5. prod.env

These represent the various environments the code can be run in, starting with a local development environment. If multiple files are found, the first value found in the files
will overwrite the remainder, which means if TYPEORM_HOST is found in both the local.env and staging.env files, the value from the local.env file will be used.

Below is a sample of an environment config file:

```
TYPEORM_CONNECTION=postgres
TYPEORM_HOST=localhost
TYPEORM_USERNAME=username
TYPEORM_PASSWORD=password
TYPEORM_DATABASE=blb_categories
TYPEORM_PORT=5432
TYPEORM_SYNCHRONIZE=false
TYPEORM_LOGGING=true
TYPEORM_ENTITIES="dist/**/*.entity.js"
TYPEORM_MIGRATIONS="dist/**/migrations/**/*.js"
TYPEORM_ENTITIES_DIR="src/domain"
TYPEORM_MIGRATIONS_DIR="src/migrations"
DEFAULT_STORE_ID=00000000-0000-0000-0000-000000000000
```

The default store id is only used when the x-store-id header is missing from the HTTP/S request, in which case the middleware will select this default value. It must be a GUID/UUID of an existing store within the platform, as defined in the system micro-service.

Some store information will be cached locally as a response to store events (create, edit, delete) from the system micro-service.

---

## Database Migrations

### Generating a database migration

```bash
$ npm run build
$ typeorm migration:generate -n MigrationName
```

### Creating an empty database migration

```bash
$ typeorm migration:create -n MigrationName
```

### Running / appplying database migrations

```bash
$ npm run build
$ typeorm migration:run
```

### Reverting database migrations, one at a time

```
$ npm run build
$ typeorm migration:revert
```

---

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## License

BigLittleBuy is [GPL 3.0 Licensed](LICENSE).
