/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions){
  const total_amt={};
  transactions.forEach(transaction => {
    const {category,price}=transaction;
    if(!total_amt[category]){
      total_amt[category]=price;
    }
    else{
      total_amt[category]+=price;
    }
  });

  const resultant=[];
  Object.keys(total_amt).forEach((category) => {
    resultant.push({category: category,totalSpent: total_amt[category]});
  });
  return resultant;
}

module.exports = calculateTotalSpentByCategory;
