function Table(props) {
    console.log(props)
    return(
        
        <tr key={props.id}>
            <td>{props.quant}</td>
            <td>{props.name}</td>
            <td>{props.colours}</td>
            <td>{props.typeline}</td>

        </tr>
    )
  }

export default Table