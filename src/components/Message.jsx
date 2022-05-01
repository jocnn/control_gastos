const Message = ({ children, tipe }) => {
  return (
    <div className={`alerta ${tipe}`}>
      {children}
    </div>
  )
}

export default Message