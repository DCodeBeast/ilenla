const cloudinary = require("cloudinary").v2;
require("dotenv").config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

exports.uploads = async (file, folder) => {
    try {
        const result = await cloudinary.uploader.upload(file);
        return result
        console.log(result)
    } catch (error) {
        
    }
//   return new Promise((resolve) => {
//     cloudinary.uploader.upload(file, (result) => {
//       resolve({
//         result: result,
//       });
//     });
//   });
};

// module.exports = cloudinary;
