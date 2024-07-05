import z from "zod"

const serviceSchema = z.object({
  name: z.string({
    required_error: "Nom est requis",
    invalid_type_error: "Nom dois etre un string",
  }),
  description: z.string(),
  schedule: z.string().time(),
  duration: z.string().duration(),
  image_id: z.number().positive()
})


const userSchema = z.object({
  username: z.string().email(),
  password: z.string(),
  name: z.string(),
  lastname: z.string(),
  rol: z.number()
})

const habitatSchema = z.object({
  name: z.string(),
  description: z.string(),
  habitat_comment: z.string()
})

const reviewSchema = z.object({
  pseudo: z.string(),
  comment: z.string(),
  isVisible: z.boolean()
})

const contactSchema = z.object({
  mail: z.string().email(),
  title: z.string(),
  description: z.string(),
  isReplied: z.boolean()
})

const animalSchema = z.object({
  name: z.string(),
  species: z.string(),
  habitat_id: z.number().positive(),
  image_id: z.number().positive(),
  status: z.number().nonnegative().max(10)
})


export function validateAnimal(input){
  console.log(animalSchema.partial({
    status: 0,
  }).safeParse(input))
  return animalSchema.partial({
    status: 0,
  }).safeParse(input)
}

export function validateContact(input){
  return contactSchema.partial({
    isReplied: false,
  }).safeParse(input)
}

export function validateReview(input){
  return reviewSchema.parse({
    isVisible: false,
  }).safeParse(input)
}

export function validateHabitat(input){
  return habitatSchema.partial({
    habitat_comment: "",
  }).safeParse(input)
}

export function validateUser(input){
  return userSchema.safeParse(input)
}

export function validateService(input){
  return serviceSchema.partial({
    schedule: 0,
    duration: 0,
  }).safeParse(input)
}


