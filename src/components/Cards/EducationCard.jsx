const EducationCard = ({ img, nombre, carrer, date }) => {
  return (
    <div className="flex items-center gap-4 p-4 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      {/* Imagen */}
      <div className="w-16 h-16 flex-shrink-0 bg-white p-2 rounded-lg">
        <img
          src={img}
          alt={nombre}
          className="w-full h-full object-contain rounded-md"
        />
      </div>
      {/* Información */}
      <div className="flex items-center justify-between w-full">
        <div>
          <h3 className="text-lg font-semibold">{nombre}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">{carrer}</p>
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400 italic">{date}</p>
      </div>
    </div>
  );
};

export default EducationCard;