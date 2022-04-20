import React, { useEffect, useState } from 'react'

function FetchApi() {

    const [data, setData] = useState([])

const apiGet = () => {
    fetch('http://hp-api.herokuapp.com/api/characters')
    .then((response) => response.json())
    .then((json) => {
        console.log(json);
        setData(json);
    })

}

    useEffect(() => {
        apiGet()
    },[])

  return (
    <div>
        FetchApi <br/>
        <button onClick={apiGet}>Fetch API</button>
        <br/>
        {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
        <div>
            <ul>
                {data.map(item =>
                    <li key={item.id}>{item.name}</li>) }
            </ul>
        </div>
    </div>

  )
}

export default FetchApi