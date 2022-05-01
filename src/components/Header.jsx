import BudgetControl from './BudgetControl'

const Header = ({ budget, setBudget }) => {
  return (
    <header>
      <h1>Planificador de Gastos</h1>

      <BudgetControl 
        budget={budget}
        setBudget={setBudget}
      />
    </header>
  )
}

export default Header