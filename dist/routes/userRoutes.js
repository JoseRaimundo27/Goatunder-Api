"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userControllers_1 = require("../controllers/userControllers");
const router = (0, express_1.Router)();
router.get('/', userControllers_1.getHome);
router.get('/userList', userControllers_1.getUsers);
router.put('/createUsers', userControllers_1.updateUsers);
exports.default = router;
