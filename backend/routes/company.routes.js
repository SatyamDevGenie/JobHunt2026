import express from "express";

import {
    registerCompany,
    getCompany,
    getCompanyById,
    updateCompany
} from "../controllers/company.controller.js";


import isAuthentication from "../middlewares/isAuthenticated.js";


const router = express.Router();

router.route("/register").post(isAuthentication, registerCompany);
router.route("/get").get(isAuthentication, getCompany);
router.route("/get/:id").get(isAuthentication, getCompanyById);
router.route("/update/:id").put(isAuthentication, updateCompany);

export default router;