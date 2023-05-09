import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { BikeLocationService } from './bike-location.service';
import { BikeLocation } from './schemas/bike-location.schema';

@Controller('bike-location')
export class BikeLocationController {
  constructor(private readonly bikeLocationService: BikeLocationService) {}

  @Get()
  async findAll(): Promise<BikeLocation[]> {
    return this.bikeLocationService.findAll();
  }

  @Get(':bikeId')
  async findOne(@Param('bikeId') bikeId: string): Promise<BikeLocation> {
    return this.bikeLocationService.findOne(bikeId);
  }

  @Post()
  async create(@Body() bikeLocation: BikeLocation): Promise<BikeLocation> {
    return this.bikeLocationService.create(bikeLocation);
  }

  @Put(':bikeId')
  async update(
    @Param('bikeId') bikeId: string,
    @Body() bikeLocation: BikeLocation,
  ): Promise<BikeLocation> {
    return this.bikeLocationService.update(bikeId, bikeLocation);
  }

  @Delete(':bikeId')
  async delete(@Param('bikeId') bikeId: string): Promise<BikeLocation> {
    return this.bikeLocationService.delete(bikeId);
  }
}
