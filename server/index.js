const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

app.use(express.json());
// for connecting to the front-end
// app.use(express.static(path.join(__dirname, '../CLIENTSIDE_DIRECTORY_PATH_GOES_HERE')));



app.listen(PORT);
console.log(`Server listening at http://localhost:${PORT}`);
