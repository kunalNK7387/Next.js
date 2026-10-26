import Image from "next/image";
import Card from "@/components/Card";

export default function Home() {
  return (
    <>
      <h1>
        Hellow World
        <Card title="Card 1" description="This is first card" />
        <Card title="Card 2" description="This is Second card" />
      </h1>
    </>
  );
}
