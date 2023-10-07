import Product from "../models/Product";

export const getAllProducts = async (req, res) => {
  try {
    const data = await Product.find({});
    if (!data || data.length === 0) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    return res.status(200).json({
      message: "Hien thi danh sach san pham thanh cong!",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      name: error.name,
    });
  }
};

export const createProduct = async (req, res) => {
  try {
    // Goi ra categories
    // Select category cho product sẽ thêm.thêm
    // Gửi request tạo mới sản phẩm kèm theo field: categoryID
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

export const updateProduct = async (req, res) => {
  try {
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      name: error.name,
    });
  }
};

export const deleteProduct = async (req, res) => {
  try {
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      name: error.name,
    });
  }
};
