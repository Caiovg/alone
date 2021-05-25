//configuração com o banco de dados
const mongoose = require('../config/database');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    macaddress: {type: String, required: true},
    type: {type: Number, required: true},
    title: {type: String, required: true },
    description: {type: String, required: true}
});
//criando os campos do banco de dados

module.exports = mongoose.model('Task', TaskSchema);