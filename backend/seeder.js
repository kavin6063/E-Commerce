import products from "./data/products.js";
import users from "./data/users.js";
import Product from "./model/productModel.js";
import User from "./model/userModal.js";

import connectDB from "./config/db.js";

connectDB();

const importData = async () => {
  try {
    await Product.deleteMany();
    await User.deleteMany();

    const createdUsers = await User.insertMany(users);
    const adminUser = createdUsers[0]._id;
    console.log(adminUser);

    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser };
    });
    await Product.insertMany(sampleProducts);

    console.log("Data imported...");

    process.exit();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await User.deleteMany();
    await Product.deleteMany();

    console.log("Data destroyed...");
    process.exit();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
