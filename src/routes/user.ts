import * as Router from 'koa-router';

const userRouter = new Router({prefix: '/user'});

class Greeter {
    constructor(public name: string) {
    }
}

userRouter
    .get('/', async (ctx, next) => {

        const helloTS = new Greeter('user1');

        await ctx.render('index', {name: helloTS.name})

    })
    .get('/2', async (ctx, next) => {

        const helloTS = new Greeter('user2');

        await ctx.render('index', {name: helloTS.name})

    })

export default userRouter;


