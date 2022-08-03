import express from 'express';
import diaryRouter from './routes/diaries';

const app=express();
app.use(express.json());
const PORT=process.env.PORT || 3000;

app.use('/api/diaries',diaryRouter);

app.get('/ping',(_req,res)=>{
    res.send('pong')
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})