const Card = ({ imagen, titulo, precio, descripcion}) => {
  return (
    <div className="card">
      <img className="imagen" src={imagen} />
      <p className="titulo">{titulo}</p>
      <p className="precio">${precio}</p>
      <p className="desc">{descripcion}</p>
    </div>
  )
}

export default Card