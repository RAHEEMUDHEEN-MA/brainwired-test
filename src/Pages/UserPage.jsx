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
      <div>
        {" "}
        <p class="text-3xl text-blue-950 font-semibold  m-4">Users</p>
      </div>
      <div className="bg-blue-50  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1 h-full px-20 ">
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
    </div>
  );
}

export default UserPage;
