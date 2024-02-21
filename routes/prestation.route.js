const { authJwt, prestationMiddleware } = require("../middlewares");
const controller = require("../controllers/prestation.controller");
var express = require('express');
var router = express.Router();

router.get('/pourcentage_commission/:date', [authJwt.verifyToken, authJwt.estEmploye, prestationMiddleware.validateDateParams], controller.getEmployePourcentageCommissionByDate);
router.get('/montant_commission/:date', [authJwt.verifyToken, authJwt.estEmploye, prestationMiddleware.validateDateParams], controller.getEmployeMontantCommissionByDate);
router.get('/', [authJwt.verifyToken, prestationMiddleware.validateFindQuery], controller.find);
router.get('/benefice/:annee/:mois', [authJwt.verifyToken, authJwt.estAdmin, prestationMiddleware.validateChiffreAffaireMoisGetParams], controller.beneficeMois);
router.get('/chiffre_affaire/:annee/:mois', [authJwt.verifyToken, authJwt.estAdmin, prestationMiddleware.validateChiffreAffaireMoisGetParams], controller.chiffreAffaireMois);
router.get('/chiffre_affaire/:date', [authJwt.verifyToken, authJwt.estAdmin, prestationMiddleware.validateDateParams], controller.chiffreAffaireJour);
router.post('/paiement', [authJwt.verifyToken, prestationMiddleware.validatePaiementRequestBody], controller.paiement);

module.exports = router;
