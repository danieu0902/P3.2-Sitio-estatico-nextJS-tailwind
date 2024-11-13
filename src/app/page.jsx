import { redirect } from "next/navigation";
import Image from "next/image";
import {menu, slug} from "@/lib/utils";
import { fromJSON } from "postcss";
export const metadata = {
  title: "Informacion general: convalidaciones, exenciones y títulos",
};
export default function Home() {
  return (
   redirect(slug(menu[0]))
  );
}
