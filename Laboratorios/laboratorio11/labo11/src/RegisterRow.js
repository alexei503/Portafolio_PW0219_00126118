import React,{Component} from "react"

class RegisterRow extends Component{
    render(){
        let student = this.props.student;
        return(
            <tr className="table-active">
            <th scope="row">{student.carnet}</th>
            <td>{student.carnet}</td>
            <td>{new Date(student.carnet).toLocaleDateString}</td>
            <td>{parselate(student.isLate)}</td>
            <td>
                <button
                    type="button"
                    className="btn btn-danger"
                    onClick ={()=>{
                        this.props.onDelete();
                    }}
                    Drop
                />
            </td>

            </tr>
        );
    }
}
const parselate = value =>{
    if(value){
        return "Tardisimo";
    }
    return "A tiempo"
}

export default RegisterRow;