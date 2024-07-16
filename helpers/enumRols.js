export const enumRols =  {
  Administrateur: "admin",
  Employé: "employee",
  Vétérinaire: "veterinary"
}

export const [... listRols] = Object.values(enumRols);