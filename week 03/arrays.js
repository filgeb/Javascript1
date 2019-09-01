//2.1
let favoriteAnimals = ['blowfish', 'capricorn', 'giraffe'];
favoriteAnimals.push('turtle');
//2.2
console.log(favoriteAnimals);

//2.3
favoriteAnimals.splice(1, 0, 'meerkat');
//2.4
console.log(
  'The new value of my  array is [ "blowfish", "meerkat","capricorn", "giraffe" "turtle"]',
);
//2.5
console.log(favoriteAnimals);

//2.6
console.log(favoriteAnimals.length);

//2.7
favoriteAnimals.splice(3, 1);

//2.8
console.log(favoriteAnimals);

//2.9
let indexNum = favoriteAnimals.findIndex(animal => animal === 'meerkat');
//2.10
console.log(indexNum);
