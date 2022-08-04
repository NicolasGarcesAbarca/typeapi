import express from 'express'
import { getAllDiaries } from '../services/diariesServices'

const router = express.Router()



router.get('/',async (_req,res)=>{
    const result= await getAllDiaries()
    console.log(result)
    res.send(result)
}
)

router.post('/',(_req,res)=>{
    res.send('creating a new diary')
}
)

export default router
