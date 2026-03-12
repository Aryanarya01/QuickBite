import { Food } from "../models/foodModel.js";
import { json } from "node:stream/consumers";
//                                      Create Food(admin)
export const createFood = async (req, res) => {
    try {
        const { name, price, description, image, category } = req.body;
        if (!name || !price || !description || !image || !category) {
            res.status(400).json({ message: "All fields are required" });
            return;
        }
        const food = await Food.create({
            name,
            price,
            description,
            image,
            category,
        });
        res.status(201).json({ message: "Successfully Created!",
            food
        });
    }
    catch (err) {
        res.status(500).json({ message: "Error Creating Food!" });
    }
};
//                              getall Food
export const getAllFood = async (req, res) => {
    try {
    }
    catch (err) {
        res.status(500).json({ message: "Error fetching food!" });
    }
};
//# sourceMappingURL=foodController.js.map