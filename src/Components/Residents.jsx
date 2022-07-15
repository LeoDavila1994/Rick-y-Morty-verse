import { useState } from "react";
import CharacterItem from "./CharacterItem";
import Modal from "./Modal";


const Residents = ({ locations }) => {

    const [modalChar, setModalChar] = useState(null);

    const toModal = (oneChar) => {
        setModalChar(oneChar);
    }

    return (
        <>
            <div className="container">
                {locations?.map(character => (
                    <CharacterItem character={character} key={character} toModal={toModal} />
                ))}
            </div>
            <Modal modalChar={modalChar}/>
        </>
    );
};

export default Residents;