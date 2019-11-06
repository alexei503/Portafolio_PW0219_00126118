const Register = require("../models/register")

const insert = (req,res)=>{
    let register = new register(req.body);    
    register.save((err)=>{
        if(err) return res.status(500).json({
            message: 'algo salio mal al tratar de insetar un register'
        })
        res.status(200).json({
            message:'insercion de Register exitosa'
        })
    })
};

const update = (req,res)=>{

    let register = req.body

    if(!register._id){
        return res.status(400).json({
            message: 'el campo id es obligatorio'
        })

    }
    register.update({_id: register,_id},register)
    .then(value=>{
        res.status(200).json({
            message: 'Operacion de modificar exitosa'
        })

    })
    .catch(err=>{
        res.status(500).json({
            message: 'algo salio mal en la operacion modificar'
        })
    })    
}

const deleteById = (req, res)=>{
    
    let register = req.body
    if(!register._id){
        return res.status(400).json({
            message: 'el campo id es obligatorio'
        })
    }
    register.deleteone({_id: register,_id})
    .then(value=>{
        res.status(200).json({
            message: 'Operacion eliminar exitosa'
        })

    })
    .catch(err=>{
        res.status(500).json({
            message: 'algo salio mal en la operacion eliminar'
        })
    })
}

const getAll = (req,res)=>{
    register.find((err,register)=>{
        if(err) return res.status(500).json({
            message: 'algo salio mal al seleccionar todos'
        })
        if(register){
            res.status(200).json(register)
        }
        else{
            res.status(404).json({
                message: 'no hay ningun registro'
            })
        }
    })
}

const getOneById = (req,res)=>{
    let id = req.params._id

    register.findById(id,(err,register)=>{
        if(err) return res.status(500).json({
            message: 'algo salio mal al seleccionar uno'
        })
        if(register){
            res.status(200).json(register)
        }else{
            res.status(404).json({
                message: 'no se encontro el registro solicitado'
            })
        }
    })
}


module.exports = {
    insert,
    update,
    deleteById,
    getAll,
    getOneById
}