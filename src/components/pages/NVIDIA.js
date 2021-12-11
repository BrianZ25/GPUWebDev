import React from "react";
import { NVIDIAList} from '../Helper/NVIDIAList';
import NVIDIAProductItem from "../Helper/NVIDIAProductItem";
import '../NVIDIA.css'

function NVIDIA_GPU(){
    return (
        <div className="NVIDIA_List">
            <h2 className="NVIDIATitle">NVIDIA GPUs</h2>
            <div className="ItemList2">{NVIDIAList.map((NVIDIAItem, key) => {
                return( 
                <NVIDIAProductItem
                key={key} 
                name={NVIDIAItem.name} 
                Speed={NVIDIAItem.Speed}
                gddr6={NVIDIAItem.gddr6}
                />
                );
            })}
            </div>
        </div>
    );
}

export default NVIDIA_GPU;