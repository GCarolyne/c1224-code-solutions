/* exported getFirstInitialOfPerson */
interface Person {
  firstName: string;
  lastName: string;
}

function getFirstInitialOfPerson(person: Person): string {
  const firstPerson: string = person.firstName[0];
  return firstPerson;
}
