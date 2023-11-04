import * as SC from './Button.styled'
import { BsPersonCircle } from "react-icons/bs";
import {BsFillBagHeartFill} from "react-icons/bs";
import { useState } from 'react';
import { Modal } from '../../../Modal/Modal';
import { Select } from '../../../Select/Select';

export const Buttons = () => {
    const [isOpenModal, setIsOpenModal] = useState(false)
    // const openModal = () => {
    //     setIsOpenModal(true)
    // }

    // const closeModal = () => {
    //     setIsOpenModal(false) 
    // }

    const toogleModal = () => (
        setIsOpenModal(!isOpenModal)
    )
    return (
        <SC.BtnWrapper>
            <SC.Button><BsPersonCircle/></SC.Button>
            <SC.Button onClick={toogleModal}><BsFillBagHeartFill/></SC.Button>
            {/* {isOpenModal && <Modal toogleModal = {toogleModal}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quae expedita beatae esse velit ducimus illum doloribus officia, ratione odit repudiandae vitae ipsa corrupti officiis, possimus harum provident! Dolores, incidunt?</p>
                </Modal>} */}
                 {isOpenModal && <Select toogleSelect={toogleModal}/>}
        </SC.BtnWrapper>
    )
}