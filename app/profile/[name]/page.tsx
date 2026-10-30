import { Suspense } from "react";

type ProfilePageProps = {
  params: Promise<{ name: string }>;
};

type User = {
  id: number;
  name: string;
  email: string;
  bio: string;
};

const users: User[] = [
  {
    id: 1,
    name: "rohan",
    email: "rohan@gmail.com",
    bio: "Software Engineer",
  },
  {
    id: 2,
    name: "kunal",
    email: "kunal@gmail.com",
    bio: "Web Developer",
  },
  {
    id: 3,
    name: "anuj",
    email: "anuj@gmail.com",
    bio: "DSA",
  },
];

export default function ProfilePage({ params }: ProfilePageProps) {
  return (
    <Suspense fallback={<p>Loading profile...</p>}>
      <Profile params={params} />
    </Suspense>
  );
}

async function Profile({ params }: ProfilePageProps) {
  const { name } = await params;

  const user = users.find(
    (user) => user.name.toLowerCase() === name.toLowerCase(),
  );

  if (!user) {
    return <h1>User not found!</h1>;
  }

  return (
    <div>
      <h1>{user.name} Profile Page</h1>
      <p>Email: {user.email}</p>
      <p>Bio: {user.bio}</p>
    </div>
  );
}
