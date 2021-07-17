const userService = require('../services/user-service');

class UserController {
  create = async (req, res) => {
    try {
      const createdUser = await userService.create(req.body);
      return res.json(createdUser);
    } catch (e) {
      return res.status(500).json(e);
    }
  };

  login = async (req, res) => {
    try {
      const loginMessage = await userService.login(req.body);

      return res.json(loginMessage);
    } catch (e) {
      return res.status(500).json(e);
    }
  };

  isLogin = async (req, res) => {
    try {
      const loginMessage = await userService.isLogin(req.body.id);
      return res.json(loginMessage);
    } catch (e) {
      return res.status(500).json(e);
    }
  };

  deleteLogin = async (req, res) => {
    try {
      const loginMessage = await userService.deleteLogin(req.body.id);
      return res.json(loginMessage);
    } catch (e) {
      return res.status(500).json(e);
    }
  };
}

module.exports = new UserController();
