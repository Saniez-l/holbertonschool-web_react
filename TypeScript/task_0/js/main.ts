// 1. Définition de l'interface (Le contrat)
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// 2. Création des deux étudiants
const student1: Student = {
  firstName: "Chris",
  lastName: "Tophe",
  age: 30,
  location: "Paris"
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Doe",
  age: 25,
  location: "Lyon"
};

// 3. Stockage dans un tableau (Array)
// On précise que c'est un tableau contenant des objets de type 'Student'
const studentsList: Array<Student> = [student1, student2];

// 4. Affichage (Vanilla JS)
// On crée l'élément <table>
const table = document.createElement('table');
const tbody = document.createElement('tbody');

// On boucle sur chaque étudiant de la liste
studentsList.forEach((student) => {
  // On crée une ligne (tr)
  const row = document.createElement('tr');

  // On crée la cellule pour le prénom
  const nameCell = document.createElement('td');
  nameCell.textContent = student.firstName;

  // On crée la cellule pour la localisation
  const locationCell = document.createElement('td');
  locationCell.textContent = student.location;

  // On ajoute les cellules à la ligne
  row.appendChild(nameCell);
  row.appendChild(locationCell);

  // On ajoute la ligne au corps du tableau
  tbody.appendChild(row);
});

// On assemble le tout et on l'ajoute au document HTML
table.appendChild(tbody);
document.body.appendChild(table);
