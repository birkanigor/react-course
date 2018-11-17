import React from 'react';

const Ninjas =({ ninjas }) => {    
    const ninjaList = ninjas.map(ninja => {
        return (
            <div className="ninja" key={ninja.id}>
                <div><b>Name : {ninja.name}</b></div>
                <div>Age : {ninja.age}</div>
                <div>Belt : {ninja.belt}</div>   
                <p></p>                 
            </div>                
        )
    })
    return (
        <div className="ninja-List">
            {ninjaList}
        </div>
    )
}

export default Ninjas;