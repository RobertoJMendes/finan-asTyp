// Toda consulta e/ou manipulação relacionado a datas, fica neste arquivo.
import { Item } from '../type/Item';

  
export const getCurrentMonth = () => {
    const now = new Date()
    return `${now.getFullYear()}-${now.getMonth()+1}`
} 

export const filterListByMonth = (list: Item[], date:string):Item[] =>{
    const newList: Item[] = []
    const [year,month] = date.split('-')

    for(const i in list){
        if(
            list [i].date.getFullYear() === parseInt(year) 
            &&
            (list[i].date.getMonth()+1) === parseInt(month)
        ){
            newList.push(list[i])
        }
    }
    return newList
}

export const formatDate = (date:Date):string  => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const day = date.getDate()
    return `${addZeroToDate(day)}/${addZeroToDate(month)}/${year}`

}
const addZeroToDate = (n:number):string => {
    if (n<10){
        return `0${n}`
    } else {
        return `${n}`
    }
// ou -> addZeroToDate = (n:number):string => n<10 ? `0${n}` : `${n}`
}
export const formatCurrentMonth = (currentMonth:string):string => {
    const [year,month] = currentMonth.split('-')
    const months = [
    'Janeiro',"Fevereiro",'Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'
]
    return `${months[parseInt(month)-1]} de ${year}`
}

export const newDateAdj = ( dateField:string ) => {
    let [year, month, day] = dateField.split('-')
    return new Date(parseInt(year), parseInt(month)-1, parseInt(day))
}