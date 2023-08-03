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

    // let [idx1, idx2] = [0, 0];

    // const intersection: number[] = [];

    // while (idx1 < arr1.length && idx2 < arr2.length) {
    //   const val1 = arr1[idx1];
    //   const val2 = arr2[idx2];

    //   if (idx2 >= arr2.length) {
    //     break;
    //   }

    //   // Since array is sorted we can increase the index of the smaller number to compare
    //   if (val1 === val2 && val1 !== intersection[intersection.length - 1]) {
    //     intersection.push(val1);
    //     idx1++;
    //     idx2++;
    //   } else if (val1 > val2) {
    //     idx2++;
    //   } else {
    //     idx1++;
    //   }
    // }

    // return intersection;

    // // new solution without introducing new additional data type
    // let [idx1, idx2] = [0, 0];
    // const copy = arr1.length > arr2.length ? arr1 : arr2;

    // return copy.reduce((intersection: number[], _, idx) => {
    //   const val1 = arr1[idx1];
    //   const val2 = arr2[idx2];

    //   // // We can remove this since this interrupts the loop of reduce but if we use it we introduce new ...
    //   // // time complexity of O(N) and time complexity of O(N) which Array.prototype.splice() has
    //   // if (idx1 >= arr1.length || idx2 >= arr2.length) {
    //   //   copy.splice(0, idx);
    //   // }

    //   if (val1 === val2 && val1 !== intersection[intersection.length - 1]) {
    //     intersection.push(val1);
    //     idx1++;
    //     idx2++;
    //   } else if (val1 > val2) {
    //     idx2++;
    //   } else {
    //     idx1++;
    //   }

    //   return intersection;
    // }, []);
  }

  hasBeenBlackListed(blacklist: string[], search: string) {
    const set1 = new Set(blacklist);

    return set1.has(search);
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
