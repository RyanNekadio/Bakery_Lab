import { useState } from "react";
import CakeList from "./CakeList";
import CakeForm from "./CakeForm";

const CakeContainer = () => {

    const [listOfCakes, setListOfCakes] = useState(
		[
			{
				cakeName: "Victoria Sponge",
				   ingredients: [
					   "eggs",
					  "butter",
					  "sugar",
					  "self-raising flour",
					  "baking powder",
					  "milk"
				  ],
				   price: 5,
				   rating: 5,
				   id: 1
				
			},
			{
				 cakeName: "Tea Loaf",
				   ingredients: [
					   "eggs",
					  "oil",
					  "dried fruit",
					  "sugar",
					  "self-raising flour",
					  "strong tea",
				  ],
				  price: 2,
				  rating: 3,
				  id: 2
			},
			{
				 cakeName: "Carrot Cake",
				   ingredients: [
					"carrots",
					  "walnuts",
					  "oil",
					  "cream cheese",
					  "flour",
					  "sugar",
				   ],
				   price: 8,
				   rating: 5,
				   id: 3
			} 
		]		
	)

	const handleNewCakeSubmission = (newCake) =>{
		const updatedCakes = [...listOfCakes];
		updatedCakes.push(newCake);
		console.log(newCake);
		setListOfCakes(updatedCakes);
	}

  	return (
	<>
		<CakeForm onNewCakeSubmission={handleNewCakeSubmission}/>
		<CakeList listOfCakes={listOfCakes}/>
	</>
  )
}

export default CakeContainer;