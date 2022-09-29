const express = require('express');
const router = express();

const dataUser = [
    {
        id: 1,
        name: "Iqbal",
        role: "User",
    },
];

router.get("/", (req, res) => {
    res.send(dataUser);
});

router.get("/:id", (req, res) => {
    const param = req.params;
    const data = dataUser.filter((item) => item.id == param.id);
    res.send(data);
 });

router.post("/", (req, res) => {
    const payload = req.body;
    dataUser.push(payload);
    res.send("Data Berhasil Ditambahkan!")
})

router.delete("/:id", (req, res) => {
    const param = req.params;
    const data = dataUser.filter((item) => item.id != param.id);
    res.send(data);
});

router.put("/:id", (req, res) => {
    const param = req.params;
    const newName = req.body.name;
    const newUsers = dataUser.map((item) => {
        return item.id == param.id ? {...item, name: newName} : item; 
    })
    res.send(newUsers)

});

module.exports = router;