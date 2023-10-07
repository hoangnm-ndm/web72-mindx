// Authenticated and authorized
import { Router } from "express";
import { signIn, signUp } from "../controllers/Auth";

const routerAuth = Router();

routerAuth.post("/signin", signIn);
routerAuth.post("/signup", signUp);

export default routerAuth;
