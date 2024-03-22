import {Router, Request, Response} from "express";
import multer from "multer";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";
import { CreateProductController } from "./controllers/product/CreateProductController";
import { ListProductController } from "./controllers/product/ListProductController";
import { CreateOrderController } from "./controllers/order/CreateOrderController";
import { RemoveOrderController } from "./controllers/order/RemoveOrderController";
import { AddItemController } from "./controllers/order/AddItemController";
import { RemoveItemController } from "./controllers/order/RemoveItemController";
import { SendController } from "./controllers/order/SendController";
import { ListOrderController } from "./controllers/order/ListOrderController";
import { DetailOrderController } from "./controllers/order/DetailOrderController";
import uploadConfig from "./config/multer";

import { isAuth } from "./middleware/isAuth";
import { FinishOrderController } from "./controllers/order/FinishOrderController";

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
router.get("/product/product", isAuth, new ListProductController().handle)
// order Routes
router.post("/order", isAuth, new CreateOrderController().handle)
router.delete("/order/delete", isAuth, new RemoveOrderController().handle)
router.post("/order/add", isAuth, new AddItemController().handle)
router.delete("/order/remove", isAuth, new RemoveItemController().handle)
router.put("/order/send", isAuth, new SendController().handle)
router.get("/order/list", isAuth, new ListOrderController().handle)
router.get("/order/detail", isAuth, new DetailOrderController().handle)
router.put("/order/finish", isAuth, new FinishOrderController().handle)

export default router;