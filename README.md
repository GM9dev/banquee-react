### Command to up server

- docker compose -f docker-compose.yml up


### Commands to migrate

- Enter via terminal in the migration folder
- Run npm install (in the first time)
- To create a migration: npm run migrate:make <nome da tabela>
- To upgrade => npm run migrate:up
- To rollback => npm run migrate:rollback