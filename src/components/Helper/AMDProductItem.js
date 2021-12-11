import React from "react";

function AMDProductItem({name, Speed, gddr6}){
    return(
        <div className="AmdItem">
            <h1>{name}</h1>
            <p>{Speed}</p>
            <p>{gddr6}</p>
        </div>
    )
}

export default AMDProductItem;