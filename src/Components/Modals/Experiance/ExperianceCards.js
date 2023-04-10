import React from "react";

function ExperianceCard(props) {
    return (
        <div class=" bg-zinc-800 mt-2 mx-1 pt-2 px-2  " >
            <h5 class="bg-green-700 w-fit py-0.5 px-1 text-sm  ">{props.date}</h5>
            <h5 class=" text-sm">{props.title}</h5>
            <p>{props.description}</p>
        </div>


    );
}

export default ExperianceCard;
