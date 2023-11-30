import { createElement } from "react"

const Cake = ({cake}) => {

    // const cakeComponents = cakes.map(cake => {
    //   return <Cake cake={cake}/>
    // })

    // const ingredientsToShow = document.querySelector("ul")
    //  (let ingredient of cake.ingredients) {
    //   <li>ingredientsToShow.appendChild(ingredient)</li>;
    // }

    const ingredientsToShow = cake.ingredients.map((ingredient, index) => {
      return <li key={index}>{ingredient}</li>
    })

    return (
      <>
          <div>
            <p><b>Name: </b>{cake.cakeName}</p>
            <p><b>Rating: </b>{cake.rating}</p>
            <p><b>Price: </b>{cake.price}</p>
            <ul>
            {ingredientsToShow}
            </ul>
          </div>
      </>
    )
  }
  
  export default Cake;