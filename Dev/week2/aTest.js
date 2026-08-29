
//styling is the VERY LAST THING

// .JSX
//in JSX:
import React from 'react'
import myImg1 from './assets/images/visa.png'; //MIGHT BE DIFFERENT
import myImg2 from './assets/images/mastercard.png';

const creditCard = (props) => {
    console.log(props);

    return (
        <div>
            <ul>
                <li>Type: {props.type}</li>
                <li>NUmber: {props.number}</li>
                <img src={myImg1} alt="A logo" />
            </ul>
        </div>
    )

}

export default creditCard;


// IN REACT:



import React from 'react';

function App() {
    return (
        <div className='App'>
            <CreditCard
                type="Visa"
                number="0123456789018875"
                expirationMonth={3}
                expirationYear={2021}
                bank="BNP"
                owner="Maxence Bouret"
                bgColor="#11aa99"
                color="white" 
            />
                    
            <CreditCard
                type="Master Card"
                number="0123456789010993"
                expirationMonth={3}
                expirationYear={2021}
                bank="N26"
                owner="Maxence Bouret"
                bgColor="#eeeeee"
                color="#222222"
            />
                    
            <CreditCard
                type="Visa"
                number="0123456789016982"
                expirationMonth={12}
                expirationYear={2019}
                bank="Name of the Bank"
                owner="Firstname Lastname"
                bgColor="#ddbb55"
                color="white" 
            />
        </div>
    )
}