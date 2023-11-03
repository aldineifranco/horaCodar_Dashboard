import { Container, Formulario } from "./styles";

export function Info() {
  const diasSemana = [
    {
      id: 1,
      dia: "Segunda",
    },
    {
      id: 2,
      dia: "Terça",
    },
    {
      id: 3,
      dia: "Quarta",
    },
    {
      id: 4,
      dia: "Quinta",
    },
    {
      id: 5,
      dia: "Sexta",
    },
    {
      id: 6,
      dia: "Sábado",
    },
    {
      id: 7,
      dia: "Domingo",
    },
  ]

  return (
    <Container>
      <div>
        <h1>Dias da Semana</h1>

        <Formulario>
          {
            diasSemana.map((dia) => {
              return (
                <div>
                  <label htmlFor="" key={dia.id}>
                    {dia.dia}:
                  </label>
                  <input type="text" />
                </div>
             
              )
            })
          }
        </Formulario>
      </div>
    </Container>
  )
}