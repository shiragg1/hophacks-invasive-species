import React from "react";

export default function Map() {
    return (
        <>
            <div className={"relative"}>
            <iframe width="600" height="800" loading="lazy" allowfullscreen src="https://www.google.com/maps/embed/v1/view?zoom=17&center=39.3302%2C-76.6261&key=AIzaSyAtWiQe3EC3LT7P92mCMNpv7wwQol-LZRU" className={"absolute left-0 p-8"}></iframe>
                <div className={"p-8"}>
                <p className={"absolute right-8 whitespace-normal w-5/12 text-amber-100 text-center align-baseline bg-emerald-700 rounded p-3"}>
                    Place a pin on the map if you are in an area with heavy overgrowth! Upload and image and a brief note about the area.
                    If you are a volunteer, update pins whenever you remove invasive species from an area.
                    <br></br>
                    <br></br>
                    <ul>
                        <li>&#128308; Red pin: heavily overgrown!</li>
                        <li>&#128993; Yellow pin: restoration in progress</li>
                        <li>&#128994; Green pin: area restored :D</li>
                    </ul>
                </p>
                </div>
                <p className={"absolute right-8 top-72 outline outline-4 outline-emerald-700 whitespace-normal w-5/12 h-96 text-emerald-700 text-center align-baseline bg-white rounded p-3"}>
                    add notes here...
                </p>
            </div>
        </>

);

}
