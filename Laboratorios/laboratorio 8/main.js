let carnet_field = document.querySelector("#carnet_field");
let schedule_opcions = document.querySelector("#schedule_field");
let late_switch = document.querySelector("#late_switch");
let submit_btn = document.querySelector("#submit_btn");
let tbody = document.querySelector("#table_body");

let carnet_regex = new RegExp("^[0-9]{8}$");

let student_list = [];
let serial = 0;

let printArray = ()=>{

    tbody.innerHTML = ""

    student_list.forEach(elem=>{

        let new_row = document.createElement("tr");
        let datetime = new Date();
    
        let new_cell = document.createElement("td")
        let new_btn = document.createElement("button")

        // tarea 
        let new_confirm = document.createElement("td")
        let new_text = document.createElement("textarea")
        

    
        new_row.classList.add("table-active");
        new_row.innerHTML = `<td>${elem.carnet}</td>
        <td>${elem.horario}</td>
        <td>${datetime.toLocaleString()}</td>
        <td>${elem.tarde}</td>`
    
    /* personalizacion de boton */

        new_btn.className = "btn btn-danger"
        new_btn.innerHTML = "Borrar"
        new_btn.value = elem.id
        new_btn.disabled = true
    
        new_btn.addEventListener("click",event=>{
            let id_actual = event.target.value
            
            if(new_text.value == elem.carnet){


            student_list.forEach((elem, pos)=>{
                if(id_actual == elem.id){
                    student_list.splice(pos, 1)
                    printArray()
                }
            })
        }
        })

        new_text.addEventListener("keyup",()=>{
            if(elem.carnet == new_text.value){
                new_btn.disabled = false
            }else{
                new_btn.disabled = true
            }
        })
        
        new_confirm.appendChild(new_text)
        new_cell.appendChild(new_btn)
        new_row.appendChild(new_cell)
        new_row.appendChild(new_confirm)
        tbody.appendChild(new_row)

    })

}

let addStudent = (carnet,schedule,later)=>{

    student_list.push({
        "id" : serial,
        "carnet" : carnet,
        "horario" : schedule,
        "tarde" : later
    })
    serial++
}

let parseLatebool = (value)=>{
    if(value){
        return "llego tarde"
    }else{
        return "todo bien"
    }
}

submit_btn.addEventListener("click",()=>{
    let carnet = carnet_field.value
    let schedule = schedule_opcions.options[schedule_opcions.selectedIndex].text
    let late = parseLatebool(late_switch.checked)

    if(carnet_regex.test(carnet)) {
        addStudent(carnet,schedule,late)
        printArray()
    }else{
        alert("Parce Escriba Bien Su Carnet")
    }
})

carnet_field.addEventListener("keyup", (event)=>{
    let keyCode = event.keyCode
    let carnet = carnet_field.value

    if(keyCode == 13){
        submit_btn.click()
    }

    if(carnet_regex.test(carnet)){
    submit_btn.disabled = false; 
    }else{
        submit_btn.disabled = true; 
    }
})