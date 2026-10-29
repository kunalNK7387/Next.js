type ProfilePageProps = {
  params: Promise<{ name: string }>;
};
export default async function RohanProfilePage({ params }: ProfilePageProps) {
  const users = [
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
      bio: "Dsa",
    },
  ];

  const pageParams = await params;
  const username = pageParams.name;

  const user = users.find(
    (user) => user.name.toLocaleLowerCase() === username.toLocaleLowerCase(),
  );
  return (
    <div>
      <h1>{user?.name}'s Profile Page</h1>
      <p>Email:{user?.email}</p>
      <p>Bio:{user?.bio}</p>
    </div>
  );
}
