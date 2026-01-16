export type RowID = number;

// Interface pour l'élément (Ligne de base de données)
export interface RowElement {
  firstName: string;
  lastName: string;
  age?: number; // Optionnel (?)
}
