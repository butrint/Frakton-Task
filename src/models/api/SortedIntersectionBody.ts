import { Type } from "class-transformer";
import { IsArray, IsNumber } from "class-validator";

export class SortedIntersectionBody {
  @IsArray()
  @IsNumber(undefined, { each: true })
  @Type(() => Number)
  array1: number[];

  @IsArray()
  @IsNumber(undefined, { each: true })
  @Type(() => Number)
  array2: number[];
}
