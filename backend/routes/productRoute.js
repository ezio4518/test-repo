// import express from "express";
// import {
//   listProducts,
//   addProduct,
//   updateProduct,
//   removeProduct,
//   singleProduct,
//   bulkUploadProducts,
// } from "../controllers/productController.js";
// import upload from "../middleware/multer.js";
// import adminAuth from "../middleware/adminAuth.js";

// const productRouter = express.Router();

// productRouter.post(
//   "/add",
//   adminAuth,
//   upload.fields([
//     { name: "image1", maxCount: 1 },
//     { name: "image2", maxCount: 1 },
//     { name: "image3", maxCount: 1 },
//     { name: "image4", maxCount: 1 },
//   ]),
//   addProduct
// );
// productRouter.post(
//   "/update",
//   adminAuth,
//   upload.fields([
//     { name: "image1", maxCount: 1 },
//     { name: "image2", maxCount: 1 },
//     { name: "image3", maxCount: 1 },
//     { name: "image4", maxCount: 1 },
//   ]),
//   updateProduct
// );
// productRouter.post("/remove", adminAuth, removeProduct);
// productRouter.post("/single", singleProduct);
// productRouter.get("/list", listProducts);

// productRouter.post(
//   "/bulk-upload",
//   adminAuth,
//   upload.fields([
//     { name: "csv", maxCount: 1 },
//     { name: "zip", maxCount: 1 },
//   ]),
//   bulkUploadProducts
// );

// export default productRouter;


import express from "express";
import {
  listProducts,
  addProduct,
  updateProduct,
  removeProduct,
  singleProduct,
  bulkUploadProducts,
} from "../controllers/productController.js";
import upload from "../middleware/multer.js";
import adminAuth from "../middleware/adminAuth.js";

const productRouter = express.Router();

productRouter.post(
  "/add",
  adminAuth,
  upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 },
    { name: "image4", maxCount: 1 },
  ]),
  addProduct
);

productRouter.post(
  "/update",
  adminAuth,
  upload.fields([
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
    { name: "image3", maxCount: 1 },
    { name: "image4", maxCount: 1 },
  ]),
  updateProduct
);

productRouter.post("/remove", adminAuth, removeProduct);
productRouter.post("/single", singleProduct);
productRouter.get("/list", listProducts);
productRouter.post(
  "/bulk-upload",
  adminAuth,
  upload.fields([
    { name: "csv", maxCount: 1 },
    { name: "zip", maxCount: 1 },
  ]),
  bulkUploadProducts
);

export default productRouter;