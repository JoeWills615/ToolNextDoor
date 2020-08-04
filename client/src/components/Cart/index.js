import React, { Component, useState } from 'react'
import { Consumer } from '../../globalContext'


const Cart = () => {
    const [cart, setCart] = useState([
    
    ])
    return (
        <Consumer>
            {value => {
                const { cart } = value
                console.log(cart);
                return (
                    <div>
                        <table>
                            <thead>
                                {cart.map(item => (
                                    <tr>
                                        <th>Name:{item.name}</th>
                                        <th>Price:{item.price}</th>
                                    </tr>
                                ))}

                            </thead>
                        </table>
                    </div>
                )
            }}

        </Consumer>

    )

}

export default Cart
