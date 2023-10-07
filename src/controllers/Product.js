import Product from "../models/Product";

export const getAllProducts = async (req, res) => {
  try {
    const data = await Product.find({});
    console.log(data);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      name: error.name,
    });
  }
};

export const createProduct = async (req, res) => {
  try {
    const data = await Product.create(req.body);
    if (!data) {
      return res.status(400).json({
        message: "Khong the tao san pham",
      });
    }

    return res.status(201).json({
      message: "Them moi san pham thanh cong!",
      product: data,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      name: error.name,
    });
  }
};
