const { request, response } = require("express");
const revenues = require("../db/revenue.json");

class RevenueController {
    async index(req = request, res = response) {
        return res.json(revenues)
    }

    async get(req = request, res = response) {
        const { id } = req.params;
        const revenueIndex = await revenues.findIndex(f => f.id == id);
        return res.json(revenues[revenueIndex]);
    }

    async create(req = request, res = response) {
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
    }

    async update(req = request, res = response) {
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
    }

    async delete(req = request, res = response) {
        const { id } = req.params;

        const revenueIndex = revenues.findIndex(f => f.id == id);
        await revenues.splice(revenueIndex, 1);

        return res.send();
    }
}

module.exports = RevenueController;