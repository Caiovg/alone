const TaskModel = require('../model/TaskModel');
const { response } = require('express');

/**Essa constante pega a data e a hora atual para que possamos listar as tarefas 
 * atrasadas, as de hoje, semana que vem, do mês e do ano
 */
const current = new Date();

/**Para conseguir pegar as tarefas do dia eu preciso pegar o primeiro horario do dia e o ultimo horario do dia */
const { startOfDay, endOfDay, startOfWeek, endOfWeek, startOfMonth, endOfMonth, startOfYear, endOfYear} = require('date-fns')

//chamando o banco

class TaskController {

    async create(req, res){
        //para criar tarefas para o aplicativo
        //req = requisição res = resposta
        const task = new TaskModel(req.body);
        //tudo o que o usuario digitar vai vim para cá e sera jogado para o taskmodel
        await task
            .save()
            //salva no banco
            .then(response => {
                return res.status(200).json(response);
            })
            //mostra se deu certo
            .catch(error => {
                return res.status(500).json(error);
            });
            //mostra se deu errado

    }

    /**Mostrar todos as tarefas */
    async all(req, res){
        await TaskModel.find({ macaddress: {'$in': req.params.macaddress }})
            .sort('when')
            .then(response => {
                return res.status(200).json(response);
            })
            //mostra se deu certo
            .catch(error => {
                return res.status(500).json(error);
            });
            //mostra se deu errado
    }
}
//para passa os comandos para o banco usa class para caber mais de um metodo
module.exports = new TaskController();