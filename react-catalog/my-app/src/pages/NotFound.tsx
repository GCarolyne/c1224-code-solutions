import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <div className="flex">
      <Link to="/">
        <h2>Nothing was Found</h2>
      </Link>
    </div>
  );
}
