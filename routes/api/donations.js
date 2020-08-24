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
                    return res.json({ donationId, userId, donationAmount, organizationId, donationDate});
                });
});

router.post('/donations',
    passport.authenticate('jwt', { session: false }),
        (req, res) => {
            res.json(req.body);
});

router.put('/donations/:donationId', (req, res) => {
    passport.authenticate('jwt', { session: false }),
        (req, res) => {
            Donation.findById(req.donation.id)
                .then(donation => {
                    donation.userId = req.donation.userId;
                    donation.organizationId = req.donation.organizationId;
                    donation.donationAmount = req.donation.donationAmount;
                    donation.donationDate = req.donation.donationDate;
                    donation.markModified();

                    donation.save()
                        .then(({ donation }) => {
                            return res.json({
                                id: donation.id,
                                userId: donation.userId,
                                organizationId: donation.organizationId,
                                donationAmount: donation.donationAmount,
                                donationDate: donation.donationAmount
                            })
                        })
                })
        };
});

router.delete('/donations/:donationId', (req, res) => {
    passport.authenticate('jwt', { session: false }),
        (req, res) => {
            Donation.findById(req.donation.id)
                .then(donation => {
                    donation.deleteOne(donation._id);
                });
        };
});

module.exports = router;