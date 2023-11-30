import { useState } from 'react';
import Cake from './Cake';

const CakeForm = ({onNewCakeSubmission}) =>{
    
    const [cakeName, setCakeName] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [price, setPrice] = useState('');
    const [rating, setRating] = useState('');

    const updateCakeName = (event) => {
        setCakeName(event.target.value);
    }

    const updateCakeIngredients = (event) => {
        setIngredients(event.target.value);
    }

    const updateCakePrice = (event) => {
        setPrice(event.target.value);
    }

    const updateCakeRating = (event) => {
        setRating(event.target.value);
    }



    const handleFormSubmit = (event) => {
        event.preventDefault();

    const ingredientsArray = ingredients.split(' ');

    // const ingredientsToList = ingredientsArray.map((ingredient) => {
    //     return <li>ingredient</li>
    // })

    const ingredientsToList = ingredientsArray.map((ingredient, index) => {
        return <li key={index}>{ingredient}</li>
      })

    const newCake = {
        cakeName: cakeName,
        ingredients: ingredientsToList,
        price: price,
        rating: rating,
        id: Date.now()
    }
        setCakeName("");
        setIngredients("");
        setPrice("");
        setRating("");
        onNewCakeSubmission(newCake);



    }






    return(
        <section>
        <h2>Add a new cake:</h2>
        <form onSubmit={(event) => handleFormSubmit(event)}>
            <label htmlFor='name-input'>Name:</label>
            <input
                type='text'
                id='name-input'
                onInput={(event) => updateCakeName(event)}
                value={cakeName}
            />
            <label htmlFor='ingredients-input'>ingredients:</label>
            <input
                type='text'
                id='ingredients-input'
                onInput={(event) => updateCakeIngredients(event)}
                value={ingredients}
            />
            <label htmlFor='price-input'>Price:</label>
            <input 
                type='text'
                id='price-input'
                onInput={(event) => updateCakePrice(event)}
                value={price}
            />
            <label htmlFor='rating-input'>Rating:</label>
            <input
                type='text'
                id='rating-input'
                onInput={(event) => updateCakeRating(event)}
                value={rating}
            />
            <input type='submit' value='Add New Cake'/>
        </form>
        </section>
    )
}

export default CakeForm;