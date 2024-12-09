/**
  * ZOD Schemas - Validate input for table
  *
  */

import z from "zod"

export const serviceSchema = z.object({
  name: z.string().min(5, { message: "Must be 5 or more characters long" }),
  description: z.string().min(10),
  schedule: z.string().nullable(),
  duration: z.string().transform((value) => (value == '' ? null : value)).nullable().transform((value) => (value === null ? null : Number(value))),
  image_path: z.nullable()
})

export const userSchema = z.object({
  username: z.string().email().min(5),
  name: z.string().min(5),
  lastname: z.string().min(5),
  rol_id: z.coerce.number()
})

export const authSchema = z.object({
  username: z.string().email().min(5),
  password: z.string().min(process.env.MIN_PASSWORD_LENGTH)
})

export const habitatSchema = z.object({
  name: z.string().min(5),
  description: z.string().min(10),
  habitat_comment: z.string(),
}).partial({ habitat_comment: true })

export const reviewSchema = z.object({
  pseudo: z.string().min(5),
  comment: z.string().min(10),
  isVisible: z.boolean().default(false)
})

export const contactSchema = z.object({
  mail: z.string().email().min(5),
  title: z.string().min(5),
  description: z.string().min(10),
  isReplied: z.boolean().default(false)
})

export const animalSchema = z.object({
  name: z.string().min(5),
  species: z.string().min(5),
  habitat_id: z.coerce.number().positive().nullable(),
  status: z.number().nullish()
})

export const reportSchema = z.object({
  date: z.string().date(),
  status: z.coerce.number().max(10).positive().nullable(),
  food: z.string().min(5),
  quantity: z.coerce.number().positive().nullable(),
  created_by: z.string().email().min(5),
  animal_id: z.coerce.number().positive().nullable(),
}).partial({ status: true })