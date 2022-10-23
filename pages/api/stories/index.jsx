import nc from 'next-connect'
import data from '../../../model/Story'
import db from '../../../utils/DB'


const handler = nc();

handler.get(async (req, res) => {
    await db()
    const stories = await data.find({})

    res.json(stories)
})

export default handler


// handler.get(async(req,res) =>(
//     res.status(200).json(data)
// ))
// handler.post(async(req,res) =>{
//     const data =req.body
//    return res.status(200).json(
//        {data}
//  )
// }) 

