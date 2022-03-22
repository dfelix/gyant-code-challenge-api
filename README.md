# gyant-code-challenge-api

# Pre-requisites

- Install [Node.js](https://nodejs.org/en/) version 14 or higher

- Install [Docker](https://www.docker.com/)

# Getting started

- Clone the repository

```

git clone https://github.com/dfelix/gyant-code-challenge-api

```

- Install dependencies

```

cd gyant-code-challenge-api

yarn install

```

- Open `database/docker-compose.yml` and on `volumes` put the path to the folder database

- Create the database with `docker-compose up -d`

- Once the database is running on a docker container run `npm i`

- Run `node seed-data` to seed database with mock data.

- Build and run the project

# Mock Data

```
users:

ghouse@gyant.com
jdorian@gyant.com
cyang@gyant.com

(passwords same as email)
```
