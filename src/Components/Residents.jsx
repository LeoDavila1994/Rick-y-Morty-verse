import { useState } from "react";
import CharacterItem from "./CharacterItem";
import Modal from "./Modal";


const Residents = ({ locations }) => {

    const [modalChar, setModalChar] = useState(null);

    const toModal = (oneChar) => {
        setModalChar(oneChar);
    }

    const deselectChar = () => {
        setModalChar(null)
    }

    return (
        <>
            <div className="container">
                {locations?.map(character => (
                    <CharacterItem character={character} key={character} toModal={toModal} />
                ))}
            </div>
            <Modal modalChar={modalChar} deselectChar={deselectChar}/>
        </>
    );
};

export default Residents;