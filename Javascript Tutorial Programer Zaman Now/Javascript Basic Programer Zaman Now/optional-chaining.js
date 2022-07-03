// TODO: Optional Chaining

const person = {
  address: {
    country: "Indonesia",
  },
};

// ? -> to check null/undefined
let country = person?.address?.country;
console.info(country);
