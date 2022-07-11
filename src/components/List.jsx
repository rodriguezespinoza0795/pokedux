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
                    types={pokemon.types.map(item => item.type.name).join(', ')}
                    id={pokemon.id}/>
                })
            }

        </div>
    )
}

PokeList.defaultProps = {
    pokemons: Array(10).fill('')
}

export default PokeList