import { Body, Controller, Delete, Get, HttpCode, Param, Post } from "@nestjs/common";
import { ProjectService } from "../service/project.service";
import { ProjectRegistrationDto } from "../dto/project.registration.dto";

@Controller('project')
export class ProjectController {
    constructor(readonly projectService: ProjectService) {}
    
    @Post()
    @HttpCode(201)
    async createProject( @Body() projectRegistrationDto: ProjectRegistrationDto){
       return await this.projectService.createProject(projectRegistrationDto)
    }

    @Get(':id')
    @HttpCode(200)
    async findProjectById(@Param('id') id: string){
        try {
            return await this.projectService.findProjectById(id);
        } catch (error) {
            throw new Error('Erro ao buscar projeto.');
        }
    }

    @Get()
    @HttpCode(200)
    async findAll(){
        try {
            return await this.projectService.findAllProjects();
        } catch (error) {
            throw new Error('Erro ao buscar projetos.');
        }
    }

    @Delete(':id')
    @HttpCode(200)
    async deleteProject(@Param('id') id: string){
        try {
            return await this.projectService.deleteProject(id);
        } catch (error) {
            throw new Error('Erro ao deletar projeto.');
        }
    }
}
