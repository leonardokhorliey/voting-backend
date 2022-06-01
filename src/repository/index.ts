import {injectable, inject,autoInjectable} from "tsyringe";

export class Repository<Entity>{
    constructor(private entity){
    }
    protected save = async (data)=>{
        return await this.entity.create(data);

    }
    protected create = async (data): Promise<Entity>=>{
       return this.entity.create(data);
    }
    
    protected findOne = async (data) => {
      return await this.entity.findOne(data)
    }

    protected findAll = async () => {
      return this.entity.findAll();
    }

    protected update = async (data, condition) => {
      return this.entity.update(data, condition);
    }
}