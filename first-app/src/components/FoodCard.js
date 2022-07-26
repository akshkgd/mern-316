function FoodCard(props) {
    function orderHandler() {
        console.log("Order Successful: " + props.title)
        let price = Number(props.price);
        if (price > 149) {
            console.log('eligible for free Delivery!!')
        }
        else {
            console.log('not eligible for free Delivery!!')
            console.log('Amount payable: ', price + 23)

        }
    }
    return (
        <div className="card">
            <div className="card-header">
                <img src={props.img} className="card-img"></img>
                <p className={Number(props.ratings) > 4.4 ? "must-try" : "d-none"}>Must Try</p>
            </div>
            <h3>{props.title}</h3>
            <p>This is a veg supreme burger.</p>
            <button onClick={orderHandler} className="btn">Order Now</button>
        </div>
    );
}

export default FoodCard;