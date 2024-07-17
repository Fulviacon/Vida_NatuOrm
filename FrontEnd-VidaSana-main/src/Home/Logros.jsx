const LogrosContenidos = ({ title, description, imageUrl }) => {
  return (
    <div className="logros-contenidos">
      <img src={imageUrl} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default LogrosContenidos;


