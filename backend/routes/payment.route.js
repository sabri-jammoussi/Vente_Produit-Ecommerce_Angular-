const express = require('express');
const router = express.Router();

const Stripe = require('stripe')('pk_test_51OZci3LupV38LXQfPVHqnhIhLgGFbdO8tQMvC038z77eqpWyksviIRuRlLJtoTuSIcFiH2YxRxyj58l3gdKLjjo300fNPK7OpA');

router.post('/', async (req, res) => { console.log(req.body)
    let status, error;
    const { token, amount } = req.body;
    try {
      await Stripe.charges.create({
        source: token.id,
        amount,
        currency: 'usd',
      });
      status = 'success';
    } catch (error) {
      console.log(error);
      status = 'Failure';
    }
    res.json({ error, status });
  });

module.exports = router;
