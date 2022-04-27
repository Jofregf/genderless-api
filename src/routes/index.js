const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

const postUser = require('./user');
router.use('/usuario', postUser);

const getUsers = require('./user');
router.use('/usuarios', getUsers);

const getUserInfo = require('./user');
router.use('/usuario', getUserInfo);


const postProduct = require('./product.js');
const putProduct = require('./product.js');


router.use('/productos', postProduct);
router.use('/productos', putProduct);

module.exports = router;

