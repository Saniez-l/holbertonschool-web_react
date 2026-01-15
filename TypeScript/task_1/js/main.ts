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

interface Directors extends Teacher {
  numberOfReports: number;
}


const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false, // Ça marche grâce à l'index signature !
};

console.log(teacher3);

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0).toUpperCase()}. ${lastName}`
}

interface StudentClassInterface {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

interface StudentConstructor {
  new(firstName: string, lastName: string): StudentClassInterface;
}

class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  public workOnHomework(): string {
    return 'Currently working';
  }

  public displayName(): string {
    return this.firstName
  }

}