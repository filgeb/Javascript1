//1
function sumNumbers(a, b, c) {
  let total = a + b + c;
  console.log(total);
  return total;
}

//2
function colorCar(color) {
  console.log('a', +color + 'car');
  return 'a  yellow  car';
}
colorCar('yellow');

//3
colorCar('red');

//4
function vehicleType(color, code) {
  if (code === 1) {
    console.log('A ' + color + ' car.');
  } else if (code === 2) {
    console.log('A ' + color + ' motorbike.');
  }
}
vehicleType('black', 2);

//5
console.log(3 === 3 ? 'yes' : 'no');

//6
function vehicle(color, code, age) {
  if (age === 0) {
    if (code === 1) {
      console.log('A ' + color + ' new car');
    } else if (code === 2) {
      console.log('A ' + color + ' new motorbike');
    }
  } else if (age > 0) {
    if (code === 1) {
      console.log('A ' + color + ' used car');
    } else if (code === 2) {
      console.log('A ' + color + ' used motorbike');
    }
  }
}
vehicle('blue', 1, 5);

//7
let vehicles = ['motorbike', 'caravan', 'bike', 'car', 'mopped'];

//8
console.log(vehicles[2]);

//9
function vehicle(color, code, age) {
  if (age === 1) {
    if (code === 1) {
      console.log('A ' + color + ' new car');
    } else if (code === 3) {
      console.log('A ' + color + ' bike');
    }
  } else if (age > 1) {
    if (code === 1) {
      console.log('A ' + color + ' used car');
    } else if (code === 3) {
      console.log('A ' + color + ' used bike');
    }
  }
}
vehicle('green', 3, 1);

//10
let allVehicles = '';
for (let i = 0; i < vehicles.length; i++) {
  if (i === vehicles.length - 1) {
    allVehicles += 'and ' + vehicles[i] + 's. ';
    break;
  }
  allVehicles += vehicles[i] + 's, ';
  // console.log(allVehicles);
}
console.log("Amazing Joe's Garage, we service " + allVehicles);

//12
let car = {};

//13
let teachers = {
  'name of teachers': 'Baraa, Tommy, Fady ,Albert',
};

//14
teachers.language = 'JavaScript, Git, HTML & CSS';
console.log(teachers);

//16
let o1 = { foo: 'bar' };
let o2 = { foo: 'bar' };
let o3 = o2;

console.log(o1);

console.log(o2);

console.log(o3);

o2.fighter = 'cafe';
o1.fai = 'ogre';

console.log(o1);

console.log(o2);

console.log(o3);

let compare1 = o2 === o3;
let compare2 = o1 === o3;
console.log('If we change o2, do we also change o3? ' + compare1);
console.log('If we change o1, do we also change o3? ' + compare2);

//17
let bar = 42;
typeof typeof bar;
console.log('bar is equal to: ' + bar);
console.log('The type of bar is: ' + typeof bar);
console.log('And the type of a string that says "number" is then: ' + typeof typeof bar);
