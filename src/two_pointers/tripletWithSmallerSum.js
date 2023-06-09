export function searchTriplets(arr, target) {
    let count = 0;
    arr.sort();

    for (let i = 0; i < arr.length - 2; i++) {
        count += searchPair(arr, target - arr[i], i);
    }

    return count;
}

function searchPair(arr, target, first) {
    let count = 0;
    let left = first + 1,
        right = arr.length - 1;

    while (left < right) {
        if (arr[left] + arr[right] < target) {
            count += right - left;
            left++;
        } else {
            right--;
        }
    }

    return count;
}
