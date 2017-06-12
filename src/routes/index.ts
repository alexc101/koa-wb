import * as Router from 'koa-router';

const indexRoutes = new Router();

class Greeter {
    constructor(public name: string) {
    }
}

indexRoutes
    .get('/', async (ctx, next) => {
        await next();

        const helloTS = new Greeter('test');

        ctx.body = helloTS.name
        ctx.status = 200;
    })

export default indexRoutes;


