import * as SC from './Modal.styled'
import { createPortal } from 'react-dom'
import { useEffect } from 'react'

const modalRoot = document.querySelector('#modal-root')

export const Modal = ({toogleModal, children}) => {

    useEffect(() => {
        const onESCClick = (e) => {
            console.log('key', e.key);
console.log('code', e.code);
if(e.code === 'Escape') {
    toogleModal()
}
}
window.addEventListener('keydown', onESCClick)

return () => {
    window.removeEventListener('keydown', onESCClick)
    
}
    },[])


    const closeOnClick = (e) => {
    if (e.target === e.currentTarget)
    toogleModal()
    }

    return createPortal(   
         <SC.Overlay onClick={closeOnClick}>
         <SC.Inner> 
        {children}
        <SC.CloseBtn onClick={toogleModal}>X</SC.CloseBtn>
         </SC.Inner>
        </SC.Overlay>
        ,modalRoot
        
        
       
    )
}



