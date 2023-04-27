function ItemForm(props){

return (
    <form onSubmit={props.saveList}>
        <h2>Add an Item</h2>
    <div> 
        <p>Item:</p> 
        <input
            type='text'
            value={props.item}
            onChange={(event) => {props.setItem(event.target.value)}}
        />
        <p>Quantity:</p> 
        <input 
            type='number'
            value={props.quantity}
            onChange={(event) => {props.setQuantity(event.target.value)}}
        /> 
        <p>Unit:</p> 
        <input 
            type='text'
            value={props.unit}
            onChange={(event) => {props.setUnit(event.target.value)}}
        />
    </div>
    <button>Save</button>
    </form>
)


}

export default ItemForm;