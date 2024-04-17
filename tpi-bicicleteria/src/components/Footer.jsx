const Footer = ({ cambiarPag }) => {
 
  return (
    <footer className="footer">
      <button onClick={cambiarPag}>
        Cambiar de pagina
      </button>
    </footer>
  )
}

export default Footer