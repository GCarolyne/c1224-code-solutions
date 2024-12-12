/* exported getInitialsOfPerson */
interface Person {
  firstName: string;
  lastName: string;
}

function getInitialsOfPerson(person: Person): string {
  const firstName: string = person.firstName[0];
  const lastName: string = person.lastName[0];
  const initials: string = firstName + lastName;
  return initials;
}
