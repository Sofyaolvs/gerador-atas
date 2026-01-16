import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectService } from './service/project.service';
import { ProjectController } from './controller/project.controller';
import { Project, ProjectSchema } from './schema/project.schema';


@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Project.name, schema: ProjectSchema },
    ]),
  ],
  controllers: [ProjectController],
  providers: [ProjectService],
  exports: [ProjectService],
})
export class ProjectModule {}

