const Login = require('../models/login');
const User = require('../models/user');

class UserService {
  create = async (user) => {
    const findUser = await User.findOne(user);
    if (findUser) {
      return { message: 'User alredy created!' };
    }
    const createdUser = await User.create(user);
    return createdUser;
  };

  login = async (user) => {
    const findUser = await User.findOne(user);
    if (findUser) {
      const idLogin= await Login.create({ login: user.login });

      return { message: MessagesServer.LOGIN_SUCCES, id: idLogin._id };
    }
    return { message: MessagesServer.LOGIN_ERROR };
  };

  isLogin = async (id) => {
    const findId = await Login.findById(id);
    if (findId) {
      return { message: MessagesServer.LOGIN_SUCCES };
    }
    return { message: MessagesServer.LOGIN_ERROR };
  };

  deleteLogin = async (id) => {
    const findId = await Login.findByIdAndDelete(id);
    if (findId) {
      return { message: MessagesServer.LOGIN_SUCCES_DELETE };
    }
    return { message: MessagesServer.LOGIN_ERROR_DELETE };
  };
}

module.exports = new UserService();
