# Test algorithms for NewGen Vision

## Filter algorithm description
This simple filter algorithm takes an array of unfiltered courses and range that user needed as input.
It compares courses' prices that must be between specified values of range, and if they are between so returns that course.
Also it checks whether closing price is `null` or not, to avoid erroneous filtering

## Sort algorithm description
This function also takes an array of unsorted courses as input and sort it by opening price.
But when the compared courses have the same starting price, it will be sorted by closing price
