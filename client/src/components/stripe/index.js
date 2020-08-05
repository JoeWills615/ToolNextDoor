import React, { Component, useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements,
         CardElement,
         useStripe,
         useElements       
    } from '@stripe/react-stripe-js'

import axios from 'axios'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const CheckoutForm = ({ success }) => {
   const stripe = useStripe();
   const elements = useElements();

   const handleSubmit = async (event) => {
       event.preventDefault();

       //retrieve card number from form
       const { error, paymentMethod } = await stripe.createPaymentMethod({
           type: 'card',
           card: elements.getElement(CardElement)
       });

       if (!error) {
           console.log(paymentMethod);
           const { id } = paymentMethod;
           try {
                const { data } = await axios.post('/api/charge', {id, amount: 300}) //Stripe uses CENTS
                console.log(data);
                success();
           } catch (error){
            console.log(error);
           }
         
       }
   }

   const url = ( parseInt(window.location.pathname.replace('/cart/', '')))
   console.log(url);
    return ( 
    <form onSubmit={handleSubmit}style={{maxWidth: '400px', margin: '0 auto'}}>
        <h2>Price: ${url}</h2>
        <br/>
        <br/>
        {/* <img 
        src='https://myuniversitymoney.com/wp-content/uploads/2014/12/money-tool.jpg'
        style={{ maxWidth: '50px'}}
        /> */}
        <Typography>
            <h3>
                Pay with card
            </h3>
        </Typography>
        <br/>
        <CardElement />
        <br/>
        <br/>
        {/* <button  type="submit" disabled={!stripe}>
            Pay
        </button> */}
        <Button variant="contained" color="secondary" type='submit' disabled={!stripe}>
            Pay
        </Button>
        </form>
    )
}

const stripePromise = loadStripe("pk_test_51H9wT1Iy7ts3sbbMHiY1q2oL5y9ycuxFfk4lJGXWzHqVrBmwx22t1AOrncOJeMlXkyXSGHHeLxhOB15SfuJfQ1pK00sVAwIH5d")

const Stripe = () => {
   const [status, setStatus] = React.useState('ready'); 

   if (status === 'success') {
       return (
           <div>
           <h1>Your payment was a success!</h1>
                <a href='/search'>Go Back to Tools</a>
       </div> 
       )
   }
        return (
        
                <Elements stripe={stripePromise}>
                <Typography align="center">
                    <h1>
                        Tool Next Door
                    </h1>
                    <h3>
                        Checkout cart
                    </h3>
                    <h3>
                        Total
                    </h3>
                </Typography>
                <CheckoutForm success={() => {
                    setStatus('success')
                }}/>
                 </Elements>
        
        )
    
}

export default Stripe
