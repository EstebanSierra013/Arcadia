/**
  * ZOD Schemas - Validate input for table
  *
  */

import z from "zod"

export const serviceSchema = z.object({
  name: z.string(),
  description: z.string(),
  schedule: z.string().nullable(),
  duration: z.coerce.number().nullable()
})

export const userSchema = z.object({
  username: z.string().email(),
  password: z.string().min(process.env.MIN_PASSWORD_LENGTH),
  name: z.string(),
  lastname: z.string(),
  rol_id: z.coerce.number()
})

export const authSchema = z.object({
  username: z.string().email(),
  password: z.string().min(process.env.MIN_PASSWORD_LENGTH)
})

export const habitatSchema = z.object({
  name: z.string(),
  description: z.string(),
  habitat_comment: z.string(),
  image_path: z.string().nullable()
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
  habitat_id: z.coerce.number().positive().nullable(),
  image_path: z.string().nullable(),
  status: z.number().nullish()
})