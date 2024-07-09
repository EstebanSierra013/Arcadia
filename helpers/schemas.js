import z from "zod"

export const serviceSchema = z.object({
  name: z.string(),
  description: z.string(),
  schedule: z.string().time().nullable(),
  duration: z.number().nullable(),
  image_path: z.string().nullable()
})

export const userSchema = z.object({
  username: z.string().email(),
  password: z.string().min(process.env.MIN_PASSWORD_LENGTH),
  name: z.string(),
  lastname: z.string(),
  rol: z.number()
})

export const habitatSchema = z.object({
  name: z.string(),
  description: z.string(),
  habitat_comment: z.string(),
  image_id: z.number().positive().nullable(),
}).partial({ habitat_comment: true })

export const reviewSchema = z.object({
  pseudo: z.string(),
  comment: z.string(),
  isVisible: z.boolean().default(false)
})

export const contactSchema = z.object({
  mail: z.string().email(),
  title: z.string(),
  description: z.string(),
  isReplied: z.boolean().default(false)
})

export const animalSchema = z.object({
  name: z.string(),
  species: z.string(),
  habitat_id: z.number().positive().nullable(),
  image_id: z.number().positive().nullable(),
  status: z.number().nullish()
})