# Frakton-Task
After installing dependencies and running the api you can access endpoints for each assignment.
Assuming that the port you're running the server is 3000 on localhost
 1. Assignment 1 (Intersection). **localhost:3000/api/v1/utils/sorted-intersection** is a Post request which accepts json data and parameters `{ "array1": number[] | string[], "array2": number[] | string[] }`
 2. Assignment 2 (blacklist). **localhost:3000/api/v1/utils/blacklist-emails** is a Post request which accepts json data and parameters `{ "blacklist": string[], find: string }`
 3. Assignment 3 (Least common).  **localhost:3000/api/v1/utils/lowest-common-number** is a Post request which accepts json data and parameters `{ "array1": number[], "array2": number[], "array3": number[] }`

##Big O
 Assignment 1 Big O is O(N+M) where N is the length of arr1 and M is the length of arr2 it reaches to the maximum of the array with greater length
 Assignment 2 Big O is O(1) which is almost instant this is due to using set which is implemented using hash table which is able for constant-time lookup
 Assignment 3 Big O is O(N) considering N is the sum of length of all 3 arrays 
 
