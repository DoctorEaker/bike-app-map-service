import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class BikeLocation extends Document {
  @Prop({ required: true })
  bikeId: string;

  @Prop({ required: true })
  latitude: number;

  @Prop({ required: true })
  longitude: number;

  @Prop({ default: Date.now })
  updatedAt: Date;
}

export const BikeLocationSchema = SchemaFactory.createForClass(BikeLocation);
