import Titulo from "@/components/titulo";
import Nav from "@/components/nav";
import ItemLista from "@/components/item-lista";

export const metadata = {
  title:
    "1.2.2.- Condiciones para convalidar Empresa e Iniciativa Emprendedora",
};

export default function Home() {
  return (
    <>
      <Titulo> {metadata.title} </Titulo>
      <Nav pos={7} />

      <div className="flex flex-col gap-4">
        <p>
          Para poder convalidar el módulo de <b>Empresa e Iniciativa Emprendedora</b>
          es necesario acreditar alguna de las siguientes condiciones:
        </p>

        <ItemLista>
          Tener <b>aprobado el módulo de Empresa e Iniciativa Emprendedora de otro
          ciclo formativo,</b> cualquiera que sea el grado, incluso en grados
          cruzados -medio o superior-.
        </ItemLista>
        <ItemLista>
          Tener <b>aprobado el módulo de Administración, gestión y comercialización
          en la pequeña empresa</b> (o con una denominación similar).
        </ItemLista>
        <ItemLista>
          <b>Poseer el Título de Técnico en Gestión administrativa o Técnico
          superior en Administración y finanzas.</b>
        </ItemLista>

        <table className=" mx-[10%] w-[80%] border-separate">
          <thead>
            <tr>
              <th className="p-2 bg-blue-200">Modulo a convalidar</th>
              <th className="p-2 w-[60%] bg-blue-200">Formación a aportar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th rowSpan="15" className="p-2  bg-blue-200">
                <p>Empresa e Iniciativa Emprendedora.</p>
                <p>(Cualquier ciclo formativo)</p>
              </th>
              <td className="p-2 border border-blue-200 hover:bg-blue-200 ">
                <p>
                  Administración, gestión y comercialización en la pequeña
                  empresa.
                </p>
                <p>(Cualquier ciclo formativo)</p>
              </td>
            </tr>
            <tr>
              <td className=" p-2 border border-blue-200 hover:bg-blue-200">
                <p>
                  Administración y gestión de un pequeño establecimiento
                  comercial.
                </p>
                <p>Ciclo Comercio. (Comercio y Marketing)</p>
              </td>
            </tr>
            <tr>
              <td className=" p-2 border border-blue-200 hover:bg-blue-200">
                <p>
                  Organización y gestión de una explotación agraria familiar
                </p>
                <p>
                  Ciclo Trabajos Forestales y de Conservación del Medio Natural.
                  (RD 1713/1996, de 12 de julio). (Agraria)
                </p>
                <p>
                  Ciclo Jardinería. (RD 1714/1996, de 12 de julio). (Agraria)
                </p>
                <p>
                  Ciclo Explotaciones Agrarias Extensivas. (RD 1715/1996, de 12
                  de julio) (Agraria)
                </p>
                <p>
                  Ciclo Explotaciones Agrícolas Intensivas. (RD 1716/1996, de 12
                  de julio). (Agraria)
                </p>
                <p>
                  Ciclo Explotaciones Ganaderas. (RD 1717/1996, de 12 de julio).
                  (Agraria)
                </p>
              </td>
            </tr>
            <tr>
              <td className="p-2 border border-blue-200 hover:bg-blue-200">
                <p>
                  Ciclo completo de Gestión administrativa. (RD 1662/1994, de 22
                  de julio). (Administración y Gestión)
                </p>
              </td>
            </tr>
            <tr>
              <td className="p-2 border border-blue-200 hover:bg-blue-200">
                <p>
                  Administración, gestión y comercialización en la pequeña
                  empresa.(Cualquier ciclo formativo)
                </p>
              </td>
            </tr>
            <tr>
              <td className="p-2 border border-blue-200 hover:bg-blue-200">
                <p>
                  Organización y gestión de una pequeña empresa de actividades
                  de tiempo libre y socioeducativas.
                </p>
                <p>
                  Ciclo Animación Sociocultural. (Servicios Socioculturales y a
                  la Comunidad)
                </p>
                <p>
                  Ciclo Animación de Actividades Físicas y Deportivas.
                  (Actividades Físicas y Deportivas)
                </p>
                <p>Ciclo Animación Turística. (Hostelería y Turismo)</p>
              </td>
            </tr>
            <tr>
              <td className="p-2 border border-blue-200 hover:bg-blue-200">
                <p>Organización y control en agencias de viajes. </p>
                <p> Ciclo Agencias de Viajes. (Hostelería y Turismo)</p>
              </td>
            </tr>

            <tr>
              <td className="p-2 border border-blue-200 hover:bg-blue-200">
                <p>Administración de establecimientos de restauración. </p>
                <p>Ciclo Restauración. (Hostelería y Turismo)</p>
              </td>
            </tr>
            <tr>
              <td className="p-2 border border-blue-200 hover:bg-blue-200">
                <p>
                  Administración y gestión de una unidad/gabinete de
                  Ortoprotésica.
                </p>
                <p>Ciclo Ortoprotésica. (Sanidad)</p>
              </td>
            </tr>
            <tr>
              <td className="p-2 border border-blue-200 hover:bg-blue-200">
                <p>
                  Organización, administración y gestión de una unidad/gabinete
                  de prótesis dentales.
                </p>
                <p>Ciclo Prótesis Dentales. (Sanidad)</p>
              </td>
            </tr>
            <tr>
              <td className="p-2 border border-blue-200 hover:bg-blue-200">
                <p>Administración y gestión de un gabinete audioprotésico.</p>
                <p>Ciclo Audioprótesis. (Sanidad)</p>
              </td>
            </tr>
            <tr>
              <td className="p-2 border border-blue-200 hover:bg-blue-200">
                <p>Organización y gestión de una empresa agraria.</p>
                <p>
                  Ciclo Gestión y Organización de los Recursos Naturales y
                  Paisajísticos. (Agraria) Ciclo Gestión y Organización de
                  Empresas Agropecuarias. (Agraria)
                </p>
              </td>
            </tr>
            <tr>
              <td className="p-2 border border-blue-200 hover:bg-blue-200">
                <p>Ciclo completo de Administración y finanzas.</p>
                <p>
                  (RD 1659/1994, de 22 de julio). (Administración y Gestión)
                </p>
              </td>
            </tr>
            <tr>
              <td className="p-2 border border-blue-200 hover:bg-blue-200">
                <p>Técnico en Gestión Administrativa LOE. Ciclo completo</p>
              </td>
            </tr>
            <tr>
              <td className="p-2 border border-blue-200 hover:bg-blue-200">
                <p>
                  Técnico en Superior en Administración y Finanzas LOE. Ciclo
                  completo
                </p>
              </td>
            </tr>

            <tr>
              <th className="p-2  bg-blue-200">
                0402. Empresa e iniciativa emprendedora.
              </th>
              <td className="p-2 border border-blue-200 hover:bg-blue-200 ">
                <p>Gestión económico-administrativa en agencias de viajes.</p>
                <p>Organización y control en agencias de viajes.</p>
              </td>
            </tr>

            <tr>
              <th className="p-2  bg-blue-200">
                0402. Empresa e iniciativa emprendedora.
              </th>
              <td className="p-2 border border-blue-200 hover:bg-blue-200 ">
                <p>Organización, administración y gestión de una unidad/gabinete de prótesis dentales.</p>
              </td>
            </tr>


            <tr>
              <th className="p-2  bg-blue-200">
              <p>Empresa e Iniciativa Emprendedora.</p>
              <p>(Cualquier ciclo formativo LOE)</p>
              </th>
              <td className="p-2 border border-blue-200 hover:bg-blue-200 ">
                <p>Empresa e Iniciativa Emprendedora.</p>
                <p>(Cualquier ciclo formativo LOE)</p>
              </td>
            </tr>


          </tbody>
        </table>
      </div>
    </>
  );
}
