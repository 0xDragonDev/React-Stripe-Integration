const getStripeSecretKey = async (req, res) => {
  try {
    require('dotenv').config({ path: './.env' });
    const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

    const paymentIntent = await stripe.paymentIntents.create({
      currency: 'USD',
      amount: req.body.money * 100,
      automatic_payment_methods: { enabled: true },
    });

    // Send publishable key and PaymentIntent details to client
    res.status(200).json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = getStripeSecretKey;
