
const Modal = ({ modalChar }) => {


    if (modalChar) {
        return (
            <div className='modal'>
                <div className='modal-container'>
                    <div className='info-modal'>
                        <button className='x'><i className="fa-solid fa-xmark"></i></button>
                        <div><img src={modalChar.image} alt="" /></div>
                        <div className='modal-txt'>
                            <p><strong>Name:{modalChar.name}</strong></p>
                            <p><strong>Status:{modalChar.status}</strong></p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default Modal;