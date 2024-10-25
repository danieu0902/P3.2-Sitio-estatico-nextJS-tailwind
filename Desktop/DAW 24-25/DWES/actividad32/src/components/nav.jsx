import Link from "next/link";
import { menu,slug } from "@/lib/utils";
import { ArrowRight, ArrowLeft } from "lucide-react";

function Nav({pos}) {
    return (  <div className="p-4 text-right">
        { /* hacemos un si */}
        { pos >0 &&   

        <Link href={slug(menu[pos - 1])} className="p-2 rounded-l-full"><ArrowLeft className="inline"/>Anterior</Link>
        }
        {pos < menu.length - 1 &&
        <Link href={slug(menu[pos - 1])} className="p-2 rounded-l-full">Siguiente<ArrowRight className="inline"/></Link>

        }
        </div>

    );
}

export default Nav;