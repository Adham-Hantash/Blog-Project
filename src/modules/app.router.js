import {conneectDB} from '../../DB/connection.js';
import authRouter from './auth/auth.router.js'
import userRouter from './user/user.router.js'
import blogRouter from './blog/blog.router.js'

const initApp = (app,express) => {
    app.use(express.json());
    conneectDB();
    app.use('/auth',authRouter);
    app.use('/user',userRouter);
    app.use('/blog',blogRouter);
};

export default initApp;