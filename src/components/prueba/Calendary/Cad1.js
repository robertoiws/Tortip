import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentWeekIndex, setCurrentWeekIndex] = useState(0);
  const [startDateOfWeek, setStartDateOfWeek] = useState(getStartOfWeek());

  // Definir el horario de servicio (lunes a viernes, de 9:00 a 17:00)
  const serviceHours = {
    start: 9,
    end: 17,
  };

  useEffect(() => {
    setStartDateOfWeek(getStartOfWeek());
  }, [currentWeekIndex]);

  // Función para obtener la fecha de inicio de la semana actual (lunes)
  function getStartOfWeek(weekIndex = 0) {
    const today = new Date();
    const dayOfWeek = today.getDay(); // 0 (Domingo) a 6 (Sábado)
    const diff = -dayOfWeek + 1 + weekIndex * 7; // Ajuste según el índice de la semana
    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() + diff);
    return startOfWeek.toISOString().split("T")[0];
  }
  // Función para obtener los días de la semana actual (lunes a domingo)
  function getDaysOfWeek(startDate) {
    const days = [];
    const currentDate = new Date(startDate);
    for (let i = 0; i < 7; i++) {
      days.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return days;
  }

  // Generar los horarios disponibles dentro del horario de servicio
  function generateAvailableAppointments() {
    const availableAppointments = [];
    const daysOfWeek = getDaysOfWeek(startDateOfWeek);
    const today = new Date(); // Obtener la fecha actual
    const currentHour = today.getHours(); // Obtener la hora actual
    const currentMinute = today.getMinutes(); // Obtener el minuto actual

    daysOfWeek.forEach((day, index) => {
      const formattedDate = day.toISOString().split("T")[0];
      const appointments = [];
      if (
        day > today ||
        (day.getDate() === today.getDate() && currentHour < serviceHours.end)
      ) {
        let startHour = serviceHours.start;
        if (day.getDate() === today.getDate()) {
          // Si es el mismo día que hoy, comenzar desde la próxima hora después de la hora actual
          startHour = currentHour + 1;
          if (currentMinute >= 0 && currentMinute <= 30) {
            appointments.push(`${currentHour.toString().padStart(2, "0")}:30`);
          }
        }
        for (let hour = startHour; hour < serviceHours.end; hour++) {
          appointments.push(`${hour.toString().padStart(2, "0")}:00`);
          appointments.push(`${hour.toString().padStart(2, "0")}:30`);
        }
      }
      availableAppointments.push({ date: formattedDate, appointments });
    });
    return availableAppointments;
  }

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const handleNextWeek = () => {
    setCurrentWeekIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrevWeek = () => {
    if (currentWeekIndex !== 0) {
      setCurrentWeekIndex((prevIndex) => prevIndex - 1);
    }
  };

  const renderDateButtons = () => {
    const availableAppointments = generateAvailableAppointments();
    const daysOfWeek = getDaysOfWeek(startDateOfWeek);
    const dayNames = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"];

    return daysOfWeek.map((day, index) => {
      const formattedDate = day.toISOString().split("T")[0];
      const dayName = dayNames[index];
      const appointmentsForDay = availableAppointments.find(
        (item) => item.date === formattedDate
      );

      return (
        <div key={index} className="mx-2 mb-3">
          <h5 className="mb-0">{dayName}</h5>
          <h6 className="mb-0">{formattedDate}</h6>
          <ul className="list-unstyled mt-3">
            {appointmentsForDay &&
              appointmentsForDay.appointments.map((appointment, i) => (
                <li key={i}>
                  <button
                    className="btn btn-primary w-100 mt-2"
                    onClick={() => handleDateSelect(formattedDate)}
                  >
                    {appointment}
                  </button>
                </li>
              ))}
          </ul>
        </div>
      );
    });
  };

  return (
    <div className="calendar">
      <h2 className="text-center">Calendario</h2>
      <div className="d-flex flex-wrap justify-content-center">
        {renderDateButtons()}
      </div>
      <div className="text-center mt-3">
        {selectedDate && (
          <p className="mt-2">Fecha seleccionada: {selectedDate}</p>
        )}
      </div>
      <div className="text-center mt-3">
        <button className="btn btn-link" onClick={handlePrevWeek}>
          {"< Semana Anterior"}
        </button>
        <button className="btn btn-link" onClick={handleNextWeek}>
          {"Siguiente Semana >"}
        </button>
      </div>
    </div>
  );
};

export default Calendar;
