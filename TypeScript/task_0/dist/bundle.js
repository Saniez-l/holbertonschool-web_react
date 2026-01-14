/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/

// 2. Création des deux étudiants
var student1 = {
    firstName: "Chris",
    lastName: "Tophe",
    age: 30,
    location: "Paris"
};
var student2 = {
    firstName: "Jane",
    lastName: "Doe",
    age: 25,
    location: "Lyon"
};
// 3. Stockage dans un tableau (Array)
// On précise que c'est un tableau contenant des objets de type 'Student'
var studentsList = [student1, student2];
// 4. Affichage (Vanilla JS)
// On crée l'élément <table>
var table = document.createElement('table');
var tbody = document.createElement('tbody');
// On boucle sur chaque étudiant de la liste
studentsList.forEach(function (student) {
    // On crée une ligne (tr)
    var row = document.createElement('tr');
    // On crée la cellule pour le prénom
    var nameCell = document.createElement('td');
    nameCell.textContent = student.firstName;
    // On crée la cellule pour la localisation
    var locationCell = document.createElement('td');
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQVFBLGlDQUFpQztBQUNqQyxJQUFNLFFBQVEsR0FBWTtJQUN4QixTQUFTLEVBQUUsT0FBTztJQUNsQixRQUFRLEVBQUUsT0FBTztJQUNqQixHQUFHLEVBQUUsRUFBRTtJQUNQLFFBQVEsRUFBRSxPQUFPO0NBQ2xCLENBQUM7QUFFRixJQUFNLFFBQVEsR0FBWTtJQUN4QixTQUFTLEVBQUUsTUFBTTtJQUNqQixRQUFRLEVBQUUsS0FBSztJQUNmLEdBQUcsRUFBRSxFQUFFO0lBQ1AsUUFBUSxFQUFFLE1BQU07Q0FDakIsQ0FBQztBQUVGLHNDQUFzQztBQUN0Qyx5RUFBeUU7QUFDekUsSUFBTSxZQUFZLEdBQW1CLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBRTFELDRCQUE0QjtBQUM1Qiw0QkFBNEI7QUFDNUIsSUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUM5QyxJQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBRTlDLDRDQUE0QztBQUM1QyxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQUMsT0FBTztJQUMzQix5QkFBeUI7SUFDekIsSUFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUV6QyxvQ0FBb0M7SUFDcEMsSUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5QyxRQUFRLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUM7SUFFekMsMENBQTBDO0lBQzFDLElBQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEQsWUFBWSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDO0lBRTVDLG9DQUFvQztJQUNwQyxHQUFHLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzFCLEdBQUcsQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUM7SUFFOUIseUNBQXlDO0lBQ3pDLEtBQUssQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDekIsQ0FBQyxDQUFDLENBQUM7QUFFSCxzREFBc0Q7QUFDdEQsS0FBSyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUN6QixRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3R5cGVzY3JpcHRfZGVwZW5kZW5jaWVzLy4vanMvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyAxLiBEw6lmaW5pdGlvbiBkZSBsJ2ludGVyZmFjZSAoTGUgY29udHJhdClcbmludGVyZmFjZSBTdHVkZW50IHtcbiAgZmlyc3ROYW1lOiBzdHJpbmc7XG4gIGxhc3ROYW1lOiBzdHJpbmc7XG4gIGFnZTogbnVtYmVyO1xuICBsb2NhdGlvbjogc3RyaW5nO1xufVxuXG4vLyAyLiBDcsOpYXRpb24gZGVzIGRldXggw6l0dWRpYW50c1xuY29uc3Qgc3R1ZGVudDE6IFN0dWRlbnQgPSB7XG4gIGZpcnN0TmFtZTogXCJDaHJpc1wiLFxuICBsYXN0TmFtZTogXCJUb3BoZVwiLFxuICBhZ2U6IDMwLFxuICBsb2NhdGlvbjogXCJQYXJpc1wiXG59O1xuXG5jb25zdCBzdHVkZW50MjogU3R1ZGVudCA9IHtcbiAgZmlyc3ROYW1lOiBcIkphbmVcIixcbiAgbGFzdE5hbWU6IFwiRG9lXCIsXG4gIGFnZTogMjUsXG4gIGxvY2F0aW9uOiBcIkx5b25cIlxufTtcblxuLy8gMy4gU3RvY2thZ2UgZGFucyB1biB0YWJsZWF1IChBcnJheSlcbi8vIE9uIHByw6ljaXNlIHF1ZSBjJ2VzdCB1biB0YWJsZWF1IGNvbnRlbmFudCBkZXMgb2JqZXRzIGRlIHR5cGUgJ1N0dWRlbnQnXG5jb25zdCBzdHVkZW50c0xpc3Q6IEFycmF5PFN0dWRlbnQ+ID0gW3N0dWRlbnQxLCBzdHVkZW50Ml07XG5cbi8vIDQuIEFmZmljaGFnZSAoVmFuaWxsYSBKUylcbi8vIE9uIGNyw6llIGwnw6lsw6ltZW50IDx0YWJsZT5cbmNvbnN0IHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGFibGUnKTtcbmNvbnN0IHRib2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGJvZHknKTtcblxuLy8gT24gYm91Y2xlIHN1ciBjaGFxdWUgw6l0dWRpYW50IGRlIGxhIGxpc3RlXG5zdHVkZW50c0xpc3QuZm9yRWFjaCgoc3R1ZGVudCkgPT4ge1xuICAvLyBPbiBjcsOpZSB1bmUgbGlnbmUgKHRyKVxuICBjb25zdCByb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuXG4gIC8vIE9uIGNyw6llIGxhIGNlbGx1bGUgcG91ciBsZSBwcsOpbm9tXG4gIGNvbnN0IG5hbWVDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgbmFtZUNlbGwudGV4dENvbnRlbnQgPSBzdHVkZW50LmZpcnN0TmFtZTtcblxuICAvLyBPbiBjcsOpZSBsYSBjZWxsdWxlIHBvdXIgbGEgbG9jYWxpc2F0aW9uXG4gIGNvbnN0IGxvY2F0aW9uQ2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gIGxvY2F0aW9uQ2VsbC50ZXh0Q29udGVudCA9IHN0dWRlbnQubG9jYXRpb247XG5cbiAgLy8gT24gYWpvdXRlIGxlcyBjZWxsdWxlcyDDoCBsYSBsaWduZVxuICByb3cuYXBwZW5kQ2hpbGQobmFtZUNlbGwpO1xuICByb3cuYXBwZW5kQ2hpbGQobG9jYXRpb25DZWxsKTtcblxuICAvLyBPbiBham91dGUgbGEgbGlnbmUgYXUgY29ycHMgZHUgdGFibGVhdVxuICB0Ym9keS5hcHBlbmRDaGlsZChyb3cpO1xufSk7XG5cbi8vIE9uIGFzc2VtYmxlIGxlIHRvdXQgZXQgb24gbCdham91dGUgYXUgZG9jdW1lbnQgSFRNTFxudGFibGUuYXBwZW5kQ2hpbGQodGJvZHkpO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0YWJsZSk7XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9