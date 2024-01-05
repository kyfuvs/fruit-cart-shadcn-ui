// pass data from 'Fruits' to 'FruitList'

// Ref Link 
// How to pass props to a functional React component 
// using typescript
// https://blog.wordbot.io/tech/how-to-pass-props-to-a-functional-react-component-using-typescript/#:~:text=By%20using%20TypeScript%20with%20React,World%20%7Bprops.name%7D.


// my-next/src/app/fruits/page.tsx
import React from 'react';
import FruitList from './FruitList';
import { productData } from '../../../data';
import Link from 'next/link';
import { MyProps } from './MyProps';

const Fruits: React.FC = () => {
  const fruits = productData;

  return (
    <div className='grid grid-cols-3 gap-3'>
      {fruits.map((data, i) => (
        <Link key={i} href={`/fruits/${i + 1}`}>
          <FruitList key={i} data={data} />
        </Link>
      ))}
    </div>
  );
}

export default Fruits;
