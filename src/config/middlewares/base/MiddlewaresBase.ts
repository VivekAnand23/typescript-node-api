import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as logger from 'morgan';

import MethodOverride = require("./../MethodOverride");
import BaseRoutes = require("./../../routes/base/BaseRoutes");


class MiddlewaresBase {

    static get configuration() {
        var app = express();
        console.log("Initializing app...");
        app.use(logger('dev'));

        app.use(bodyParser.json());
        app.use(MethodOverride.configuration());
        app.use(new BaseRoutes().routes);

        return app;
    }
}

Object.seal(MiddlewaresBase);
export = MiddlewaresBase;
