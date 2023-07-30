# Frakton-Task
After installing dependencies and running the api you can access endpoints for each assignment.
Assuming that the port you're running the server is 3000 on localhost
 1. Assignment 1 (Intersection). **localhost:3000/api/v1/utils/sorted-intersection** is a Post request which accepts json data and parameters `{ "array1": number[] | string[], "array2": number[] | string[] }`
 2. Assignment 2 (blacklist). **localhost:3000/api/v1/utils/blacklist-domains** is a Post request which accepts json data and parameters `{ "blacklist": string[], find: string }`
 3. Assignment 3 (Least common).  **localhost:3000/api/v1/utils/lowest-common-number** is a Post request which accepts json data and parameters `{ "array1": number[], "array2": number[], "array3": number[] }`

## Big O
 1. Assignment 1 Big O is O(N+M) where N is the length of arr1 and M is the length of arr2 it reaches to the maximum of the array with greater length for set we have 3 variables wich take O(N) time complexity. In terms of space complexity we use additional space to store intersection variable. Store complexity is O(K) where worst case would be the length of smaller array.
 2. Assignment 2 Big O is O(1) which is almost instant this is due to using set which is implemented using hash table which is able for constant-time lookup. We also use space to store set1 which has O(N) time complexity.
 3. Assignment 3 Big O is O(N) considering N is the sum of length of all 3 arrays. We also use 3 new sets which have the complexity of O(N).

 ## Alternatives
 1. Assignment 1 This is the least iteration I found possible while thinking about it, other solutions that were considered were iterating through both arrays and find what is on array1 and array2 first and what is on array2 and on array1 second which would take more time to complete.
 2. Assignment 2 I considered creating a hashmap on my own through Map and access them when trying to find the blacklisted domain which was also worst in terms of performance.
 3. Assignment 3 I did consider lots of considerations one was to iterate until we reach length of biggest array and check on indexes if 3 arrays have the value by accessing value on each of them using iterating index and checking if other 2 arrays include the value and if the value is the lowest common number, other solution was iterating through all of them and finding the lowest common number from each and find the lowest among all and other ideas which were more expensive in terms of performance.
