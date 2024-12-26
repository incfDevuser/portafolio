import React from "react";

const CertificationsCard = ({ nombre, date, institution, img }) => {
  return (
    <div className="flex items-center rounded-lg shadow-md p-4 gap-4 relative">
      {/* Imagen a la izquierda */}
      <img
        src={img}
        alt={nombre}
        className="w-16 h-16 object-cover rounded-lg"
      />
      {/* Contenido principal */}
      <div className="flex-1">
        <h3 className="font-semibold text-white text-lg">{nombre}</h3>
        <p className="text-gray-400 text-sm">{institution}</p>
      </div>
      {/* Fecha alineada a la derecha */}
      <span className="absolute top-4 right-4 text-gray-500 text-xs">{date}</span>
    </div>
  );
};

export default CertificationsCard;