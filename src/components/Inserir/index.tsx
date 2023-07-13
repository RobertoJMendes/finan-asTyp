import { useState } from 'react'
//import React from 'react'
import './inserir.css'
import { Item } from '../../type/Item'
import { Categories } from '../../data/Categories'
import { SlLike } from 'react-icons/sl'
import { newDateAdj } from '../../helpers/dateFilters'

type Props = { onAdd: (item:Item) => void }

const inserir = ({onAdd}:Props) => {

  const categoriesKeys: string[] = Object.keys(Categories)

    const [dateField, setDateField] = useState('');
    const [categoryField, setCategoryField] = useState('');
    const [titleField, setTitleField] = useState('');
    const [valueField, setValueField] = useState(0);
  
  const handleAddEvent = () => {
    const errors: string[] = [];

    if(isNaN(new Date(dateField).getTime())) {
      errors.push('Data inválida!');
    }
    if(!categoriesKeys.includes(categoryField)) {
      errors.push('Categoria inválida!');
    }
    if(titleField === '') {
      errors.push('Título vazio!');
    }
    if(valueField < 0) {
      errors.push('Valor inválido!');
    }

    if(errors.length > 0) {
      alert(errors.join("\n"));
    } else {
      onAdd({
        date: newDateAdj(dateField),
        category: categoryField,
        title: titleField,
        value: valueField
      });
      clearFields();
    }
  }
    const clearFields = () => {
      setDateField('');
      setCategoryField('');
      setTitleField('');
      setValueField('');

      
  }
  return (
    <div className='inserir' >
      
      <div className="inputLabel">
        <div className="inputTitle">Data</div>
        <input  type="date" 
                value={dateField} 
                onChange={e => setDateField(e.target.value)} />
      </div>

      <div className="inputLabel">
        <div className="inputTitle">Categoria</div>
        <select value={categoryField} 
                onChange={e => setCategoryField(e.target.value)} >
          <>
            <option></option>
          {categoriesKeys.map((key,index) => (
            <option key={index} value={key}>{Categories[key].title}</option>
          ))}
          </>
        </select>
      </div>
      <div className="inputLabel">
          <div className="inputTitle">Titulo</div>
          <input  type="text"
                  value={titleField}
                  onChange={e => setTitleField(e.target.value)} />
      </div>
      <div className="inputLabel">
            <div className="inputTitle">Valor</div>
            <input  type="number"
                    value={valueField}
                    onChange={e => setValueField(parseFloat(e.target.value))} />
      </div>  
      <div className="inputLabel" id='ok'>
            <div className="inputTitle" id='adicionar'>Adicionar</div>
            <button onClick={handleAddEvent}><SlLike /> Ok!</button>
      </div>
    </div>
  )
}

export default inserir