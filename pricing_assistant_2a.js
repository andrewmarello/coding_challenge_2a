console.log(`Hello. This is Coding Challenge 2a - Pricing Assistant.`)

// Step 1: Create and Initialize Variables
const product_name = "Running Shoes"
let costPerUnit = 99.99
let basePrice = 249.99
let discountRate = 0.20
let salesTaxRate = 0.07
let fixedMonthlyCosts = 2500

// Step 2: Calculate Pricing & Profit Metrics
let discountedPrice = basePrice * (1 - discountRate)
let finalPriceWithTax = discountedPrice * (1 + salesTaxRate)
let profitPerUnit = finalPriceWithTax - costPerUnit
let breakEvenUnits = Math.ceil(fixedMonthlyCosts / profitPerUnit)
let isProfitablePerUnit = profitPerUnit > 0

// Step 3: Print to Console
console.log("Product Name:", product_name);
console.log("Discounted Price (before tax): $", discountedPrice.toFixed(2));
console.log("Final Price (after tax): $", finalPriceWithTax.toFixed(2));
console.log("Profit per Unit: $", profitPerUnit.toFixed(2));
console.log("Break-even Units:", breakEvenUnits);
console.log("Profitable per Unit:", isProfitablePerUnit);
