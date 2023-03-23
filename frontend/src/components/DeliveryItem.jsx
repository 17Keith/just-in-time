import { useDispatch } from 'react-redux'
import { deleteDeliveries } from '../features/deliveries/deliverySlice'

function DeliveryItem({ delivery }) {
  const dispatch = useDispatch()

  return (
    <div className='delivery'>
      <div>{new Date(delivery.createdAt).toLocaleString('en-US')}</div>
      <h2>{delivery.text}</h2>
      <button onClick={() => dispatch(deleteDeliveries(delivery._id))} className='close'>
        X
      </button>
    </div>
  )
}

export default DeliveryItem
