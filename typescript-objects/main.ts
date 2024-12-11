interface StudentProps {
  firstName: string;
  lastName: string;
  age: number;
  livesInIrvine?: boolean;
  previousOccupation?: string;
}

const student: StudentProps = {
  firstName: 'Bob',
  lastName: 'Swiss',
  age: 45,
};

const fullName: string = `${student.firstName} ${student.lastName}.`;
console.log('The students full name is', fullName);

student.livesInIrvine = true;
student.previousOccupation = 'teacher';

console.log('Does he live in Irvine', student.livesInIrvine);
console.log('His previous occupation was', student.previousOccupation);
console.log('The value of my object is', student);
console.log('This is a', typeof student);

interface Vehicle {
  make: string;
  model: string;
  year: number;
  color?: string;
  isConvertible?: boolean;
}

interface Pet {
  name?: string;
  kind?: string;
}

const vehicle: Vehicle = {
  make: 'Mazda',
  model: 'MX -5',
  year: 2024,
};

vehicle['color'] = 'blue';
vehicle['isConvertible'] = true;

console.log('My vehicle is', vehicle['color']);
console.log('My vehicle is convertible', vehicle['isConvertible']);
console.log('My whole object looks like this:', vehicle);
console.log('My vehicle is a type of', typeof vehicle);

const pet: Pet = {
  name: 'Foxy',
  kind: 'Husky',
};

delete pet.name;
delete pet.kind;

console.log('Value of pet is', pet);
console.log('The pet is a type of', typeof pet);
