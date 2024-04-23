import React, { useEffect, useState } from "react";
import getUsers from "../utils/Api";
import UserTile from "../Components/UserTile";


function UserPage() {
  const [users, setUsers] = useState([]);
  console.log(users);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await getUsers(); 
        setUsers(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {users.map((user) => (
        <UserTile
        key={user.id}
        name={user.name}
        username={user.username}
        email={user.email}
        address={user.address}
        phone={user.phone}
        website={user.website}
        company={user.company}

        />
      ))}
    </div>
  );
}

export default UserPage;
