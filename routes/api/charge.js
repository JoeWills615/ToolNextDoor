const express = require('express')
const router = express.Router();
const stripeLoader = require('stripe')

//Hide key in env before push
const stripe = new stripeLoader('sk_test_51H9wT1Iy7ts3sbbMUuK4cNwkgKaCJy1BRhXPIjmdWkPFpIaMd9QbcAaVS4uu532ici6k2uP91sKj8Os1hJLoz9tC00Q71OP30Z')
//METHOD 1 ERR: 'You cannot create a charge with a PaymentMethod. Use the Payment Intents API instead.'
/* const charge = (token, amt) => {
    return stripe.charges.create({
        amount: amt * 100,
        currency: 'usd',
        source: token,
        description: 'Statement Description'
    })
}

router.post('/', async (req, res) => {
    console.log('hit');
    console.log(req.body)

        try {

           let data = await charge(req.body.id, req.body.amount)
           console.log(data); 
           return res.status(200).json({
                confirm: "yes"
            })
        } catch (error) {
            console.log(error);   
        } 

    module.exports = router;
}) */


  module.exports = async (req, res) => {
    console.log('hit');
    const { id, amount } = req.body;

        try {
            const payment = await stripe.paymentIntents.create({
                amount,
                currency: 'USD',
                description: 'Tool',
                payment_method: id,
                confirm: true
            });
            
            console.log(payment);
            return res.status(200).json({
                confirm: "yes"
            })
        } catch (error) {
            console.log(error);
            return res.status(400).json({
                message: error.raw.message
            })
        } 

    
}; 