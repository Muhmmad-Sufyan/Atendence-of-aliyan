import React from "react";

const Header = () => {
    return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
        {/* Using inline styles for rounded corners and responsive width */}
        <img
            src="/ayan.jpg"
            alt=""
            style={{
                borderRadius: '50%', // Makes the image round
                width: '100px',      // Set width
                height: '100px',     // Set height
                objectFit: 'cover'   // Cover to maintain aspect ratio
            }}
        />
    </div>;
};

export default Header;
