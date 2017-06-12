import * as Koa from 'koa';
import * as Router from 'koa-router';

import indexRoutes from './routes/index';

const app = new Koa();
const router = new Router();

router.use('/', indexRoutes.routes())

// response
app
    .use(router.routes())
    .use(router.allowedMethods())

app.listen(3001);