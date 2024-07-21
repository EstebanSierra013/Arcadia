export const enumRols =  {
  Administrateur: "admin",
  Employé: "employee",
  Vétérinaire: "veterinary",
  
}

export const enumPathbyRol = {
  admin: ["Users", "Services", "Habitats", "Animals", "Reports"],
  veterinary: ["Reports", "Habitats"],
  employee: ["Reviews", "Services", "Reports"]
}

export const enumFunctionbyRol = {
  admin: {
    users: "all",
    services: "all",
    habitats: "all",
    animals: "all",
    reports: "read"
  },
  veterinary: {
    reports: "all",
    habitats: "edit"
  },
  employee: {
    reviews: "validate", 
    services: "all",
    reports: "validate"
  }
}

export const [... listRols] = Object.values(enumRols);