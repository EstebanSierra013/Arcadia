import { fromError } from 'zod-validation-error';

export function validateData(schema) {
  return (req,res,next) => {
    try {      
      req.body = schema.parse(req.body);      
      next();
    } catch (err) {
      const validationError = fromError(err);
      res.status(422).json(validationError.toString());
    }
  };
}