import './styles.css'
import { Item } from '../../type/Item'
import { formatDate } from '../../helpers/dateFilters'
import { Categories } from '../../data/Categories'


type Props = {
  list: Item[]}

const AreaTable = ({list}:Props) => {
  return (
    <table>
        <thead className='areaTable'>
            <tr>
                <th style={{
                  color:"red",
                  textAlign:"start"    
                  }}>Data</th>
                <th style={{
                  textAlign:"start"
                  }}>Categoria</th>
                <th style={{
                  textAlign:"start"
                  }}>Título</th>
                <th style={{
                  textAlign:"end",
                  width:"300px",
                  padding: "0 3rem 0 0"
                  }}>Valor</th>
            </tr>
        </thead>
        <tbody>
          {list.map((item,index)=>(
            <tr key={index} >

            <td style={{
              width:"150px"
              }}>
                {formatDate(item.date)}
            </td>
            
            <td style={{
              width:"150px"
              }}><div style={{display:"inline-block",
                              padding:"5px 10px",
                              borderRadius:"5px",
                              color:"#fff",
                              backgroundColor:Categories[item.category].color
                            }}>
                {Categories[item.category].title}
              </div>
            </td>
            
            <td style={{
              width:'150px'
              }}><div>
                {item.title}

              </div>
            </td>
            
            <td style={{
              textAlign:'right',
              paddingRight:"3rem",
              width:"300px",
              color: Categories[item.category].expense ? 'red':'green'
              }}>
                R${item.value}
            </td>
            </tr>
            ))}
        </tbody>
    </table>
  )
}

export default AreaTable
/*
display:"inline-block",
                              padding:"5px 10px",
                              borderRadius:"5px",
                              color:"#fff",
                              backgroundColor:"red"
                              */