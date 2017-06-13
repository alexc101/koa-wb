import * as compose from 'koa-compose';

import indexRouter from './index';
import userRouter from './user';

const combineRouters = (d) => {
    let arr = [];

    d.forEach((v) => {
        arr.push(v.routes())
        arr.push(v.allowedMethods())
    })

    return compose(arr)
}

const router = combineRouters([
    indexRouter,
    userRouter
])

export default router





