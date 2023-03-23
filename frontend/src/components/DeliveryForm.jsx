import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createDeliveries } from '../features/deliveries/deliverySlice'

function DeliveryForm() {
    const [text, setText] = useState('')

    const dispatch = useDispatch()

    const onSubmit = (e) => {
        e.preventDefault()

        dispatch(createDeliveries({ text }))
        setText('')
    }

    return (
        <section className='form'>
            <form onSubmit={onSubmit}>
                <div className='form-group'>
                    <label htmlFor='text'>Delivery</label>
                    <input
                        type='text'
                        name='text'
                        id='text'
                        value={text}
                        placeholder='Add in the name, phone number and location of the recipient'
                        onChange={(e) => setText(e.target.value)}
                    />
                </div>
                <div className='form-group'>
                    <button className='btn btn-block' type='submit'>
                        Add Delivery
                    </button>
                </div>
            </form>
        </section>
    )
}

export default DeliveryForm
