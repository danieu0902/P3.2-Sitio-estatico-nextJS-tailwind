import Titulo from "@/components/titulo";
import Nav from "@/components/nav";

export const metadata = {
  title: "1.2.4.- Condiciones para convalidar Segunda Lengua Extranjera",
};

export default function Home() {
  return (
    <>
      <Titulo> {metadata.title} </Titulo>
      <Nav pos={9} />

      <div className="flex flex-col gap-4">
        <p>
          Para poder convalidar el módulo de Segunda Lengua Extranjera debe
          aportarse siempre estudios cursados y superados en la misma lengua que
          se desee convalidar. Es necesario acreditar alguna de las siguientes
          condiciones:
        </p>
        <table className=" mx-[10%] w-[80%] border-separate">
          <thead>
            <tr>
              <th className="p-2 bg-blue-200">Modulo a convalidar</th>
              <th className="p-2 w-[60%] bg-blue-200">Formación a aportar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th rowSpan="4" className="p-2  bg-blue-200">
                <p>2ª Lengua Extranjera LOGSE</p>
              </th>
              <td className="p-2 border border-blue-200 hover:bg-blue-200 ">
                <p>
                  MP Segunda Lengua Extranjera LOGSE, siempre que sea la misma
                  que la que se desea convalidar.
                </p>
              </td>
            </tr>
            <tr>
              <td className=" p-2 border border-blue-200 hover:bg-blue-200">
                <p>
                  Certificado de Nivel Intermedio (B1), equivalente o superior,
                  de la Escuela Oficial de Idiomas (RD 1629/2006, de 29 de
                  diciembre) siempre que sea de la misma lengua extranjera que
                  la que se desea convalidar.
                </p>
              </td>
            </tr>
            <tr>
              <td className=" p-2 border border-blue-200 hover:bg-blue-200">
                <p>
                  Título de Grado en Filología o equivalente, de la misma
                  especialidad que la lengua extranjera que se desea convalidar.
                </p>
              </td>
            </tr>
            <tr>
              <td className=" p-2 border border-blue-200 hover:bg-blue-200">
                <p>
                  Título de Grado Traducción e Interpretación, o equivalente, de
                  la misma especialidad que la lengua extranjera que se desea
                  convalidar.
                </p>
              </td>
            </tr>

            <tr>
              <th rowSpan="4" className="p-2  bg-blue-200">
                <p>0180 2ª Lengua Extranjera.</p>
              </th>
              <td className="p-2 border border-blue-200 hover:bg-blue-200 ">
                <p>Segunda Lengua Extranjera LOGSE.</p>
                <p>
                  Cuando la lengua extranjera cursada y superada sea la misma
                  que se desea convalidar.
                </p>
              </td>
            </tr>
            
            <tr>
              <td className=" p-2 border border-blue-200 hover:bg-blue-200">
                <p>
                  Certificado del Ciclo Elemental o de Aptitud, de la Escuela
                  Oficial de Idiomas.
                </p>
                <p>(RD 967/1988, de 2 de septiembre).</p>
                <p>(De la misma lengua extranjera que se desea convalidar).</p>
              </td>
            </tr>

            <tr>
              <td className=" p-2 border border-blue-200 hover:bg-blue-200">
                <p>
                  Certificado de Nivel Intermedio (B1), o superior, de la
                  Escuela Oficial de Idiomas. (RD 1629/2006, de 29 de
                  diciembre).
                </p>
                <p>(De la misma lengua extranjera que se desea convalidar).</p>
              </td>
            </tr>
            <tr>
              <td className=" p-2 border border-blue-200 hover:bg-blue-200">
                <p>
                  Título de Grado, o equivalente, en Filología o en Traducción e
                  Interpretación.
                </p>
                <p>
                  (De la misma especialidad que la lengua extranjera que se
                  desea convalidar).
                </p>
              </td>
            </tr>
          </tbody>
        </table>

        <div className="flex flex-col gap-4 bg-yellow-50 p-10 rounded-2xl drop-shadow-md drop-shadow-black border-black border w-[90%] mx-[5%]">
          <div className="flex flex-row gap-4"><img src="https://www.juntadeandalucia.es/educacion/gestionafp/documentacion/Informacion_tutorial/icon_parasabermasfpd.png" alt="Paco la carta" /><p className="self-center text-3xl text-amber-800 font-bold">Para saber más</p></div>
          <p className=" text-amber-800">Por tanto, no es posible, <span className="bg-yellow-300 underline">EN NINGÚN CASO</span>, convalidar este módulo por haber cursado una asignatura universitaria relativa a este idioma.</p>
        </div>
      </div>
    </>
  );
}
