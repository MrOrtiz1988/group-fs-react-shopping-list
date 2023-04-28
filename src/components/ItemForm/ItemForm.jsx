function ItemForm(props){

return (
    <form onSubmit={props.saveList}>
        <h2>Add an Item</h2>
    <div> 
        <label>Item: <input
            type='text'
            placeholder="enter item"
            value={props.item}
            onChange={(event) => {props.setItem(event.target.value)}}
        /></label>
        
        <label>Quantity: <input 
            type='number'
            placeholder="how many?"
            value={props.quantity}
            onChange={(event) => {props.setQuantity(event.target.value)}}
        /></label>  

        <label>Unit: <input 
            type='text'
            placeholder="what units?"
            value={props.unit}
            onChange={(event) => {props.setUnit(event.target.value)}}
        /></label>
    </div>
    <button clasName="save-btn">Save</button>
    </form>
)


}

export default ItemForm;