import { Router } from "express";
import { userControllers } from '.'

const userRouter = Router();

userRouter.get('/',userControllers.findAll);
userRouter.get('/:id', userControllers.find);
userRouter.get('/search/:id', userControllers.find);
userRouter.post('/', userControllers.save);
userRouter.delete('/:id', userControllers.destroy);
userRouter.put('', userControllers.update);

export { userRouter }