const restaurant = {
  name: "Adi Nugraha Putra",
  city: "Lampung",
  "favorite drink": "Mineral Water",
  "favorite food": "Takoyaki",
  isVegan: true,
};

let name = restaurant.name;
let favoriteDrink = restaurant["favorite drink"];

console.log(restaurant);

/* 
{
  name: 'Adi Nugraha Putra',
  city: 'Lampung',
  'favorite drink': 'Mineral Water',
  'favorite food': 'Takoyaki',
  isVegan: true
}
*/
