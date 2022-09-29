const express = require('express');
const app = express();
app.use(express.json())

const userRoute = require("./routes/users")

app.get('/', (req, res) => {
    res.send("Hallo Bestie")
})

app.use("/users", userRoute);

//deklarasi port localhost
const PORT = 1001;

//listen untuk mengecek || mendengarkan jalan di port berapa
app.listen(PORT, () => {
    console.log(`API is running in port ${PORT}`);
})