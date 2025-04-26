import Popover from "./popover.jsx";
import React from "react";
import Animepreviewline from "./animepreviewline.jsx";

const Animepreviewcolume = () => {
    const lineItems = Array.from({length: 10}, (_, index) => index + 1);
    return (
        <div style={{ width: "100%" , display: "flex" , justifyContent: "center" , flexDirection: "column", gap: '20px' }}>
            {
                lineItems.map((index) => (
                    <Animepreviewline
                        key={index}
                        index={index}
                    />
                ))
            }
            {/*<hr className="border-gray-600" />*/}
        </div>

    )
}
export default Animepreviewcolume;