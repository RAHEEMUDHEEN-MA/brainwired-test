import React, { useState } from "react";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { FaUserCircle, FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";



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

  const showMap = () => {
    const lat = address.geo.lat;
    const lng = address.geo.lng;
    const url = `https://www.google.com/maps?q=${lat},${lng}`;
    window.open(url, "_blank");
  };

  return (
    <div
      onClick={() => setInfo(!info)}
      className="relative col-auto py-8 px-8 bg-white rounded-xl shadow-md max-w-72 h-52 m-6 hover:shadow-2xl cursor-pointer max-w-74 h-58"
    >
      <div>
        <div className="flex justify-center mb-3">
          <FaUserCircle size={50} color="gray" />
        </div>
        <p className="font-semibold text-gray-700">{name}</p>
        <p className="mb-3 text-gray-500 font-semibold">@{username}</p>

        <a
          href={`https://${website}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
        >
          Visit Site
        </a>
      </div>
      <button className="absolute top-2 right-2">
        <IoIosInformationCircleOutline color="gray" />
      </button>

      {info && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-50 backdrop-blur-lg z-20">
          <div className="flex flex-col items-center justify-center bg-gray-100 bg-opacity-80 backdrop-blur-lg z-30 rounded-md p-4 gap-4">
            <div>
              <p className="font-medium">{name}</p>
              <p>@{username}</p>
            </div>
            <a href={`mailto:${email}`} className="text-blue-500 hover:underline flex items-center">
              <MdOutlineMail /> {email}
            </a>
            <a href={`tel:${phone}`} className="text-blue-500 hover:underline flex items-center">
              <FaPhoneAlt /> {phone}
            </a>
            <address>
              {address.street}, {address.suite}, {address.city}, {address.zipcode}
            </address>
            {address.geo && (
              <button onClick={showMap} className="text-blue-500 hover:underline">
               <IoLocationSharp/>
              </button>
            )}
            <div>
              <p className="font-thin">Company Details</p>
              <p className="font-medium">Name: {company.name}</p>
              <p>{company.bs}</p>
              <p className="font-extralight italic">{company.catchPhrase}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserTile;
