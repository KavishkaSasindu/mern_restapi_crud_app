const UserModel = require("../models/UserModel");

// create admin
const createAdmin = async (request, response) => {
  console.log(request.body);

  try {
    const admin = await UserModel.create(request.body);
    if (admin) {
      return response.status(201).json({
        message: "admin created",
        data: admin,
      });
    }
  } catch (error) {
    if (error) {
      response.status(400).json({
        message: "Admin not created",
      });
    }
  }
};

// get all admin data
const getAdminData = async (request, response) => {
  try {
    const admins = await UserModel.find({});
    if (admins) {
      return response.status(200).json({
        message: "Data fetched ",
        data: admins,
      });
    } else {
      return response.status(404).json({
        message: "no data here",
      });
    }
  } catch (error) {
    if (error) {
      return response.status(400).json({
        message: "Error ",
      });
    }
  }
};

// get one admin data
const getOneAdminData = async (request, response) => {
  try {
    const { id } = request.params;

    const admin = await UserModel.findById(id);
    if (admin) {
      return response.status(200).json({
        message: "Admin found",
        data: admin,
      });
    } else {
      return response.status(404).json({
        message: "User not found",
      });
    }
  } catch (error) {
    if (error) {
      return response.status(400).json({
        message: response.error,
        msg: "Error",
      });
    }
  }
};

module.exports = { createAdmin, getAdminData, getOneAdminData };
