import { StarOutlined } from '@ant-design/icons'
import { Card } from 'antd'
import Meta from 'antd/lib/card/Meta'

const PokeCard = ({name}) => {
    const dittoImage = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'
    return (
        <Card 
            title={name} 
            cover={<img src={dittoImage} alt="ditto"/>}
            extra={<StarOutlined/>}
            >
            <Meta description='fire, magic'/>
        </Card>
    )
}

export default PokeCard