class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        if (prices.lenth < 2) {
            return 0;
        }
        let buy = 0;
        let sell = 1;
        let profit = 0;
        while (sell < prices.length) {
            if (prices[buy] < prices[sell]) {
                profit = Math.max(profit, prices[sell] - prices[buy]);
            } else {
                buy = sell;
            }

            sell++;
        }

        return profit;
    }
}
