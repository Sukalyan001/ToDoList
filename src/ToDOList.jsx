import React from "react";


const ToDOList = (props) => {


    return (
        <>
            <div className="otherdiv">

                <li><span className="fa-solid fa-circle-xmark"
                    onClick={() => {
                        props.onSelect(props.id) ;
                    }} /> {props.text}</li>
            </div>

        </>
    );
};
export default ToDOList;