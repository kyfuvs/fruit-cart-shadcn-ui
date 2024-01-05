// params
// FruitDetails({params})
// https://nextjs.org/docs/app/api-reference/functions/use-params
'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { TiArrowBack } from "react-icons/ti";
import { productData } from '../../../../data';
import Image from 'next/image';

export default function FruitDetails() {
  const params = useParams<{ id: string }>();
  const data = productData.find(item => item.id === parseInt(params.id));

  if (!data) {
    // Handle the case when the product data is not found
    return (
      <div>
        <Link href={'/'}>
          <TiArrowBack size={30} />
        </Link>
        {`Fruit not found!`}
      </div>
    );
  }

  const { name, image } = data;

  return (
    <div>
      <Link href={'/'}>
        <TiArrowBack size={30} />
      </Link>
      {`Fruit = ${params.id}`}
      <br/>
      <h1 className='text-3xl font-bold'>{name}</h1>
      <Image
          src={`/${image}`}
          width={300}
          height={300}
          alt='Image'
        />
      
    </div>
  );
}
