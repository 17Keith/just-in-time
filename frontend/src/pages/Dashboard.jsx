import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import DeliveryForm from '../components/DeliveryForm'
import DeliveryItem from '../components/DeliveryItem'
import Spinner from '../components/Spinner'
import { getDeliveries, reset } from '../features/deliveries/deliverySlice'



function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { deliveries, isLoading, isError, message } = useSelector(
    (state) => state.deliveries
  )

  useEffect(() => {
    if (isError) {
      console.log(message)
    }

    if (!user) {
      navigate('/login')
    }

    dispatch(getDeliveries())

    return () => {
      dispatch(reset())
    }
  }, [user, navigate, isError, message, dispatch])

  if (isLoading) {
    return <Spinner />
  }

  return (
    <>
      <section className='heading'>
        <h1>Welcome {user && user.name}.</h1>
        <p>Your Deliveries Dashboard</p>
      </section>

      <DeliveryForm />

      <section className='content'>
        {deliveries.length > 0 ? (
          <div className='deliveries'>
            {deliveries.map((delivery) => (
              <DeliveryItem key={delivery._id} delivery={delivery} />
            ))}
          </div>
        ) : (
          <h3>You have not set any deliveries</h3>
        )}
      </section>
    </>
  )
}

export default Dashboard
