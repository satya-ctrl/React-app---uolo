import React from "react";
const UserCard = ({ user,onDelete }) => {
    return (
        <div className="user-card">
            <img src="image.1" alt="image 2" className=" avatar" />

<div>
    <h3>{user.name}</h3>
    <p>{user.email}</p>
</div>

<button className="delete-btn" onClick={() => onDelete(user.id)} Delete
    ></button>
</div>
    );
};
export default UserCard;