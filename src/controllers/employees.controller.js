import { pool } from '../db.js'

export const getEmployee = async (req, res) => {
    try {
        var [response] = await pool.query('SELECT * FROM employee')        
        res.send(response)
    } catch (error) {
        return res.status(500).json({ mensaje: 'Algo fue mal al listar los empleados' })
    }
};

export const createEmployee = async (req, res) => {
    try {
        const {name, salary} = req.body
        const [response] = await pool.query('INSERT INTO employee (name, salary) VALUES (?, ?)', [name, salary])
        res.send({
            id: response.insertId,
            name, 
            salary,
        })        
    } catch (error) {
        return res.status(500).json({ mensaje: 'Algo fue mal al crear el empleado' })        
    }
};

export const getEmployeeById = async (req, res) => {
    try {
        const [response] = await pool.query('SELECT * FROM employee WHERE id = ?', [req.params.id])
        if(response.length == 0){
            return res.status(404).json({ mensaje: 'Empleado no encontrado' })
        }
        res.send(response)        
    } catch (error) {
        return res.status(500).json({ mensaje: 'Algo fue mal al obtener el empleado' })                
    }
};

export const updateEmployee = async (req, res) => {
    try {
        const { id } = req.params
        const {name, salary} = req.body
        const [result] = await pool.query('UPDATE employee SET name=IFNULL(?, name), salary=IFNULL(?, salary) WHERE id=?', [name, salary, id])
        if(result.affectedRows == 0) res.status(404).json({ mensaje: 'No se realizo la actualizacion' })
            res.status(200).json({ mensaje: 'Empleado actualizado correctamente' })        
    } catch (error) {
        return res.status(500).json({ mensaje: 'Algo fue mal al actualizar el empleado' })                        
    }
};

export const deleteEmployee = async (req, res) => {
    try {
        const id = req.params.id
        const [resultado] = await pool.query('DELETE FROM employee WHERE id = ?', [id])
        if(resultado.affectedRows == 0){
            res.status(404).json({ mensaje: 'No se elimino ningun registro' })
        }
        res.status(200).json({ mensaje: 'Empleado eliminado correctamente' })        
    } catch (error) {
        return res.status(500).json({ mensaje: 'Algo fue mal al eliminar el empleado' })        
    }

};