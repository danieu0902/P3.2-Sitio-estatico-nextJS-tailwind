import Link from "next/link";
import { slug, menu } from "@/lib/js/utils";

function MenuPrincipal() {
  let estilos =
    "hover:bg-blue-400 hover:rounded-xl m-2  block bg-blue-200 border-blue-950 border-2 rounded-xl p-3";

  return (


    <>

    <div className=" bg-blue-300 ml-2 fixed top-2 right-2 size-12 rounded-md text-center pt-2 "><b>X</b></div>


    <div className="w-[350px] bg-blue-300 ml-2 overflow-y-auto ">
      <Link href={slug(menu[0])} className={`${estilos} `}>
        {menu[0]}
      </Link>
      <details className={`${estilos} `}>
        <summary>
          <Link href={slug(menu[1])}>{menu[1]}</Link>
        </summary>
        
        <details className={`${estilos} `}>
          <summary>
            <Link href={slug(menu[2])} className={` ml-2`}>
              {menu[2]}
            </Link>
          </summary>
          <Link href={slug(menu[3])} className={`${estilos} `}>
            {menu[3]}
          </Link>
          <Link href={slug(menu[4])} className={`${estilos} `}>
            {menu[4]}
          </Link>
        </details>

        <details className={`${estilos} `}>
          <summary>
            <Link href={slug(menu[5])} >
              {menu[5]}
            </Link>
          </summary>
          <Link href={NormalizarTexto(menu[6])} className={`${estilos} `}>
            {menu[6]}
          </Link>
          <Link href={slug(menu[7])} className={`${estilos} `}>
            {menu[7]}
          </Link>
          <Link href={slug(menu[8])} className={`${estilos} `}>
            {menu[8]}
          </Link>
          <Link href={slug(menu[9])} className={`${estilos} `}>
          {menu[9]}
        </Link>
        <Link href={slug(menu[10])} className={`${estilos} `}>
          {menu[10]}
        </Link>
        <Link href={slug(menu[11])} className={`${estilos} `}>
          {menu[11]}
        </Link>
        <Link href={slug(menu[12])} className={`${estilos} `}>
          {menu[12]}
        </Link>
        </details>

        
        <Link href={slug(menu[13])} className={`${estilos} `}>
          {menu[13]}
        </Link>
        <Link href={slug(menu[14])} className={`${estilos} `}>
          {menu[14]}
        </Link>
        <Link href={slug(menu[15])} className={`${estilos} `}>
          {menu[15]}
        </Link>
        <Link href={slug(menu[16])} className={`${estilos} `}>
          {menu[16]}
        </Link>
        <Link href={slug(menu[17])} className={`${estilos} `}>
          {menu[17]}
        </Link>
        <Link href={slug(menu[18])} className={`${estilos} `}>
          {menu[18]}
        </Link>
        <Link href={slug(menu[19])} className={`${estilos} `}>
          {menu[19]}
        </Link>
        <Link href={slug(menu[20])} className={`${estilos} `}>
          {menu[20]}
        </Link>
      </details>
      <details className={`${estilos} `}>
        <summary>
          <Link href={slug(menu[21])}>{menu[21]}</Link>
        </summary>
        <Link href={slug(menu[22])} className={`${estilos} `}>
          {menu[22]}
        </Link>
        <Link href={slug(menu[23])} className={`${estilos} `}>
          {menu[23]}
        </Link>
      </details>
      <Link href={slug(menu[24])} className={`${estilos} `}>
        {menu[24]}
      </Link>
    </div>
    </>
  );
}

export default MenuPrincipal;