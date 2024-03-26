import React from "react";
import CalendarioServicio from "./Table.js"; // Asegúrate de tener el componente CalendarioServicio en el mismo directorio

const Citas = () => {
  // Datos de ejemplo de tu JSON
  const cita = {
    guidId: "2",
    HorarioInicio: "09:00",
    HorarioFin: "14:00",
    DiasTrabajar: "Lunes-Martes-Jueves-Viernes",
    DiasNoLaborales: "Sábado-Domingo",
    TiempoCita: 90,
    FechasRegistro: "",
    FechaActualizacion: "",
    Estado: 1,
  };

  return (
    <div>
      <CalendarioServicio
        horarioInicio={cita.HorarioInicio}
        horarioFin={cita.HorarioFin}
        diasLaborales={cita.DiasTrabajar}
        tiempoCita={cita.TiempoCita}
      />
    </div>
  );
};

export default Citas;
