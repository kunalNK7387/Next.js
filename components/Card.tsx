type CardProps = {
  title: string;
  description: string;
};

export default function card({ title, description }: CardProps) {
  return (
    <div className="card p-4 w-fit rounded shadow-md flex-col gap-10">
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}
