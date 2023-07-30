import { Service } from "typedi";

@Service()
export class UtilsService {
  // Since JavaScript uses lexicographical order this will work with strings as well
  getSortedIntersection(arr1: number[] | string[], arr2: number[] | string[]) {
    let [idx1, idx2] = [0, 0];
    const intersection = [];

    while (true) {
      // We know that at most we will go to the biggest number | string on each array
      if (!arr1[idx1] || !arr2[idx2]) {
        break;
      }

      // Since array is sorted we can increase the index of the smaller number | string to compare
      if (arr1[idx1] === arr2[idx2]) {
        intersection.push(arr1[idx1]);
        idx1++;
        idx2++;
      } else if (arr1[idx1] > arr2[idx2]) {
        idx2++;
      } else {
        idx1++;
      }
    }

    return intersection;
  }

  findLowestCommon(arr1: number[], arr2: number[], arr3: number[]) {
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

  hasBeenBlackListed(blacklist: string[], search: string) {
    const set1 = new Set(blacklist);

    return set1.has(search);
  }
}
