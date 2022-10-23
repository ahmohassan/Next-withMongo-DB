import nc from 'next-connect'
import data from '../../../utils/stories'

const handler = nc();

handler.put(async(req,res) =>(
    res.status(200).json(data)
))
handler.delete(async(req,res) =>(
    res.status(200).json({ name: 'John Doe' })
))

export default handler
