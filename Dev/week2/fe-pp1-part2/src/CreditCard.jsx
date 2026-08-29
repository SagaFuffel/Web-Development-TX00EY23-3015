import "./App.css";

function CreditCard(props) {

    return (   
        <div className="credit-card"   //STYLE NEEDS TO BE IN DIV
            style={{
                backgroundColor: props.bgColor, color: props.color
                }}>
            <p>type:{props.type}</p>
            <p>•••• •••• •••• {props.number.slice(-4)}</p>
            <p>Expires {props.expirationMonth} / {props.expirationYear}      {props.bank}</p>
            <p>owner:{props.owner}</p>
        </div>
    )
}

export default CreditCard;

