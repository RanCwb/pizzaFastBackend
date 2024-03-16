import {Router, Request, Response} from "express";
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";

import { isAuth } from "./middleware/isAuth";

// finding detail users;

const router = Router();

// User Routes 
router.post("/users", new CreateUserController().handle)
router.post("/login", new AuthUserController().handle)
router.get("/me", isAuth,  new DetailUserController().handle)

export default router;