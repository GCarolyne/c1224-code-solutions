interface Library {
  isbn: string;
  title: string;
  author: string;
}

const library: Library[] = [
  {
    isbn: '123-321-2222',
    title: '1984',
    author: 'George Orwell',
  },
  {
    isbn: '333-3333-333',
    title: 'Portrait of Dorian Gray',
    author: 'Oscar Wilde',
  },
  {
    isbn: '777-7777-7777',
    title: 'IQ84',
    author: ' Haruki Murakami',
  },
];

console.log('This is my array of books:', library);
console.log('A type of:', typeof library);

const libraryJson = JSON.stringify(library);

console.log('This is my json:', libraryJson);
console.log('A type:', typeof libraryJson);

const studentJSON = '{"number-id":9999, "name": "carolyne"}';

console.log('A type:', typeof studentJSON);

const studentObj = JSON.parse(studentJSON);

console.log('A type:', typeof studentObj);
