import { useState, useEffect } from 'react'

import { Item } from './type/Item'
import { Category } from './type/Category'

import { itens } from './data/itens'
import { Categories } from './data/Categories'

import { getCurrentMonth, filterListByMonth } from './helpers/dateFilters'

import AreaTable from './components/AreaTable'
import InfoArea from './components/InfoArea'
import Inserir from './components/Inserir'

import './App.css'

function App() {
  
  const [list, setList] = useState<Item[]>(itens);
  const [filterList, setFilterList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  // currentMonth -> mês atual
  const [incomeRenda, setIncomeRenda] = useState<number>(0)
  const [expense, setExpense] = useState(0)
  useEffect(() => {

    setFilterList(filterListByMonth(list,currentMonth))

  },[list,currentMonth] ) // Este useEffect vai "monitorar" estes dois elementos do array, quando um deles sofrer alteração será filtrado novamente.
  
  useEffect(() => {
    let incomeREndaConta = 0
    let expenseConta  = 0

    for (const i in filterList){
      if ( Categories[filterList[i].category].expense){
        expenseConta += filterList[i].value;
      }else{
        incomeREndaConta += filterList[i].value;
      }
    }
    setIncomeRenda(incomeREndaConta)
    setExpense(expenseConta)
  },[filterList])

  const handleMonthChange = (newMonth:string) => {
    setCurrentMonth(newMonth)
  }  

  const handleAdd = (item: Item) => {
    const newList = [...list]
    newList.push(item)
    setList(newList)
    
  }
  return (
    <>
      <div>

      <div className="header">

        <div className='headerText'>Sistema Financeiro</div>

      </div>
        
        <div className="body">
          {/* área de informação */}
          <InfoArea 
          incomeRenda = {incomeRenda}
          expense = {expense}
          onMonthChange = {handleMonthChange}
          currentMonth = {currentMonth} />          
          {/* área de inserção */}
          <Inserir onAdd={handleAdd} />
          
          {/* tabela de itens */}
          <AreaTable list={filterList} />
        </div>
      
      
      </div>
        
    </>
  )
}

export default App
