import { Food } from "../models/foodModel.js";
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
//                              GetAll Food
export const getAllFood = async (req, res) => {
    try {
        const foods = await Food.find();
        if (!foods) {
            res.status(400).json({ message: "No Existing Food!" });
            return;
        }
        res.json(foods);
    }
    catch (err) {
        res.status(500).json({ message: "Error fetching food!" });
    }
};
//                      get single food
expo;
//# sourceMappingURL=foodController.js.map