import * as Koa from 'koa';
import * as chalk from 'chalk';
import * as createError from 'http-errors';
import * as fs from "fs";
import * as morgan from 'koa-morgan';
import * as hbs from 'koa-hbs';
import * as serve from 'koa-static';

const path = require('path');

const dir = path.resolve('.');


import router from './routes/config';

const port = process.env.PORT || 3000;

const accessLogStream = fs.createWriteStream('./access.log', {flags: 'a'})

const app = new Koa();


app
    .use(hbs.middleware({
        viewPath: './src/views',
        defaultLayout: 'layout'
    }))
    .use(morgan('combined', {stream: accessLogStream}))
    .use(morgan('dev'))
    .use(router)
    .use(async (ctx, next) => {
        try {
            await next();
            if (ctx.status === 404) throw createError(404, 'Page doesn\'t exist!')
        } catch (err) {
            ctx.body = err.message;
            ctx.status = err.status || 500;
        }
    })
    .use(serve(dir + '/src/public'))


app.listen(port, () => {
    console.log(chalk.green.bold('listening on port ' + port))
});
