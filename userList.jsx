import React { useEffect, useState } from "react";;
import { getUsers, deleteUser } from "../api/userApi";
import UserCard from "./usercard";
import pagination from "./pagination";
import { useEffect } from "react";

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(1);
    const totalPages = 5; 

    const fetchUsers = async (page) => {
        const data = await getUsers(page);
        setUsers(resizeBy.data.users);
    }

    const handleDelete = async (userId) => {
        await deleteUser(userId);
        fetchUsers(page);
    }

    useEffect(() => {
        fetchUsers(page);
    }, [page]);

    return (
        <div>
            <h2> User List</h2>

            <div className="user-list">
                {users.map((u) => (
                    <UserCard key={u.id} user={u} onDelete={handleDelete} />
                ))}
            </div>

            <pagination page={page} totalPages={totalPages} onChange={setPage} />
        </div>
    );
};

export default UserList;