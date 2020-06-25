const multer = require('multer');
const path = require('path');
const crypto = require('crypto');

module.exports = {
    dest: path.resolve(__dirname, '..', '..', 'tmp', 'uploads'),
    storage: multer.diskStorage({
        destination: (req, file, callBack) => {
            callBack(null, path.resolve(__dirname, '..', '..', 'tmp', 'uploads'));
        },
        filename: (req, file, callBack) => {
            crypto.randomBytes(16, (err, hash) => {
                if (err) callBack(err);

                file.key = `${hash.toString('HEX')}-${file.originalname}`;

                callBack(null, file.key);
            })
        }
    }),
    limits: {
        fileSize: 3 * 1024 * 1024
    },
    fileFilter: (req, file, callBack) => {
        const allowedMimes = [
            'image/jpeg',
            'image/pjpeg',
            'image/png'
        ];

        if (allowedMimes.includes(file.mimetype)) {
            callBack(null, true);
        } else {
            callBack(new Error("Invalid file type."))
        }
    }
}