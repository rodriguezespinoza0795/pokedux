import Card from "./Card";

const PokeList = ({pokemons}) => {
    return (
        <div className="pokelist">
            {
                pokemons.map((pokemon) => {
                    return <Card 
                    key={pokemon.name} 
                    name={pokemon.name} 
                    image={pokemon.sprites.front_default}
                    types={pokemon.types[0].type.name}/>
                })
            }

        </div>
    )
}

PokeList.defaultProps = {
    pokemons: Array(10).fill('')
}

export default PokeList