const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DonationSchema = new Schema({
    userId: {
        type: Number,
        required: true
    },
    donationAmount: {
        type: Number,
        required: true
    },
    organizationId: {
        type: Number,
        required: true
    },
    donationDate: {
        type: Date,
        default: Date.now
    }
})

module.exports = User = mongoose.model('users', UserSchema);