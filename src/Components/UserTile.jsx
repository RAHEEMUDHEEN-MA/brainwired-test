import React, { useState, useEffect, useRef } from "react";

const UserTile = ({
  name,
  username,
  email,
  address,
  phone,
  website,
  company,
}) => {
    const [info, setInfo] = useState(false);

   

    return (
        <div className="py-8 px-8 bg-white rounded-xl shadow-md max-w-sm  max-h-200 m-6 ">
            {name} <button onClick={() => setInfo(!info)}>info</button>

            {info && (
                <div 
                    // ref={infoRef}
                    style={{
                        position: "fixed",
                        top: "50%",
                        right: "50%",
                       
                    }}
                >
                    hi hello  

                    <button onClick={()=>setInfo(!info)}>close</button>
                </div>
            )}
        </div>
    );
};

export default UserTile;
