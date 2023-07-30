import { ArrayMinSize, IsArray, IsString } from "class-validator";

export class BlackListBody {
  @IsArray()
  @IsString({ each: true })
  @ArrayMinSize(1)
  blacklist: string[];

  @IsString()
  find: string;
}
