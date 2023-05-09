import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BikeLocationModule } from './bike-location/bike-location.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://mongo-map:27017/bicycle-location-service',
    ),
    BikeLocationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
