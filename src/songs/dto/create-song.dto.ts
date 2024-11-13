import { IsInt, IsNotEmpty, IsString, Min } from 'class-validator';

export class CreateSongDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  author: string;

  @IsInt()
  @IsNotEmpty()
  @Min(0)
  length: number;

  @IsInt()
  @IsNotEmpty()
  @Min(0)
  price: number;
}
