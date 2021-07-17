const CategoryService = require('../services/category-service');

class CategoryController {
  loadImageFile = async (req, res) => {
    try {
      const picture = await CategoryService.loadFile(req.files.picture);
      return res.json(picture);
    } catch (e) {
      return res.status(500).json(e);
    }
  };

  createWord = async (req, res) => {
    try {
      const newWord = await CategoryService.createWord(req);
      return res.json(newWord);
    } catch (e) {
      return res.status(500).json(e);
    }
  };

  create = async (req, res) => {
    try {
      const createdCategory = await CategoryService.create(req.body);
      return res.json(createdCategory);
    } catch (e) {
      return res.status(500).json(e);
    }
  };

  getCategories = async (req, res) => {
    try {
      const categories = await CategoryService.getCategories();
      return res.json(categories);
    } catch (e) {
      return res.status(500).json(e);
    }
  };

  getCategory = async (req, res) => {
    try {
      const category = await CategoryService.getCategory(req.params.id);
      return res.json(category);
    } catch (e) {
      return res.status(500).json(e);
    }
  };

  getCategoryByRouter = async (req, res) => {
    try {
    
      const category = await CategoryService.getCategoryByRouter({
        nameRouter: req.params.router,
      });
      return res.json(category);
    } catch (e) {
      return res.status(500).json(e);
    }
  };

  updateCategory = async (req, res) => {
    try {
     
      const category = await CategoryService.updateCategory(req.body);

      return res.json(category);
    } catch (e) {
      return res.status(500).json(e);
    }
  };

  deleteCategory = async (req, res) => {
    try {
      const category = await CategoryService.deleteCategory(req.params.id);
      return res.json(category);
    } catch (e) {
      return res.status(500).json(e);
    }
  };
}

module.exports =  new CategoryController();
