const express = require("express");
const cors = require("cors");

const app = express();

const revenues = [
    { id: 1, name: "Pudim", tag: "Almoço", time: "30 Minutos", ingredientsAmount: "5 Total", preparation: [{ step: "Misture Tudo" }, { step: "Bata bem até ficar homogenio" }, { step: "Coloque em uma forma e leve ao forno" }, { step: "Sirva quente." }], ingredients: [{ i: "1 Lata de leite condensado" }, { i: "1 Caixa de milho verde" }, { i: "2 Ovos" }], image: "./src/upload/ImageFood.png" },
    { id: 2, name: "Bolo de Chocolate", tag: "Café da Manhã", time: "20 Minutos", ingredientsAmount: "3 Total", preparation: [{ step: "Misture Tudo" }, { step: "Bata bem até ficar homogenio" }, { step: "Coloque em uma forma e leve ao forno" }, { step: "Sirva quente." }], ingredients: [{ i: "1 Lata de leite condensado" }, { i: "1 Caixa de milho verde" }, { i: "2 Ovos" }], image: "./src/upload/ImageFood.png" },
    { id: 3, name: "Arroz Doce", tag: "Sobremesa", time: "15 Minutos", ingredientsAmount: "2 Total", preparation: [{ step: "Misture Tudo" }, { step: "Bata bem até ficar homogenio" }, { step: "Coloque em uma forma e leve ao forno" }, { step: "Sirva quente." }], ingredients: [{ i: "1 Lata de leite condensado" }, { i: "1 Caixa de milho verde" }, { i: "2 Ovos" }], image: "./src/upload/ImageFood.png" },
]

app.use(express.json());
app.use(cors());

app.get("/revenues", (req, res) => {
    res.json(revenues);
});

app.get("/revenues/:id", async (req, res) => {
    const { id } = req.params;
    const revenueIndex = await revenues.findIndex(f => f.id == id);
    return res.json(revenues[revenueIndex]);
})

app.post("/revenues", async (req, res) => {
    const { name, tag, time, ingredientsAmount, preparation, ingredients, image } = req.body;

    var id = 0;
    if (revenues.length - 1 < 0) {
        id = 1;
    } else {
        id = revenues[revenues.length - 1].id + 1;
    }

    var newRevenues = {
        "id": id,
        "name": name,
        "tag": tag,
        "time": time,
        "ingredientsAmount": ingredientsAmount,
        "preparation": preparation,
        "ingredients": ingredients,
        "image": image
    }

    await revenues.push(newRevenues);

    return res.json({
        name: newRevenues.name,
        tag: newRevenues.tag,
        time: newRevenues.time,
        ingredientsAmount: newRevenues.ingredientsAmount,
        preparation: newRevenues.preparation,
        ingredients: newRevenues.ingredients,
        image: newRevenues.image,
    });
});

app.post("/revenue/:id", async (req, res) => {
    const { id } = req.params;
    var { name, tag, time, ingredientsAmount, preparation, ingredients, image } = req.body;
    const revenueIndex = revenues.findIndex(f => f.id == id);
    const revenue = revenues[revenueIndex];

    if (name == null || name == "") {
        name = revenue.name;
    }
    if (tag == null || tag == "") {
        tag = revenue.tag;
    }
    if (time == null || time == "") {
        time = revenue.time;
    }
    if (ingredientsAmount == null || ingredientsAmount == "") {
        ingredientsAmount = revenue.ingredientsAmount;
    }
    if (preparation == null || preparation == "") {
        preparation = revenue.preparation;
    }
    if (ingredients == null || ingredients == "") {
        ingredients = revenue.ingredients;
    }
    if (image == null || image == "") {
        image = revenue.image;
    }

    const updateRevenue = {
        "id": parseInt(revenue.id),
        "nome": name,
        "tag": tag,
        "time": time,
        "ingredientsAmount": ingredientsAmount,
        "preparation": preparation,
        "ingredients": ingredients,
        "image": image,
    };

    await revenues.splice(revenueIndex, 1, updateRevenue);

    return res.json(updateRevenue);
});

app.delete("/revenue/:id", async (req, res) => {
    const { id } = req.params;

    const revenueIndex = revenues.findIndex(f => f.id == id);
    await revenues.splice(revenueIndex, 1);

    return res.send();
})

module.exports = app;