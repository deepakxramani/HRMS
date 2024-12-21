const { addCandidate, getCandidates } = require('../controllers/candidateController');
const ensureAuthentication = require('../middlewares/auth');
const { candidateValidation } = require('../middlewares/candValidation');

const router = require('express').Router()

router.post('/addcandidate', candidateValidation, addCandidate );
router.get('/getcandidates', ensureAuthentication, getCandidates )

module.exports = router;