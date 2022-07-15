import { useEffect } from "react";
import Status from "./Status";

const Modal = ({ modalChar, deselectChar }) => {


    if (modalChar) {
        return (
            <div className='modal'>
                <div className='modal-container'>
                    <div className='info-modal'>
                        <button className='x' onClick={deselectChar}><i className="fa-solid fa-xmark"></i></button>
                        <div><img src={modalChar.image} alt="" /></div>
                        <div className='modal-txt'>
                            <p><strong>Name: {modalChar.name}</strong></p>
                            <div><strong>Status:</strong> <div className='status'><Status charStatus={modalChar.status} /></div>{modalChar.status}.</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default Modal;