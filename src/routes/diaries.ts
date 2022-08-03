import express from 'express'

const router = express.Router()

router.get('/',(_req,res)=>{
    res.send('fetching all')
}
)

router.post('/',(_req,res)=>{
    res.send('creating a new diary')
}
)

export default router
