import * as express from 'express';

import Middlewares = require("./config/middlewares/base/MiddlewaresBase");

// Creates and configures an ExpressJS web server.
class App {

    // ref to Express instance
    public express: express.Application;

    //Run configuration methods on the Express instance.
    constructor() {
        this.express = express();
        this.express.use(Middlewares.configuration);
    }
}

export default new App().express;
