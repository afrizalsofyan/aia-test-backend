const app = require("./index");
const PORT = process.env.PORT || 3333;

app.listen(PORT, () => console.log(`Server running at ${PORT}`));
