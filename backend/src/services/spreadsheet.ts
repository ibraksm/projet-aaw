import { google } from "googleapis";
import dotenv from "dotenv";

dotenv.config();

enum Table {
  Users = "Users",
  Listings = "Listings"
}

enum Role {
  ADMIN = "ADMIN",
  USER = "USER"
}

interface User {
  id: number,
  username: string
  role: Role
}

enum Category {
  Books = "Livres",
  Furnitures = "Meubles"
}

enum Condition {
  NEW = "Neuf",
  VERY_GOOD = "Très bon",
  GOOD = "Bon",
  FAIR = "Satisfaisant",
  REFURBISHED = "Reconditionné",
  FOR_PARTS = "Pour pièces"
}

enum Status {
  SOLD = "Vendu",
  AVAILABLE = "Disponible",
  PAUSED = "En pause"
}

interface Listing {
  id: number,
  category: Category,
  title: string,
  description: string,
  condition: Condition,
  status: Status
}

const sheets = google.sheets({
  version: "v4",
  auth: new google.auth.GoogleAuth({
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  })
});

export async function getUsers(): Promise<User[]> {
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.GOOGLE_SHEET_ID!,
    range: `'${Table.Users}'!A2:C`,
  });

  const rows = response.data.values;

  if (!rows || rows.length === 0) {
    return [];
  }

  return rows.map((row) => ({
    id: Number(row[0]),
    username: row[1],
    role: row[2] as Role
  }));
}
