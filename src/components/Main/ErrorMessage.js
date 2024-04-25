import React, { useState } from "react";

export default function ErrorMessage(props) {
    const [errorState, setErrorState] = useState(false)

    return (
        <>{errorState?<div class="error-message">
            {props.message}
        </div>:<></>}</>
    )
}