import { ImageModel } from '../models/image.js';

export function imageHandle(){
  return async (req,res,next) => {
    const { image_path } = req.body;
    try{
      const result = await ImageModel.findOne( { image_path });
      console.log(result)
      if(!result.isFound){
        const { image_id } = await ImageModel.create({input: req.body});
        req.body.image_id = image_id;
      }else{
        
        req.body.image_id = result.image_id;
      }
      next();
    }catch(err){
      res.status(404).json({... err})
    }
  }
}