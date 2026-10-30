import Image from "next/image";
import Card from "@/components/Card";
import { someAction } from "@/app/actions/something";

export default function Home() {
  return (
    <>
      <h1>Hellow World</h1>
      <button onClick={someAction}>Click Me</button>
    </>
  );
}
