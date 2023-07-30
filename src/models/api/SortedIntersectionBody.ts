import { IsArray } from "class-validator";

export class SortedIntersectionBody {
  @IsArray()
  array1: number[] | string[];

  @IsArray()
  array2: number[] | string[];
}
