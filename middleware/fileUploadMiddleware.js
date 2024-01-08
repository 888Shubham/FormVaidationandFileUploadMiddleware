// // Please don't change the pre-written code
// // Import the necessary modules here
// import multer from 'multer';


// // Write your code here

// const storage1 = multer.diskStorage(
//     {
//         destination: function (req, file, cb){
//             return cb(null, './public/uploads');
            
//         },
//         filename: function (req, file, cb){
//             return cb(null, `${Date.now()}-${file.originalname}`);

//         }
//     }
// );

// export const imageUpload = multer({storage:storage1})

import multer from "multer";
import path from "path";
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.resolve("public", "uploads"));
  },
  filename: (req, file, cb) => {
    const updatedFileName = Date.now() + file.originalname;
    cb(null, updatedFileName);
  },
});

export const imageUpload= multer({ storage });