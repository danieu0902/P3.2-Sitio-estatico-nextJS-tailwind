import Titulo from "@/components/titulo";
import Nav from "@/components/nav";
import ItemLista from "@/components/item-lista";

export const metadata = {
  title: "1.2.- ¿Dónde encontrar qué módulos son convalidables?",
};

export default function Home() {
  return (
    <>
      <Titulo> {metadata.title} </Titulo>
      <Nav pos={5} />
    <div className="px-4">
      <p className="py-6"> Son dos los documentos que debes consultar: </p>

      <ItemLista>
        <p className="text-justify">Por un lado, los diferentes <b>Anexos del </b>
        <a
          href="https://www.todofp.es/convalidaciones-equivalencias-homologaciones/convalidaciones.html"
          className="text-blue-600 underline"
        >
          Real Decreto 1085/2020, de 9 de
          diciembre, por el que se establecen convalidaciones de
          módimportItemListaos profesionales de los títimportItemListaos de
          Formación Profesional del sistema educativo español y las medidas para
          su aplicación, y se modifica el 
          Real Decreto 1147/2011, de 29 de julio, por el que se establece la
          ordenación general de la formación profesional del sistema educativo.
        </a>
        Aquí puedes consultar las tablas de convalidaciones del Real decreto
        1085/2020, de 9 de diciembre (
        <a
          href="https://www.todofp.es/convalidaciones-equivalencias-homologaciones/convalidaciones.html"
          className="text-blue-600 underline"
        >
          tablas de convalidación
        </a>
        ).
        </p>
      </ItemLista>
      <ItemLista>
      <p className="text-justify">
        Por otro, el <b>Anexo IV del Real Decreto</b> que crea el título LOE que estás
        estudiando, ya que establece las convalidaciones con módulos LOGSE del
        mismo Ciclo. Quien haya superado la totalidad de un ciclo formativo
        LOGSE no podrá aportarlo para solicitar la convalidación de ningún
        módulo profesional del ciclo formativo LOE que lo sustituye. Estas
        convalidaciones están reservadas para quien transita a un ciclo
        formativo LOE desde un ciclo formativo LOGSE, sin haberlo finalizado ni
        obtenido el título.
        </p>
      </ItemLista>

      <p className="py-6 text-justify">
        Ten en cuenta que los <b>módulos profesionales con el mismo código y
        denominación</b> presentes en diferentes ciclos formativos LOE <b>son en
        realidad el mismo módulo profesional.</b> Estos módulos se denominan
        transversales. Si superas un módulo profesional <b>transversal</b> en un ciclo
        formativo, lo tendrás superado en cualquier otro del que también forme
        parte y la calificación obtenida se traslada de un ciclo al otro sin
        necesidad de convalidación ni más trámite.
      </p>

      <p className="pb-6 text-justify">
        Los módulos profesionales de FOL y EIE tienen en todos los ciclos
        formativos LOE la misma denominación, pero diferentes códigos. Por
        tanto, no hay arrastre de calificación sino convalidación. Se deben
        cursar o convalidar de un ciclo formativo a otro (siempre que se cumplan
        los requerimientos para ello).
      </p>

      <ItemLista>
        La convalidación del módulo FOL puedes consultarla en el siguiente
        enlace:{" "}
        <a
          href="https://www.todofp.es/convalidaciones-equivalencias-homologaciones/convalidaciones.html"
          className="text-blue-600 underline"
        >
          Convalidación de FOL.
        </a>
      </ItemLista>
      <ItemLista>
        La convalidación del módulo EIE puedes consultarla en el siguiente
        enlace:{" "}
        <a
          href="https://www.todofp.es/convalidaciones-equivalencias-homologaciones/convalidaciones.html"
          className="text-blue-600 underline"
        >
          Convalidación de EIE.
        </a>
      </ItemLista>


      <div className="flex flex-col items-center justify-center mt-8">
      <img className="w-[300px] h-[332px] border-2 border-black" src="https://www.juntadeandalucia.es/educacion/gestionafp/documentacion/Informacion_tutorial/school-1661730_960_720.jpg" alt="" />
      <p className="text-xs pt-6">Imagen en <a className="text-blue-600 underline" title="Leyes" href="https://pixabay.com/es/escuela-libro-saber-lectura-1661730/" target="_blank" rel="noopener">Pixabay </a>de <a className="text-blue-600 underline" title="MonikaP" href="https://pixabay.com/es/users/MonikaP-2515080/" target="_blank" rel="noopener">MonikaP</a> bajo <a className="text-blue-600 underline" title="CC" href="https://creativecommons.org/publicdomain/zero/1.0/deed.es" target="_blank" rel="noopener">CC</a></p>
      </div>
      </div>
    </>
  );
}
