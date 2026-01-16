namespace Subjects {
  // 1. Declaration Merging : On rajoute une ligne au contrat 'Teacher'
  export interface Teacher {
    experienceTeachingC?: number;
  }

  // 2. La Classe Cpp
  export class Cpp extends Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for Cpp';
    }

    getAvailableTeacher(): string {
      // Si le prof n'a pas d'expérience (0 ou undefined)
      if (!this.teacher.experienceTeachingC) {
        return 'No available teacher';
      }
      return `Available Teacher: ${this.teacher.firstName}`;
    }
  }
}