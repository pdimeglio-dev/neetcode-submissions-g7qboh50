class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        if (prices.length < 2) {
            return 0;
        }
        let max = 0;
        for (let i =0; i< prices.length -1; i++) {
            for (let j = i+1; j< prices.length; j++) {
                if (prices[j] > prices[i]) {
                    max = Math.max(max, prices[j] - prices[i])
                }
            }
        }

        return max;
    }
}
