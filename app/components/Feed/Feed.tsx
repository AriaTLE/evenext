'use client'

import {useState} from "react";

// Yes my commenting is sparse deal with it.
export default function Feed() {
    const [ buttonText, setButtonText ] = useState("A new type of social.  Putting people first.");
    const [buttonOn, setButtonOn ] = useState(false);

    return (<>
        <button className="flex-col justify-start bg-purple-700 text-white font-bold py-2 px-4 rounded transition duration-150 min-w-full mb-2.5">
            The people first network <br />In Memory of two wonderful kids may they rest in peace.
        </button>
        {/*<div className="h-5">A tribute to two wonderful children lost way too soon.</div>*/}
        <video controls width="100%" className="flex z-0 mb-3">
            <source className="relative z-0" src="https://storage.googleapis.com/evemedia/For%20the%20Children.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        <button onClick={() => {
            if (buttonOn) {
                setButtonText("A new type of social.  Putting people first.");
            } else {
                setButtonText("Am I a button?  Inspect me...");
            }
            setButtonOn(!buttonOn);
        }} className="flex-col justify-start bg-purple-700 text-white font-bold py-2 px-4 rounded transition duration-150 min-w-full mb-2.5">
            {buttonText}
        </button>
        <video controls width="100%" className="flex z-0">
            <source className="relative z-0" src="https://storage.googleapis.com/evemedia/TopDollar.mov" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    </>)
}