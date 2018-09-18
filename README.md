# phone-catalog-app

## Requirements
- [Docker](https://www.docker.com/)

## Docker services
- Api (node.js)
- Web (node.js)

## Start Exercise

Run following `docker-compose` command to build and start the services and production environment:
```shell
> docker-compose -f docker-compose.yml up --build
```

If you want to run in development mode, execute this command:
```shell
> docker-compose up --build
```

Note: use `-d` command if you want to run in background (detached) mode `docker-compose -f docker-compose.yml up --build -d`, you need to execute `docker-compose down` to stop and remove containers.

When services are up and running, open [`http://localhost:4000/`](http://localhost:4000/) in your browser.

## API Server

The *API server* are developed in Node.js with the [`Restify`](http://restify.com/) module.

## WEB Server

The *WEB server* are developed in Node.js with the [`Express` framework](http://expressjs.com/), [`Nunjucks`] as template engine.

In the same folder you can find the *client side project* under the folder name *`src`*, developed with [`React`](https://reactjs.org/), [`Redux`](https://github.com/reduxjs/react-redux), [`Redux-thunk`](https://github.com/reduxjs/redux-thunk) and [`Webpack`](https://webpack.js.org/) as module bundler, and [`sass`](https://sass-lang.com/) as css framework.

The client side works as a Single Page Application (SPA).