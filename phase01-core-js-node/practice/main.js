const colors = ["red", "blue", "red", "green", "blue", "red"];

const counts = colors.reduce((acc, c) => {
  acc[c] = (acc[c] || 0) + 1;
  return acc;
}, {});

console.log(counts); 
