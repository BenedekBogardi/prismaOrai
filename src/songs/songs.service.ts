import { Injectable } from '@nestjs/common';
import { CreateSongDto } from './dto/create-song.dto';
import { UpdateSongDto } from './dto/update-song.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class SongsService {
  db: PrismaService;
  constructor(db: PrismaService){
    this.db = db;
  }

  create(createSongDto: CreateSongDto) {
    return this.db.songs.create({
      data: createSongDto
    });
  }

  findAll() {
    return this.db.songs.findMany();
  }

  findOne(id: number) {
    return this.db.songs.findUnique({
      where: {
        id
      }
    });
  }

  async update(id: number, updateSongDto: UpdateSongDto) {
    try {
      return await this.db.songs.update({
        where: { id },
        data: updateSongDto
      })
    } catch {
      return undefined
    }
  }

  async remove(id: number) {
    try {
      return await this.db.songs.delete({
        where: {
          id
        }
      })
    } catch{
      return undefined;
    }
  }

  findFree(){
    return this.db.songs.findMany({
      where: {
        price: 0
      }
    })
  }

  getTop(){
    
  }
}
