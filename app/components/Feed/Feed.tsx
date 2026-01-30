'use client'

import {useState} from "react";

// Yes my commenting is sparse deal with it.
export default function Feed() {
    const [ buttonText, setButtonText ] = useState("A new type of social.  Putting people first.");
    const [buttonOn, setButtonOn ] = useState(false);

    return (<button onClick={() => {
        if (buttonOn) {
            setButtonText("A new type of social.  Putting people first.");
        } else {
            setButtonText("Am I a button?  Inspect me...");
        }
        setButtonOn(!buttonOn);
    }} className="flex-col justify-start bg-purple-700 text-white font-bold py-2 px-4 rounded transition duration-150 min-w-full mb-2.5">
        {buttonText}
    </button>)
}