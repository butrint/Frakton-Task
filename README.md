# Frakton-Task
After installing dependencies and running the api you can access endpoints for each assignment.
Assuming that the port you're running the server is 3000 on localhost
 1. Assignment 1 (Intersection). **"localhost:3000/api/v1/utils/sorted-intersection"** is a Post request which accepts json data and parameters `{ "array1": number[] | string[], "array2": number[] | string[] }`
 2. Assignment 2 (blacklist). **"localhost:3000/api/v1/utils/blacklist-domains"** is a Post request which accepts json data and parameters `{ "blacklist": string[], email: string }`
 3. Assignment 3 (Least common).  **"localhost:3000/api/v1/utils/lowest-common-number"** is a Post request which accepts json data and parameters `{ "array1": number[], "array2": number[], "array3": number[] }`

## Big O
 1. Assignment 1 Time complexity in worst case is O(N+M) where N is the length of array 1 and M is the length of array 2 and best case is O(min(N,M)) where min(N, M) is the length of shorter array. In terms of space complexity we have O(1) since we aren't introducing any new data structure.
 2. Assignment 2 <h5> Time complexity </h5> Creating the blacklistSet has a time complexity of O(n) (this is time complexity on javascript of new Set) where n would be number of unique keys on blacklist, the time complexity of extracting the domain with subdomains from the email is O(m), where 'm' is the number of characters in the domain part with subdomains of the email, the loop runs a maximum of 'm' times, where 'm' is the number of subdomains in the domain part with subdomains of the email. The overall time complexity of the hasBeenBlackListed function is O(n + m), where 'n' is the number of elements in the blacklist array, and 'm' is the number of characters in the domain part with subdomains of the email. Since 'm' is generally smaller than 'n', the dominant factor in the time complexity is the creation of the blacklistSet (O(n)). <h5>Space Complexity</h5> The overall space complexity is O(n) where "n" is number of unique elements in the blacklist prvided by input this is only due to introducing new variable blacklistSet which keeps a unique set of blacklist domains, other variable like concatDomain, hasBeenBlackListed, domainWithSubdomains have constant space requirements and do not contribute significantly to the space complexity compare to blacklistSet.
 3. Assignment 3 <h5> Time complexity </h5> O(x+y+z) considering x,y,z are the numbers of all unique element on array1, array2 and array3. <h5>Space complexity</h5> In terms of space complexity the space complexity is O(x + y + z), where 'x', 'y', and 'z' are the number of unique elements in array1, array2, and array3, respectively. This is due to the space required for the three sets and the union set. The "smallestInArrays" variable and the loop iterator (val) have constant space requirements and do not significantly contribute to the space complexity compared to the sets.

 ## Alternatives
  ### Assignment 1:

    // Old solution with fixes on falsy values breaking the loop and removing duplicates
    const intersection: number[] = [];
    let [idx1, idx2] = [0, 0];

    while (idx1 < arr1.length && idx2 < arr2.length) {
      const val1 = arr1[idx1];
      const val2 = arr2[idx2];

      if (idx2 >= arr2.length) {
        break;
      }

      // Since array is sorted we can increase the index of the smaller number to compare
      if (val1 === val2 && val1 !== intersection[intersection.length - 1]) {
        intersection.push(val1);
        idx1++;
        idx2++;
      } else if (val1 > val2) {
        idx2++;
      } else {
        idx1++;
      }
    }

    return intersection;

    // other solution without introducing new additional data structure
    let [idx1, idx2] = [0, 0];
    const copy = arr1.length > arr2.length ? arr1 : arr2;

    return copy.reduce((intersection: number[], _, idx) => {
      const val1 = arr1[idx1];
      const val2 = arr2[idx2];

      // // We can remove this since this interrupts the loop of reduce but if we use it we introduce new ...
      // // time complexity of O(N) and time complexity of O(N) which Array.prototype.splice() has
      // if (idx1 >= arr1.length || idx2 >= arr2.length) {
      //   copy.splice(0, idx);
      // }

      if (val1 === val2 && val1 !== intersection[intersection.length - 1]) {
        intersection.push(val1);
        idx1++;
        idx2++;
      } else if (val1 > val2) {
        idx2++;
      } else {
        idx1++;
      }

      return intersection;
    }, []);
    
 1. Assignment 1 The first "Old approach" introduces new variable so time complexity is O(N) where N is the length of shortest array and time complexity of O(N) where N is length of the greatest array. "Other solution" without introducing new data structure time complexity is O(N) where N is the length of the greatest array and it's in all cases worst and best time complexity is O(1) const copy we assign doesn't introduce new time complexity due to arrays being passed by reference in javascript.
 2. Assignment 2 I considered creating a hashmap on my own through Map and access them when trying to find the blacklisted domain which was also worst in terms of performance.
 3. Assignment 3 I did consider lots of considerations one was to iterate until we reach length of biggest array and check on indexes if 3 arrays have the value by accessing value on each of them using iterating index and checking if other 2 arrays include the value and if the value is the lowest common number, other solution was iterating through all of them and finding the lowest common number from each and find the lowest among all and other ideas which were more expensive in terms of performance. Considering include method on javascript is much slower than "has" of Set I used Set for this assignment.

 ## Time it took
 1. Assignment 1. ~17 mins
 2. Assignment 2. ~3 mins
 3. Assignment 3. ~30 min
