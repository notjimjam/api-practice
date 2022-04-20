import React, {useState, useEffect} from 'react'

function Characters() {
    const[characters, setCharacters] = useState([])

    const getAllCharacters = () => {

        fetch('http://hp-api.herokuapp.com/api/characters')
        .then((res) => res.json())
        .then((json) => {
            setCharacters(json)
            console.log(json)
        
        })
        .catch(err => console.log(err))

        
    }
    // useEffect(() => {
    //         getAllCharacters()
    //     }, [])


    return (
        <div>
            <h1>harry potter characters</h1>
            <button onClick={getAllCharacters}>get hp characters</button>
            <div>
                {characters && characters.map(characters => {
                    return (
                        <>
                            <p key={characters.id}>Name: {characters.name}</p>
                            <p>House: {characters.house}</p>
                            <img src={characters.image} alt=''/>
                        </>
                    )
                })}
            </div>
        </div>
    )
}

export default Characters

// return (
//     <div>
//         {characters.map((character)=> {
//             // console.log(character)
//             return (
//                 <div key={character.id}>
//                     {character.name}
//                 </div>
//             )
//         })}
//     </div>
// )