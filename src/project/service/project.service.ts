import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { ProjectRegistrationDto } from "../dto/project.registration.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Project } from "../schema/project.schema";
import { Model } from "mongoose";
@Injectable()
export class ProjectService {

    constructor(
@InjectModel(Project.name) private readonly projectModel: Model<Project>) {}
    
    async createProject(projectRegistrationDto: ProjectRegistrationDto): Promise<Project> {
        try {
            const newProject = new this.projectModel(projectRegistrationDto);
            return await newProject.save();
        } catch (error) {
            throw new InternalServerErrorException('Erro ao criar projeto');
        }
    }

    async findAllProjects(): Promise<Project[]>{
        try {
            return await this.projectModel.find();
        } catch (error) {
            throw new InternalServerErrorException('Erro ao buscar todos os projetos');
        }
    }

    async findProjectById(id:string): Promise<Project> {
        try {
            const project = await this.projectModel.findById(id);
            if (!project) {
                throw new InternalServerErrorException('Projeto não encontrado');
            }
            return project;
        } catch (error) {
            throw new InternalServerErrorException('Erro ao buscar projeto');
        }
    }

    async deleteProject(id: string): Promise<void> {
        try {
            await this.projectModel.findByIdAndDelete(id);
        } catch (error) {
            throw new InternalServerErrorException('Erro ao deletar projeto');
        }
    }
}
