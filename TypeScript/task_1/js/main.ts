interface Teacher {
  // 1. readonly: Modifiable uniquement à l'initialisation
  readonly firstName: string;
  readonly lastName: string;

  // 2. Propriétés standard
  fullTimeEmployee: boolean;

  // 3. ? : Propriété Optionnelle (peut être absente)
  yearsOfExperience?: number;

  location: string;

  // 4. Index Signature : Permet d'ajouter n'importe quelle autre propriété
  // La clé est une string, la valeur peut être n'importe quoi (any)
  [propName: string]: any;
}

// --- Test avec l'exemple de l'énoncé ---

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false, // Ça marche grâce à l'index signature !
};

console.log(teacher3);
