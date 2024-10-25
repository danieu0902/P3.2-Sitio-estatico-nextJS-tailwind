import Image from "next/image";
import Nav from "@/components/nav";
import Titulo from "@/components/titulo";
export const metadata = {
  title: "Informacion general: convalidaciones, exenciones y títulos",
};
export default function Home() {
  return (
   <>
    <Titulo>{metadata.title}</Titulo>
    <Nav pos={0} />
   </>
  );
}
