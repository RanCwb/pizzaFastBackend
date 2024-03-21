import {Router, Request, Response} from "express";
import multer from "multer";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";
import { CreateProductController } from "./controllers/product/CreateProductController";
import uploadConfig from "./config/multer";

import { isAuth } from "./middleware/isAuth";

// finding detail users;

const router = Router();

const upload = multer(uploadConfig.upload("./tmp"))

// User Routes 
router.post("/users", new CreateUserController().handle)
router.post("/login", new AuthUserController().handle)
router.get("/me", isAuth,  new DetailUserController().handle)
// category Routes
router.post("/category", isAuth, new CreateCategoryController().handle)
router.get("/category/list", isAuth, new ListCategoryController().handle)
// product Routes
router.post("/product", isAuth, upload.single("file"), new CreateProductController().handle) 
export default router;