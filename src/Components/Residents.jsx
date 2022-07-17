import { useState } from "react";
import CharacterItem from "./CharacterItem";
import Modal from "./Modal";


const Residents = ({ locations }) => {

    const [page, setPage] = useState(1);
    const lastIndex = page * 15;
    const firstIndex = lastIndex - 15;
    const lastPage = Math.ceil(locations?.length / 15);
    const numberPage = [];
    for (let i = 1; i <= lastPage; i++) {
        numberPage.push(i);
    }

    const characterPagination = locations?.slice(firstIndex, lastIndex);
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
                {characterPagination?.map(character => (
                    <CharacterItem character={character} key={character} toModal={toModal} />
                ))}
            </div>
            <Modal modalChar={modalChar} deselectChar={deselectChar} />
            {numberPage.length <= 1 ? <div></div> : (
                <>
                    <div className="page-container">
                        <button onClick={() => setPage(page - 1)} disabled={page === 1}><i className="fa-solid fa-caret-left"></i></button>
                        {numberPage.map(number => (
                            <div key={number}>
                                <button onClick={() => setPage(number)}>{number}</button>
                            </div>
                        ))}
                        <button onClick={() => setPage(page + 1)} disabled={page === lastPage}><i className="fa-solid fa-caret-right"></i></button>
                    </div>
                </>
            )}
        </>
    );
};

export default Residents;