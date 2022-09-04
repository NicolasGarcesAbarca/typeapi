import express,{Request} from 'express'
import { prisma } from '../db/client';

const router = express.Router()

router.post('/',async (req,res)=>{
    const user=await prisma.user.create({
        data:{
            name:req.body.name,
            email:req.body.email,
        },
    })
    res.send('user created'+user.id);
})

router.get('/',async (_req,res)=>{
    const users=await prisma.user.findMany();
    res.send(users);
})

router.get('/:id',async (req: Request<{id:string}>,res)=>{
    const id = req.params.id;
    const user=await prisma.user.findUnique({
        where:{
            id:Number(id),
        }
    })
    if(user){
        res.send(user);
    }
    res.status(400).send('not found');
})
export default router