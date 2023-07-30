import { Body, Get, JsonController, Post, Res } from "routing-controllers";
import { Response } from "express";
import { UtilsService } from "../services/utils.service";
import { Service } from "typedi";
import { LowestCommonNoBody } from "../models/api/LowestCommonNoBody";
import { BlackListBody } from "../models/api/BlackListBody";
import { SortedIntersectionBody } from "../models/api/SortedIntersectionBody";

@Service()
@JsonController("/utils")
export class UtilsController {
  constructor(private utilsService: UtilsService) {}

  @Post("/sorted-intersection")
  sortedIntersection(
    @Res() response: Response,
    @Body() body: SortedIntersectionBody
  ) {
    const intersection = this.utilsService.getSortedIntersection(
      body.array1,
      body.array2
    );

    return response.json({ intersection });
  }

  @Post("/blacklist-domain")
  blackListDomain(@Res() response: Response, @Body() body: BlackListBody) {
    const hasBeenBlackListed = this.utilsService.hasBeenBlackListed(
      body.blacklist,
      body.find
    );

    return response.json({ hasBeenBlackListed });
  }

  @Post("/lowest-common-number")
  lowestCommonNumber(
    @Res() response: Response,
    @Body({
      required: true,
    })
    body: LowestCommonNoBody
  ) {
    const lowestCommonNo = this.utilsService.findLowestCommon(
      body.array1,
      body.array2,
      body.array3
    );

    return response.json({ lowestCommonNo });
  }
}
