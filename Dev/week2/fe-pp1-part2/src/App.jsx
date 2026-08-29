import "./App.css";
import CreditCard from "./CreditCard";
import myImg from "./assets/images/visa.png";
import myImg2 from "./assets/images/master.png";  

function App() {
  return (
    <div className="credit-card">
      
      <img className="my-img-class" src={myImg} alt="This is an image" />
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
      
      <img className="my-img-class" src={myImg2} alt="This is an image" />
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
      
      <img className="my-img-class" src={myImg} alt="This is an image" />
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
  );
}

export default App;

