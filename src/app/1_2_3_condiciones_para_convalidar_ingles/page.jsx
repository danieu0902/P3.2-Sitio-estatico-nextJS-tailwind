import Titulo from "@/components/titulo";
import Nav from "@/components/nav";

export const metadata = {
  title: "1.2.3.- Condiciones para convalidar Inglés",
};

export default function Home() {
  return (
    <>
      <Titulo> {metadata.title} </Titulo>
      <Nav pos={8} />

      <div className="flex flex-col gap-4">
        <p className="pb-2">
          La documentación a aportar varía en función del módulo Inglés que se
          desee convalidar. Siempre deben ser estudios cursados y superados de
          lengua inglesa.
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
              <th rowSpan="10" className="p-2  bg-blue-200">
                <p>0156 Inglés</p>
              </th>
              <td className="p-2 border border-blue-200 hover:bg-blue-200 ">
                <p>
                  Lengua Extranjera LOGSE (duración de 65 horas, según el Real
                  Decreto que establece el título de formación profesional y sus
                  enseñanzas mínimas)
                </p>
                <p>
                  Cuando la lengua extranjera cursada y superada sea inglés.
                </p>
              </td>
            </tr>
            <tr>
              <td className=" p-2 border border-blue-200 hover:bg-blue-200">
                <p>Lengua Extranjera LOGSE o de la C.A.</p>
                <p>Cuando la lengua extranjera cursada y superada sea inglés</p>
              </td>
            </tr>
            <tr>
              <td className=" p-2 border border-blue-200 hover:bg-blue-200">
                <p>Módulos Profesionales de Lengua</p>
                <p>
                  Extranjera LOGSE de ciclos formativos de Grado Superior, en
                  cualquiera de sus denominaciones, siempre que sea la misma que
                  la que se desea convalidar.
                </p>
              </td>
            </tr>
            <tr>
              <td className=" p-2 border border-blue-200 hover:bg-blue-200">
                <p>
                  Certificado del Ciclo Elemental, de Inglés, de la Escuela
                  Oficial de Idiomas.
                </p>
                <p>(RD 967/1988, de 2 de septiembre).</p>
              </td>
            </tr>
            <tr>
              <td className=" p-2 border border-blue-200 hover:bg-blue-200">
                <p>
                  Certificado de Nivel Intermedio (B1), de Inglés, de la Escuela
                  Oficial de Idiomas. (RD 1629/2006, de 29 de diciembre)
                </p>
              </td>
            </tr>
            <tr>
              <td className=" p-2 border border-blue-200 hover:bg-blue-200">
                <p>
                  Certificado de Aptitud de Inglés de la Escuela Oficial de
                  Idiomas.
                </p>
                <p>(RD 967/1988, de 2 de septiembre).</p>
              </td>
            </tr>
            <tr>
              <td className=" p-2 border border-blue-200 hover:bg-blue-200">
                <p>
                  Certificado de Nivel Avanzado (B2), o superior, de Inglés de
                  la Escuela Oficial de Idiomas.
                </p>
                <p>(RD 1629/2006, de 29 de diciembre).</p>
              </td>
            </tr>
            <tr>
              <td className=" p-2 border border-blue-200 hover:bg-blue-200">
                <p>Título de Grado, o equivalente, en Filología Inglesa.</p>
              </td>
            </tr>
            <tr>
              <td className=" p-2 border border-blue-200 hover:bg-blue-200">
                <p>
                  Título de Grado, o equivalente, en Traducción e Interpretación
                  (Inglés).
                </p>
              </td>
            </tr>
            <tr>
              <td className=" p-2 border border-blue-200 hover:bg-blue-200">
                <p>0179 Inglés.</p>
              </td>
            </tr>

            <tr>
              <th rowSpan="7" className="p-2  bg-blue-200">
                <p>0179 Inglés</p>
              </th>
              <td className="p-2 border border-blue-200 hover:bg-blue-200 ">
                <p>Lengua Extranjera LOGSE (Inglés).</p>
              </td>
            </tr>
            <tr>
              <td className=" p-2 border border-blue-200 hover:bg-blue-200">
                <p>
                  Lengua Extranjera (duración de 90 horas, según reales decretos
                  por los que se establecen los títulos de formación profesional
                  y sus enseñanzas mínimas)
                </p>
                <p>Cuando la lengua extranjera cursada y superada sea inglés</p>
              </td>
            </tr>
            <tr>
              <td className=" p-2 border border-blue-200 hover:bg-blue-200">
                <p>Lengua Extranjera en Comercio Internacional.</p>
                <p>
                  Cuando la lengua extranjera cursada y superada sea inglés.
                </p>
              </td>
            </tr>
            <tr>
              <td className=" p-2 border border-blue-200 hover:bg-blue-200">
                <p>
                  Certificado de Aptitud de Inglés de la Escuela Oficial de
                  Idiomas.
                </p>
                <p>(RD 967/1988, de 2 de septiembre).</p>
              </td>
            </tr>
            <tr>
              <td className=" p-2 border border-blue-200 hover:bg-blue-200">
                <p>
                  Certificado de Nivel Avanzado (B2), o superior, de Inglés de
                  la Escuela Oficial de Idiomas.
                </p>
                <p>(RD 1629/2006, de 29 de diciembre).</p>
              </td>
            </tr>
            <tr>
              <td className=" p-2 border border-blue-200 hover:bg-blue-200">
                <p>Título de Grado, o equivalente, en Filología Inglesa</p>
              </td>
            </tr>
            <tr>
              <td className=" p-2 border border-blue-200 hover:bg-blue-200">
                <p>
                  Título de Grado, o equivalente, en Traducción e Interpretación
                  (Inglés).
                </p>
              </td>
            </tr>
          </tbody>
        </table>

        <div className="flex flex-col gap-4 bg-yellow-50 p-10 rounded-2xl drop-shadow-md drop-shadow-black border-black border w-[90%] mx-[5%]">
          <div className="flex flex-row gap-4"><img src="https://www.juntadeandalucia.es/educacion/gestionafp/documentacion/Informacion_tutorial/icon_parasabermasfpd.png" alt="carta de hacienda" /><p className="self-center text-3xl text-amber-800 font-bold">Para saber más</p></div>
          <p className=" text-amber-800">Por tanto, no es posible, <span className="bg-yellow-300 underline">EN NINGÚN CASO</span>, convalidar este módulo por haber cursado una asignatura universitaria relativa a este idioma.</p>
        </div>
          
      </div>
    </>
  );
}