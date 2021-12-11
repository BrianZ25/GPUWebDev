import React from "react";

function NVIDIAProductItem({name, Speed, gddr6}){
    return(
        <div className="NVIDIAItem">
            <h1>{name}</h1>
            <p>{Speed}</p>
            <p>{gddr6}</p>
        </div>
    )
}

export default NVIDIAProductItem;