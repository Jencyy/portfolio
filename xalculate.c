#include <stdio.h>

// Function to calculate the sum of array elements
int calculateSum(int arr[], int size) {
    int sum = 0;
    for (int i = 0; i < size; i++) {
        sum += arr[i];
    }
    return sum;
}

int main() {
    int n;

    printf("Enter the number of elements in the array: ");
    scanf("%d", &n);

    if (n <= 0) {
        printf("Invalid array size. Please enter a positive integer.\n");
        return 1; // Exit with an error code
    }

    int arr[n];

    printf("Enter %d elements:\n", n);
    for (int i = 0; i < n; i++) {
        scanf("%d", &arr[i]);
    }

    // Calculate the sum by calling the function
    int sum = calculateSum(arr, n);

    printf("Sum of array elements: %d\n", sum);

    return 0;
}
