const Todos = require('../models/Todos');

module.exports = {
    getAllTodos: async (req, res) => {
    const data = await Todos.find({});

    res.json({
      message: "berhasil mendapatkan Todos",
      data,
    });
    },

    // Get Todos By Id
    getTodosById: (req, res) => {},

    // Add Todos
    addTodos: (req, res) => {},

    // Edit Todos
    editTodosById: (req, res) => {},

    // Delete Todos
    deleteTodosById: (req, res) => {},



    }

