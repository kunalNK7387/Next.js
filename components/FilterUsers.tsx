"use client";

import { useState } from "react";

export type User = {
  id: number;
  name: string;
  username: string;
};

export default function FilterUsers({ users }: { users: User[] }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filterUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search Users..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <ul>
        {filterUsers.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>

      {filterUsers.length === 0 && <p>No users found.</p>}
    </div>
  );
}
