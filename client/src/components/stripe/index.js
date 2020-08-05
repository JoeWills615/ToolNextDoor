import React, { Component, useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements,
         CardElement,
         useStripe,
         useElements       
    } from '@stripe/react-stripe-js'

import axios from 'axios'

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
        <img 
        src='https://myuniversitymoney.com/wp-content/uploads/2014/12/money-tool.jpg'
        style={{ maxWidth: '50px'}}
        />
        <CardElement/>
        <button  type="submit" disabled={!stripe}>
            Pay
        </button>
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
        
                <Elements stripe={stripePromise}> Stripe Page
                <CheckoutForm success={() => {
                    setStatus('success')
                }}/>
                 </Elements>
        
        )
    
}

export default Stripe
