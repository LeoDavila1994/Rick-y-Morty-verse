import CharacterItem from "./CharacterItem";


const Residents = ({ locations }) => {

    return (
        <div className="container">
            {locations?.map(character => (
                <CharacterItem character={character} key={character} />
            ))}
        </div>
    );
};

export default Residents;