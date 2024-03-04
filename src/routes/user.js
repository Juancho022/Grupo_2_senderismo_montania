const express = require('express');
const path = require('path');
const userController = require('../controllers/userController');
const router = express.Router();

const multer = require('multer');

const authMiddleware = require('../middlewares/authMiddleware');
const validationsMiddleware = require('../middlewares/validationsMiddleware');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../public/images/avatars'));
    },
    filename: function (req, file, cb) {
        const ext = path.extname(file.originalname);
        const filename = `${Date.now()}-img${ext}`;
        cb(null, filename);
    }
});
const upload = multer({ storage: storage });



router.get('/login', authMiddleware.onlyGuestUser, userController.login);
router.post('/login', authMiddleware.onlyGuestUser, userController.loginProcess);

router.get('/logout', userController.logout);

router.get('/register', userController.register);
router.post('/register', upload.single('image'), validationsMiddleware.signUpCheck, userController.registerProcess);
router.get('/profile', userController.profile);

//router.get("/admin", userController.admin);//falta vista
// router.get('/adminView', userController.admin);

router.get('/list', userController.list);

router.get('/:id/edit', authMiddleware.authUser, userController.edit);
router.put('/:id/edit', authMiddleware.authUser, userController.update);
router.delete('/:id/delete', userController.delete);

module.exports = router;