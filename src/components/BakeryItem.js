

// TODO: create a component that displays a single bakery item
function BakeryItem(props) {
	return (
		<div className="BakeryItem">
        <p>{props.item.name}</p>
        <p>{props.item.description}</p>
        <p>{props.item.price}</p>
        <img src={props.item.image}/>
        <br></br>
        <button onClick={() => {props.handleClick(props.item)}}>Add to Cart</button>
    </div>
	);
}

export default BakeryItem;
