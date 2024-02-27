// Lower case
let personName: string = "Aleem"
console.log("Lowercase:", personName.toLowerCase());
// upper case
console.log("uppercase:", personName.toUpperCase());
// title case
console.log("titlecase:", personName.replace(/\bw/g,c => c.toUpperCase()));
