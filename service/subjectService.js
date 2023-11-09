const { db } = require("../model")
const { Op } = require('sequelize')

class SubjectService {
    constructor(model){
        this.model = model
    }

    async createSubject(subject, teacher, Classes, days){
        try{
            const result = await this.model.create({ subject : subject, teacher : teacher, Classes : Classes, days : days})
            return result
        }catch(err){
            throw err
        }
    }

    async listSubject(){
        try{
            const result = await this.model.findAll({ attributes : ['subject', 'teacher', 'Classes','days']})
            return result
        }catch(err){
            throw err
        }
    }

    async searchSubject(subject, Classes){
     try{
        const result = await this.model.findAll({
            where: {
                [Op.and]: [subject ? { subject: { [Op.like]: `%${subject}%` } } : null,
                Classes ? { Classes : Classes } : null,]
            }, attributes: ['subject', 'teacher', 'Classes','days']
        })
        return result
     }catch(err){
        throw err

     }
    }
}

module.exports = { SubjectService : new SubjectService(db.subjectModel.Subject)}