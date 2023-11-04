import * as SC from '../Select/Select.styled'
import { useEffect } from 'react'



export const Select = ({toogleSelect}) => {
    useEffect(() => {
        const onESCClick = (e) => {
            
if(e.code === 'Escape') {
    toogleSelect()
}
}
window.addEventListener('keydown', onESCClick)

return () => {
    window.removeEventListener('keydown', onESCClick)
    
}
    },[])
    return (
      
<SC.Wrapper>
    <div>
        <img src="" alt="" />
        <h3>Product</h3>
        <p></p>
        <p>price</p>
        <button>View</button>
        <button>Order</button>
        <SC.CloseBtn onClick={toogleSelect}>X</SC.CloseBtn>
    </div>
</SC.Wrapper>
    )
}
