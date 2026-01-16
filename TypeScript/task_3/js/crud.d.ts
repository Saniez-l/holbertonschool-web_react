import { RowID, RowElement } from './interface';

// On déclare les signatures des fonctions de crud.js
// Note : Pas de code ici, juste des définitions de types.

export function insertRow(row: RowElement): RowID;

export function deleteRow(rowId: RowID): void;

export function updateRow(rowId: RowID, row: RowElement): RowID;