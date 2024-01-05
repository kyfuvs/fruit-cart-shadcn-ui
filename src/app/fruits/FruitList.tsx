// my-next/src/app/fruits/FruitList.tsx
import React from 'react';
import Image from 'next/image';
import { MyProps } from './MyProps';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  

interface FruitListProps {
  data: MyProps;
}


const FruitList: React.FC<FruitListProps> = ({ data }) => {
  const { name,price,image,description,detail } = data;

  return (
    <Card className=' flex flex-col items-center hover:bg-slate-50'>
     <CardHeader>
     <CardTitle >{name}</CardTitle>
      <CardDescription>{description}</CardDescription>
     </CardHeader>

     <CardContent >
        <Image className='rounded-md'
            src={`/${image}`}
            width={300}
            height={300}
            alt='Image'
        />
     </CardContent>
    <CardFooter className='flex flex-col items-center'>
      <p>{`$HKD ${price}`}</p>
      <p>{`Origin: ${detail.origin}`}</p>
      <p>{`Year: ${detail.year}`}</p>
    </CardFooter>
  </Card>
  
  );
}

export default FruitList;
