import { useState } from 'react'

import Message from './Message'

const BudgetControl = ({ budget, setBudget }) => {
  
  const [ message, setMessage ] = useState('')


  const handleBudget = e => {
    e.preventDefault()

    if (!Number(budget) || Number(budget)) {
      setMessage('No es un presupuesto válido')
    } else {
      setMessage('Si es un presupuesto válido')
    }

  }
  
  return (
    <div className="contenedor-presupuesto contenedor sombra">
      
      <form onSubmit={handleBudget} className="formulario">
        <div className="campo">
          <label htmlFor="">Definir Presupuesto</label>

          <input 
            type="text" 
            className="nuevo-presupuesto" 
            placeholder="Añade tu Presupuesto"
            value={budget}
            onChange={ e => setBudget(e.target.value) }
          />
        </div>

        <input type="submit" value="Añadir" />

        {
          message && <Message tipe='error'>{message}</Message>
        }

      </form>
    </div>
  )
}

export default BudgetControl