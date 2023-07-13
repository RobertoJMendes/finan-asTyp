//import React from 'react'

import "./infoArea.css"
import { PiArrowFatLinesRightBold,PiArrowFatLinesLeftBold } from 'react-icons/pi'
import { formatCurrentMonth } from "../../helpers/dateFilters"
import Resume from "../Resume"

type Props = {
  currentMonth:string
  onMonthChange: (newMonth:string) => void
  incomeRenda: number
  expense: number
}

const InfoArea = ({currentMonth,onMonthChange,incomeRenda,expense}:Props) => {
  const handleAnteriorMonth = () => {
    const [year,month] = currentMonth.split('-')
    const currentDate = new Date (parseInt(year), parseInt(month)-1, 1)
    currentDate.setMonth( currentDate.getMonth()-1)
    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth()+1}`)
  }
  const handleProximoMonth = () => {
    const [year,month] = currentMonth.split('-')
    const currentDate = new Date (parseInt(year), parseInt(month)-1, 1)
    currentDate.setMonth( currentDate.getMonth()+1)
    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth()+1}`)
  }

  return (
    <div className="infoArea">
      <div className="monthArea">
        
        <div className="monthArrow" id="frechaEsq"
        onClick={handleAnteriorMonth}>
        <PiArrowFatLinesLeftBold />
        </div>
        
        <div className="monthTitle">{formatCurrentMonth(currentMonth)}</div>
        
        <div className="monthArrow" id="frechaDir"
        onClick={handleProximoMonth}>
        <PiArrowFatLinesRightBold />
        </div>
      </div>
      
      <div className="resumeArea">
        <Resume title="Receitas" value={incomeRenda}/>
        <Resume title="Despesas" value={expense}/>
        
        <Resume 
        title="Balanço" 
        value={incomeRenda-expense}
        />
        
      </div>
    </div>
  )
}
export default InfoArea