import Titulo from "@/components/titulo";
import Nav from "@/components/nav";


export const metadata = {
  title: "1.4.- ¿Qué organismo resuelve las convalidaciones?"
};

export default function Home() {
  return (
    <>
      <Titulo>  { metadata.title } </Titulo>
      <Nav pos={14} />

      <div className="flex flex-col gap-4">

      <p>
          Las convalidaciones recogidas expresamente en los
          <b> diferentes Anexos del </b>
          <a className='text-blue-600 underline' href="https://www.juntadeandalucia.es/educacion/gestionafp/documentacion/Informacion_tutorial/14_qu_organismo_resuelve_las_convalidaciones.html#:~:text=RD%201085/2020%2C%20de%209%20de%20diciembre"> RD 1085/2020, de 9 de diciembre </a>
          las resuelve la dirección del centro donde esté matriculado el alumno/a. Se
          <b>resolverá negativamente aquellas solicitudes de su competencia que no aparezcan en los anexos anteriormente citados.</b>
        </p>

        <p>
          Aquellas solicitudes que acrediten para convalidar
          <b> una titulación universitaria o un título de FP1</b> o <b>FP2 </b>
          las resuelve el <b> Ministerio de Educación y Formación Profesional</b>.
          Estas últimas convalidaciones se envían al centro y se trasladan al Ministerio.
          <b><u> En ningún caso el alumnado podrá enviar directamente la solicitud de convalidación al Ministerio.</u></b>
        </p>

      </div>
    </>
  );
}
