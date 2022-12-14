## General info

The main goal of creating events for user

## Table of contents

- [Technologies](#technologies)
- [Clone the repo](#clone-the-repo)
- [Environment variables](#environment-variables)
- [Setup locally](#setup-locally)
- [Run tests](#run-tests)

## Technologies

Project is created with:

- Express
- Typescript
- Sequelize

## Clone the repo

```sh
 git clone git@github.com:volodymyrGoloida/backEndBrainHub.git && cd backEndBrainHub
```

## Environment variables

1. Copy and fill `.env` file

```sh
cp .env.sample .env
```



## Setup locally

1. You need to install docker on your computer
2. After - [Environment variables](#environment-variables) run cmd

```sh
    npm run start:docker:build
```

3. After building you can start application with

```sh
    npm run start:docker
```

## Run tests

1. After [Setup locally](#setup-locally) you need to install all necessary packages with

```sh
    npm install
```

2. After that run your application with

```sh
    npm run start:docker
```

3. Open second terminal and run cmd ((don't close terminal where docker is running))

```sh
    npm run test
```
