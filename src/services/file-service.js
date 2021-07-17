const uuid = require('uuid');
const path = require('path');

class FileService {
  saveFile = (file) => {
    try {
      const fileExt = String(file.name).substring(
        String(file.name).lastIndexOf('.')
      );
      const fileName = uuid.v4() + fileExt;

      const filePath = path.resolve('static', fileName);
      file.mv(filePath);
      return fileName;
    } catch (e) {
     
    }
  };
}

module.exports =  new FileService();
