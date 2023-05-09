import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BikeLocation } from './schemas/bike-location.schema';

@Injectable()
export class BikeLocationService {
  constructor(
    @InjectModel(BikeLocation.name)
    private bikeLocationModel: Model<BikeLocation>,
  ) {}

  async findAll(): Promise<BikeLocation[]> {
    return this.bikeLocationModel.find().exec();
  }

  async findOne(bikeId: string): Promise<BikeLocation> {
    return this.bikeLocationModel.findOne({ bikeId }).exec();
  }

  async create(bikeLocation: BikeLocation): Promise<BikeLocation> {
    const newBikeLocation = new this.bikeLocationModel(bikeLocation);
    return newBikeLocation.save();
  }

  async update(
    bikeId: string,
    bikeLocation: BikeLocation,
  ): Promise<BikeLocation> {
    return this.bikeLocationModel
      .findOneAndUpdate({ bikeId }, bikeLocation, {
        new: true,
      })
      .exec();
  }

  async delete(bikeId: string): Promise<BikeLocation> {
    return this.bikeLocationModel.findOneAndDelete({ bikeId }).exec();
  }
}
