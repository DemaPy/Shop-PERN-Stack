import { observer } from 'mobx-react-lite'
import { useAppContext } from '../store/userContext'
import { ListGroup } from 'react-bootstrap'

export const TypeBar = observer(() => {

  const {device} = useAppContext()

  return (
    <ListGroup>
      {
        device.types.map(({id, name}) => <ListGroup.Item
          style={{
            textTransform: "capitalize",
            cursor: "pointer",
          }}
          active={id === device.selectedType.id}
          onClick={() => device.setSelectedType({id})}
          key={id}>
          {name}
        </ListGroup.Item>)
      }
    </ListGroup>
  )
})
