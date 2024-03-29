import type { NextApiResponse } from "next" 
import auth from "../../../utils/auth"
import connectDB from "../../../utils/dababase"
import { ItemModel } from "../../../utils/schemaModels"
import { ExtendedNextApiRequestItem, ResMessageType } from "../../../utils/types"

const createItem = async(req: ExtendedNextApiRequestItem, res: NextApiResponse<ResMessageType>) => {
    try{
        await connectDB()

        let inputItem = req.body

        let item = new ItemModel(inputItem)
        item.save()

        // await item.save();

        return res.status(200).json({message: "アイテム作成成功"})
    }catch(err){
        return res.status(400).json({message: `アイテム作成失敗: ${err.message}`})
    }
}
  
export default auth(createItem)