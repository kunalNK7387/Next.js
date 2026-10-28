import FilterUsers from "@/components/FilterUsers";
import { Suspense } from "react";
import type { User } from "@/components/FilterUsers";

async function UserList() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }

  const users: User[] = await response.json();

  return <FilterUsers users={users} />;
}

export default function Classroom() {
  return (
    <main>
      <h1>Hello From Classroom</h1>
      
      <Suspense fallback={<p>Loading users...</p>}>
        <UserList />
      </Suspense>
    </main>
  );
}
