const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const User = require('../../models/User');
const passport = require('passport');
const Donation = require("../../models/Donation");

router.get("/donations", (req, res) => {
    
});

router.get('/donations/:donationId', 
    passport.authenticate('jwt', { session: false }), 
    (req, res) => {
        Donation.findById(req.donation.id)
            .then(({ donationId, userId, donationAmount, organizationId, donationDate }) => {
                
            })
});

router.get('/donations/:donationId', passport.authenticate('jwt', { session: false }), (req, res) => {
    res.json({
        id: req.donation.id
    });
});

router.post('/donations', (req, res) => {
    
});

router.put('/donations/:donationId', (req, res) => {
    
});

router.delete('/donations/:donationId', (req, res) => {

});

module.exports = router;