var path = require('path'),

    Express = require('express'),
    multer = require('multer'),
    passport = require('passport'),

    config = require('../../config'),
    dump = require('../../../lib/dump'),
    handler = require('../handler'),
    router = Express.Router(),

    _options = {
        paths: {
            root: path.resolve(process.cwd(), 'public/'),
            images: '/images/pet/'
        }
    },
    storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, path.join(_options.paths.root, _options.paths.images, (req.params.species+'/')))
        },
        filename: function (req, file, cb) {
            console.log('new file: %s', dump(file));
            cb(null, file.originalname)
        }
    }),
    upload = multer({storage: storage});


router.get('/options/:species', handler.onOptionsRequest);
router.get('/options/:species/:option', handler.onSingleOptionRequest);
router.get('/options/:species/:option/:pageNumber', handler.onSingleOptionRequest);
router.get('/model/:species', handler.onModelRequest);
router.get('/schema/:species', handler.onSchemaRequest);
router.get('/list', handler.onListAllRequest);
router.get('/list/:species', handler.onListRequest);
router.get('/list/:species/:pageNumber', handler.onListRequest);
router.get('/species/', handler.onSpeciesListRequest);
router.post('/save/:species/json', handler.onJSONSave);
router.post('/save/:species', upload.array('uploads'), handler.onMediaSave);
router.post('/save/:species/model', handler.onModelSave);
router.post('/remove/:species', handler.onDeleteRequest);
router.post('/query/:pageNumber', handler.onQueryRequest);
router.post('/query', handler.onQueryRequest);

router.get('/cleandb/', handler.onFormatDBRequestAll);
router.get('/cleandb/:species/', handler.onFormatDBRequestSpecies);
router.get('/reset', handler.onResetRequest);


module.exports = router;