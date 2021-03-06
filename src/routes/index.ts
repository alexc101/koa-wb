import * as Router from 'koa-router';

const indexRouter = new Router();

class Greeter {
    constructor(public name: string) {
    }
}

indexRouter
    .get('/', async (ctx, next) => {

        const helloTS = new Greeter('default14');

        await ctx.render('index', {name: helloTS.name})

    })
    .get('/home', async (ctx, next) => {

        const helloTS = new Greeter('home');

        await ctx.render('index', {name: helloTS.name})

    })



export default indexRouter;
