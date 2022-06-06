/**
 * 11. Container With Most Water
 * 
 * You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints 
 * of the ith line are (i, 0) and (i, height[i]). Find two lines that together with the x-axis form a container, 
 * such that the container contains the most water. Return the maximum amount of water a container can store.
 * 
 * Input: height = [1,8,6,2,5,4,8,3,7]
 * Output: 49
 * Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of 
 * water (blue section) the container can contain is 49.
 * 
 * ---------------------------------
 * Time Complexity => 0(n)
 * Space Complexity => 0(1)
 * ---------------------------
 * 
 */

 const maxArea = (height) => {
    let p1 = 0, p2 = height.length - 1, totalSum = 0;

    while (p1 < p2) {
        const h = Math.min(height[p1], height[p2]);
        const w = (p2 - p1);
        const area = h * w;
        totalSum = Math.max(totalSum,area);
        height[p1] <= height[p2]? p1++ : p2--;
    }

    return totalSum;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]));

