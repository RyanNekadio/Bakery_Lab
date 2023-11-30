import Cake from './Cake';

const CakeList = ({listOfCakes}) => {
 
 const cakeComponents = listOfCakes.map(cake => {
    return <Cake cake={cake} key={cake.id}/>
})

return(
    <section>
        <h2>All cakes </h2>
        {cakeComponents}
    </section>
)

}

export default CakeList;