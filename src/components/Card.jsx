import { Card } from 'antd'
import Meta from 'antd/lib/card/Meta'
import { useDispatch } from 'react-redux'
import StarButton from './StarButton'
import { setFavorite } from '../actions'

const PokeCard = ({name, image, types, id}) => {

    const dispatch = useDispatch()
    const handleOnFavorite = () => {
        dispatch(setFavorite({pokemonId:id}))
    }

    return (
        <Card 
            title={name} 
            cover={<img src={image} alt={name}/>}
            extra={<StarButton 
                isFavorite 
                onclick={handleOnFavorite}
                />
            }
            >
            <Meta description={types}/>
        </Card>
    )
}

export default PokeCard