const Category = require('../models/category');
const MessagesServer = require('../models/messages-server');
const fileService = require('./file-service');

class CategoryService {
  loadFile = async (file) => {
    const fileName = fileService.saveFile(file);
    return fileName;
  };

  createWord = async (req) => {
    const newWordWord = {
      idWord: req.body.idWord,
      langRU: req.body.langRU,
      langEN: req.body.langEN,
      picture: (await this.loadFile(req.files.picture)),
      sound: (await this.loadFile(req.files.sound)),
    };

    return newWord;
  };

  create = async (category) => {
    const findCategory = await Category.findOne(category);
    if (findCategory) {
      return { message: MessagesServer.CATEGORY_ERROR_ALREADY_CREATED };
    }
    const createdCategory = await Category.create(category);
    return {
      message: MessagesServer.CATEGORY_SUCCES_CREATED,
      _id: createdCategory._id,
    };
  };

  getCategories = async () => {
    const findCategories = await Category.find();
    if (findCategories) {
      return findCategories;
    }

    return {};
  };

  getCategory = async (id) => {
    if (!id) {
      throw new Error('NO ID!');
    }

    const findCategory = await Category.findById(id);

    if (findCategory) {
      return findCategory;
    }
    return {};
  };

  getCategoryByRouter = async (router) => {
    if (!router) {
      throw new Error('NO ROUTER!');
    }

    const findCategory = await Category.findOne(router);
  

    if (findCategory) {
      return findCategory;
    }
    return {};
  };

  updateCategory = async (category) => {
    if (!category._id) {
      throw new Error('NO ID!');
    }

    const updateCategory = await Category.findByIdAndUpdate(
      category._id,
      category,
      { new: true }
    );

    if (updateCategory) {
      return updateCategory;
    }
    return {};
  };

  deleteCategory = async (id) => {
    if (!id) {
      throw new Error('NO ID!');
    }

    const findCategory = await Category.findByIdAndDelete(id);

    if (findCategory) {
      return findCategory;
    }
    return {};
  };
}

module.exports =  new CategoryService();
