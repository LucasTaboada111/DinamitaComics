import * as React from "react";

const UsersForAdmin = ({ users ,handleClick}) => {
  console.log(users);
  return (
    <div>
      <h1>Users : </h1>
      <div>
        {users.length &&
          users.map((user) => {
            return (
              <ul key={user.id}>
                <h3>User:</h3>
                <li>Fullname: {user.fullname}</li>
                <li>Username: {user.username}</li>
                <li>Email: {user.email}</li>
                <li>Phone: {user.phone}</li>
                <li>Country: {user.country}</li>
                <li>Address: {user.address}</li>
                <li>Id: {user.id}</li>
                <li>isAdmin: {user.isAdmin? "Yes": "No"}</li>
                <button onClick={(e)=>handleClick(user.id,e)}>ToggleAdmin</button>
              </ul>
            );
          })}
      </div>
    </div>
  );
};

export default UsersForAdmin;
