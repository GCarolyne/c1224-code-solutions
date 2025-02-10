interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

async function fetchData(): Promise<void> {
  console.log('running');
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'GET',
    });
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const users = (await response.json()) as User[];
    console.log(users);
  } catch (error) {
    console.error('Error:', error);
  }
}

console.log('users');
fetchData();
