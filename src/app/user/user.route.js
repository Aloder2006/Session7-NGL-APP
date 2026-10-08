import { Router } from "express";
import { withCache } from "../../lib/cache/withCache.js";
import { toSec } from "../../pkg/utils/time.js";
import {User} from "../user/model/user.model.js";

const userRouter = Router();

userRouter.use("/users",
    withCache(),
    async (req, res, next) => { 
        const data = await User.find();
        res.json(data)
    }
);

export default userRouter;
