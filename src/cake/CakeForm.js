import { useState } from 'react';

const CakeForm = ({onNewCakeSubmission}) =>{
    
    const [name, setName] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [price, setPrice] = useState('');
    const [rating, setRating] = useState('');

    return(
        <section>
        <h2>Add a new cake:</h2>
        <form>
            <label htmlFor='name-input'>Name:</label>
            <input
                type='text'
                id='name-input'
                value={name}
            />
            <label htmlFor='ingredients-input'>ingredients:</label>
            <input
                type='ingredients'
                id='ingredients-input'
                value={ingredients}
            />
            <label htmlFor='price-input'>Price:</label>
            <input 
                type='price'
                id='price-input'
                value={price}
            />
            <label htmlFor='rating-input'>Rating:</label>
            <input
                type='rating'
                id='rating-input'
                value={rating}
            />
            <input type='submit' value='Add New Cake'/>
        </form>
        </section>
    )
}

export default CakeForm;