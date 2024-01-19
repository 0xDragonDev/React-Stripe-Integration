const getStripePublishableKey = async (req, res) => {
  require('dotenv').config({ path: './.env' });

  try {
    const publishableKey = process.env.STRIPE_PUBLISHABLE_KEY;
    res.status(200).json(publishableKey);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = getStripePublishableKey;
