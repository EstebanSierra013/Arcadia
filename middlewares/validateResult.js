import { fromError } from 'zod-validation-error';

export function validateData(schema) {
  return (req,res,next) => {
    try {
      schema.parse(req.body);
      next();
    } catch (error) {
      const validationError = fromError(error);
      res.status(422).json(validationError.toString());
    }
  };
}