# Recursion Project

## Recursion - Overview

This is the sixth project of the "JavaScript" course within "The Odin Project".

The main goal of this project is to practice recursion.

## Additional Information

### Exercises

Two exercises were given for this particular project:

**Fibonacci Sequence** & **Merge Sort**

### Fibonacci Sequence

Fibonacci Sequence (fibonacci.js) - Given a number (n), produce an array that includes the first n elements of the fibonacci sequence (0 is considered the first element).

- For example, 1 will return [0], 2 will return [0,1], 4 will return [0,1,1,2], so on and so forth.
<br/>

- This is different from your traditional fibonacci implementation where the input n is associated with the nth element of the sequence, therefore, the number 4 is considered F4 = 3.
<br/>

- For this particular exercise two functions were created: `fibs` and `fibsRec`.
`fibs` uses an iterative approach, while `fibsRec` uses a recursive one.
<br/>

- For reference, the `fibonacci`, `fibonacciRec`, and `fibonacciBinet` functions were added.
The aforementioned functions are three traditional fibonacci sequence functions that return the value of Fn for a natural n given as an input.
`fibonacci` uses an iterative approach, `fibonacciRec` a recursive one, and `fibonacciBinet` uses Binet's formula.

### Merge Sort

Merge Sort (mergeSort.js) - Given an array of integers, sort them via the merge sort algorithm.

- Notice that I've used `sorted.push(...merged2.slice(j))` and `sorted.push(...merged1.slice(i))` followed by `break`.
They are equivalent to using `sorted.push(merged2[j])` and `sorted.push(merged1[i])` followed by an incrementing the respective index (`i++`, `j++`).
Since the time complexity of `slice(start, end)` is O(N) where N is end - start, it is exactly the same is iterating through the remainder of the sub-array that wasn't fully merged until you've reached the last element.
<br/>

- `mergeSortAlt` is an alternative solution that includes a base case for arrays of length 2.
For arrays of length 2, those arrays are either already sorted, or you only need to switch the locations of the two elements to sort the array.
`mergeSortAlt`, unlike `mergeSort`, handles that case in a conditional instead of splitting the array and merging the singles (which involves two additional calls of the `mergeSort` function).

## Usage

This project is a CLI-based project (i.e., there is no GUI component), you will need to run this project in the command line via the node CLI utility.

### Prerequisites

To run this project you will either need the node CLI utility or run in the browser via an online JavaScript interpreter or your browser's Development Tools (console).

The below section will explain how to run the project via the node CLI utility.

### Installation

Clone the repository via:

`git clone https://github.com/Dur4nt3/recursion_project`

Run the JavaScript files via:

`node fibonacci.js`

or

`node mergeSort.js`

**Note:** The above commands require NodeJS to run; installation of Node within your environment differs depending on your OS.

## Skills Demonstrated

- Recursion

- Divide & Conquer Algorithms

- Merge Sort
