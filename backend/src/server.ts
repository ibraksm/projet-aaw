import app from './app';
import { getUsers } from './services/spreadsheet';
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

console.log(await getUsers());
