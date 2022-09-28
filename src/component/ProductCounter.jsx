import { useState } from 'react'
import IconMinus from '../item/images/icon-minus.svg'
import IconPlus from '../item/images/icon-plus.svg'

const ProductCounter = () => {
const [count, setCount] = useState(0)

function increase () {
    setCount(count + 1)
}

function decrease () {
    if (count > 0) {
        setCount (count -1 )
    }
}

  return (
    <div className='product-counter'>
        <button onClick={decrease}> <img src={IconMinus} alt="" /></button>
        <span>{count}</span>
        <button onClick={increase}><img src={IconPlus} alt=""/></button>
    </div>
  )
}

export default ProductCounter