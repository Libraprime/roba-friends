import Card from './Card';

const CardList = ({ robots }) => {
    return(
        <section>
           {
            robots.map((user, i) =>{
                return (
                    <Card 
                        key={i} 
                        id={robots[i].id} 
                        name={robots[i].name} 
                        email={robots[i].email}  
                    />
                )
            })
           }
        </section>
    )
}

export default CardList