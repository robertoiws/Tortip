import React from "react";
import { Container, Table, Button } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CalendarioServicio = ({
  horarioInicio,
  horarioFin,
  diasLaborales,
  tiempoCita,
}) => {
  const generateTimeSlots = (start, end, tiempoCita) => {
    const timeSlots = [];
    let currentTime = new Date(`2022-01-01T${start}:00`);

    while (currentTime <= new Date(`2022-01-01T${end}:00`)) {
      timeSlots.push(
        currentTime.toLocaleTimeString("es-MX", {
          hour: "numeric",
          minute: "2-digit",
        })
      );
      currentTime = new Date(currentTime.getTime() + tiempoCita * 60000);
    }

    return timeSlots;
  };

  const timeSlots = generateTimeSlots(horarioInicio, horarioFin, tiempoCita);

  const diasArray = diasLaborales.split("-");

  // Obtener la fecha actual
  const currentDate = new Date();
  const currentDay = currentDate.getDay(); // Domingo: 0, Lunes: 1, ..., Sábado: 6

  // Obtener las fechas de la semana actual desde el día actual
  const weekDates = [];
  let currentDayIndex = currentDay;
  for (let i = 0; i < 7; i++) {
    const date = new Date();
    date.setDate(date.getDate() + (i - currentDayIndex));
    if (i >= currentDayIndex) {
      // Solo agregar las fechas a partir del día actual
      weekDates.push(
        date.toLocaleDateString("es-ES", {
          weekday: "short",
          day: "numeric",
          month: "short",
        })
      );
    }
  }

  // Configuración del carrusel
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Container>
      <h2>Calendario de Servicio</h2>
      <Slider {...settings}>
        {weekDates.map((date, index) => (
          <div key={index}>
            <Table striped bordered hover>
              <thead>
                <tr>
                  {diasArray.map((dia, index) => (
                    <th key={index}>{dia}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td
                    colSpan={diasArray.length}
                    style={{ textAlign: "center", fontWeight: "norml" }}
                  ></td>
                </tr>
                {timeSlots.map((time, index) => (
                  <tr key={index}>
                    {diasArray.map((dia, index) => (
                      <td key={index}>
                        <Button variant="primary">{time}</Button>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        ))}
      </Slider>
    </Container>
  );
};

export default CalendarioServicio;
