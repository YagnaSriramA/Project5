import React from "react";


function Joke(props)
{
    return(
        <div>
            <p><b>{props.setup}</b></p>
            <p>{props.punchline}</p>
        </div>
    )
}

export default Joke