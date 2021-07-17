const Router = require('express');
const userController = require('../controllers/user-controller');


const userRouter = Router();

userRouter.post('/adduser', userController.create);
userRouter.post('/login', userController.login);
userRouter.post('/checklogin', userController.isLogin);
userRouter.delete('/deletelogin', userController.deleteLogin);


module.exports = userRouter;
