import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  BikeLocation,
  BikeLocationSchema,
} from './schemas/bike-location.schema';
import { BikeLocationController } from './bike-location.controller';
import { BikeLocationService } from './bike-location.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: BikeLocation.name, schema: BikeLocationSchema },
    ]),
  ],
  controllers: [BikeLocationController],
  providers: [BikeLocationService],
})
export class BikeLocationModule {}
