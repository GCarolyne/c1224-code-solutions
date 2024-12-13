'use strict';
function getInitialsOfPerson(person) {
  const firstName = person.firstName[0];
  const lastName = person.lastName[0];
  const initials = firstName + lastName;
  return initials;
}
