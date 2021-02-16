# BigLittleBuy - Categories Microservice

## Description

BLB Categories Microservice

## Installation

```bash
$ npm install
```

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
