-src/
    index.js
    models
    controllers
    middlewares
    services
    utils
    config
    repository

-tests
-static

-temp







# Welcome to flight service

## Project Setup
- clone project on local
- execute 'npm install' on same path as root directory of downloaded project
- create a '.env' file in root and add the following
`PORT=3000`
- Inside `src/config` create a new file called `config.json`


Once you have added your db config as listed above, go to src folder from terminal and execute `npx sequelize db:create`

`npx sequelize db:migrate`






## DB Design
 - Airplane table
 - Flight
 - Airport
 - City