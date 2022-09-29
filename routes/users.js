const express = require('express');
const router = express();
const { db } = require("../config/dbConfig");


router.get('/', (req, res) => {
    const sqlQuery = "SELECT * FROM user";
    db.query(sqlQuery, (err, result) => {
        if (err) {
            console.log(err);
        }else{
            res.send(result);
        }
    });
});

router.get("/:id", (req, res) => {
    const id = req.params.id;
    const sqlQuery = `SELECT * FROM user WHERE user_id = ${id}`;
    
    db.query(sqlQuery, (err, result) => {
        if (err) {
            console.log(err);
        }else{
            res.send(result);
        }
    });

})

// router.get("/:id", (req, res) => {
//     const param = req.params;
//     const data = dataUser.filter((item) => item.id == param.id);
//     res.send(data);
//  });




// const dataUser = [
//     {
//         id: 1,
//         name: "Iqbal",
//         role: "User",
//     },
// ];

// router.get("/", (req, res) => {
//     res.send(dataUser);
// });

// router.get("/:id", (req, res) => {
//     const param = req.params;
//     const data = dataUser.filter((item) => item.id == param.id);
//     res.send(data);
//  });

// router.post("/", (req, res) => {
//     const payload = req.body;
//     dataUser.push(payload);
//     res.send("Data Berhasil Ditambahkan!")
// })

// router.delete("/:id", (req, res) => {
//     const param = req.params;
//     const data = dataUser.filter((item) => item.id != param.id);
//     res.send(data);
// });

// router.put("/:id", (req, res) => {
//     const param = req.params;
//     const newName = req.body.name;
//     const newUsers = dataUser.map((item) => {
//         return item.id == param.id ? {...item, name: newName} : item; 
//     })
//     res.send(newUsers)

// });

module.exports = router;