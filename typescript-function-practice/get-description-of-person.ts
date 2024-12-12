/* exported getDescriptionOfPerson */
interface Person {
  name: string;
  occupation: string;
  birthPlace: string;
}

function getDescriptionOfPerson(person: Person): string {
  const name: string = person.name;
  const occupation: string = person.occupation;
  const birthPlace: string = person.birthPlace;
  const description: string = `${name} is a ${occupation} from ${birthPlace}.`;
  return description;
}
