const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
const getProduct = require('./product.js');
router.use("/productos", getProduct);

const postUser = require('./user');
router.use('/usuario', postUser);

const getUsers = require('./user');
router.use('/usuarios', getUsers);

const getUserInfo = require('./user');
router.use('/usuario', getUserInfo);

const putUserInfo  = require('./user');
router.use('/usuario', putUserInfo);

const putUserPassword = require('./user');
router.use('/usuario', putUserPassword);

const login = require('./user');
router.use('/usuario', login);

const logout = require('./user');
router.use('/usuario', logout);

const putUserRol = require('./user');
router.use('/usuario', putUserRol);

const deleteUser = require('./user');
router.use('/usuario', deleteUser);


const addProductToFavorites = require('./user.js');
router.use('/usuario', addProductToFavorites);

const getProductFromFavorites = require('./user.js');
router.use('/usuario', getProductFromFavorites);

const deleteProductFromFavorites = require('./user.js');
router.use('/usuario', deleteProductFromFavorites);

const addReview = require('./user.js')
router.use('/usuario', addReview);

const getReviews = require('./user.js')
router.use('/usuario', getReviews);

const getReview = require('./user.js')
router.use('/usuario', getReview);

const deleteReview = require('./user.js')
router.use('/usuario', deleteReview);

const deleteReviewById = require('./user.js')
router.use('/usuario', deleteReviewById);





module.exports = router;
