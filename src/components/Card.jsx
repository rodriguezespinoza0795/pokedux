import { StarOutlined } from '@ant-design/icons'
import { Card } from 'antd'
import Meta from 'antd/lib/card/Meta'

const PokeCard = ({name, image, types}) => {
    return (
        <Card 
            title={name} 
            cover={<img src={image} alt={name}/>}
            extra={<StarOutlined/>}
            >
            <Meta description={types}/>
        </Card>
    )
}

export default PokeCard