const { Payment, Product } = require("../db");
const { Router } = require("express");
const axios = require("axios");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

const mercado = require("./mercadopago")

router.use("/mercado", mercado)

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
const getProduct = require("./product.js");
router.use("/productos", getProduct);

const postUser = require("./user");
router.use("/usuario", postUser);

const getUsers = require("./user");
router.use("/usuarios", getUsers);

const getUserInfo = require("./user");
router.use("/usuario", getUserInfo);

const putUserInfo = require("./user");
router.use("/usuario", putUserInfo);

const putUserPassword = require("./user");
router.use("/usuario", putUserPassword);

const login = require("./user");
router.use("/usuario", login);

const logout = require("./user");
router.use("/usuario", logout);

const putUserRol = require("./user");
router.use("/usuario", putUserRol);

const deleteUser = require("./user");
router.use("/usuario", deleteUser);

const addProductToFavorites = require("./user.js");
router.use("/usuario", addProductToFavorites);

const getProductFromFavorites = require("./user.js");
router.use("/usuario", getProductFromFavorites);

const deleteProductFromFavorites = require("./user.js");
const { pause } = require("mercadopago/lib/resources/preapproval");
router.use("/usuario", deleteProductFromFavorites);

module.exports = router;
