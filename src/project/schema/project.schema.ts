import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {Types } from 'mongoose';

@Schema()
export class Project {

  _id: Types.ObjectId;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true})
  description: string;


  @Prop({ required: true })
  status: boolean;
  
  @Prop({ default: () => new Date() })
  created_at: Date;
}

export const ProjectSchema = SchemaFactory.createForClass(Project);
