import React from "react";
import { AMDList} from '../Helper/AMDList';
import AMDProductItem from "../Helper/AMDProductItem";
import '../AMD.css'

function AMD_GPU(){
    return (
        <div className="AMD_List">
            <h2 className="AMDTitle">AMD GPUs</h2>
            <div className="ItemList">{AMDList.map((AMDItem, key) => {
                return( 
                <AMDProductItem
                key={key} 
                name={AMDItem.name} 
                Speed={AMDItem.Speed}
                gddr6={AMDItem.gddr6}
                />
                );
            })}
            </div>
        </div>
    );
}

export default AMD_GPU;