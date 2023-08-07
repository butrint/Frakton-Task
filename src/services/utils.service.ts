import { Service } from "typedi";

@Service()
export class UtilsService {
  getSortedIntersection(arr1: number[], arr2: number[]) {
    let idx = 0;

    return arr1.length < arr2.length
      ? arr1.filter((val, i) => {
          while (val > arr2[idx]) {
            idx++;
          }

          if (val === arr2[idx] && val !== arr1[i - 1]) {
            return true;
          }

          return false;
        })
      : arr2.filter((val, i) => {
          while (val > arr1[idx]) {
            idx++;
          }

          if (val === arr1[idx] && val !== arr2[i - 1]) {
            return true;
          }

          return false;
        });
  }

  hasBeenBlackListed(blacklist: string[], email: string) {
    const blacklistSet = new Set(blacklist.map((bl) => bl.toLocaleLowerCase()));

    const domainWithSubdomains = email
      .substring(email.indexOf("@") + 1)
      .split(".");

    let hasBeenBlackListed = false;
    let concatDomain =
      domainWithSubdomains[domainWithSubdomains.length - 2] +
      "." +
      domainWithSubdomains[domainWithSubdomains.length - 1];

    let i = domainWithSubdomains.length - 2;

    while (i >= 0) {
      if (blacklistSet.has(concatDomain.toLocaleLowerCase())) {
        hasBeenBlackListed = true;
        break;
      }

      i--;
      concatDomain = domainWithSubdomains[i] + "." + concatDomain;
    }

    return hasBeenBlackListed;
  }

  findLowestCommon(arr1: number[], arr2: number[], arr3: number[]) {
    // Since we have to check on 3 arrays we can convert to set for performance
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);
    const set3 = new Set(arr3);

    let smallestInArr1, smallestInArr2, smallestInArr3;

    for (const val of set1) {
      if (
        (!smallestInArr1 || val < smallestInArr1) &&
        set2.has(val) &&
        set3.has(val)
      ) {
        smallestInArr1 = val;
      }
    }

    for (const val of set2) {
      if (
        (!smallestInArr2 || val < smallestInArr2) &&
        set1.has(val) &&
        set3.has(val)
      ) {
        smallestInArr2 = val;
      }
    }

    for (const val of set3) {
      if (
        (!smallestInArr3 || val < smallestInArr3) &&
        set2.has(val) &&
        set1.has(val)
      ) {
        smallestInArr3 = val;
      }
    }

    return Math.min(
      smallestInArr1 || Number.MAX_SAFE_INTEGER,
      smallestInArr2 || Number.MAX_SAFE_INTEGER,
      smallestInArr3 || Number.MAX_SAFE_INTEGER
    );
  }
}
