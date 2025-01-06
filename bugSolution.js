```javascript
import Link from 'next/link';

function MyComponent() {
  return (
    <div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>      
    </div>
  );
}

// Ensure that pages/ directory exists and contains index.js and about.js files.

export default MyComponent;
```