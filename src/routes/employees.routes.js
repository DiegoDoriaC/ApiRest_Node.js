import { Router } from "express";
import { getEmployee, getEmployeeById, createEmployee, updateEmployee, deleteEmployee } from '../controllers/employees.controller.js'

const router = Router()

router.get('/employees', getEmployee );
router.get('/employees/:id', getEmployeeById );
router.post('/employees', createEmployee );
router.patch('/employees/:id', updateEmployee );
router.delete('/employees/:id', deleteEmployee );

export default router