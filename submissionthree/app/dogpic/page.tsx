'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image';

function DogPic() {
  const [pic, setPic] = useState('')

  const fetchData = async () => {
    try {
      const response = await fetch("/api/dogpic");
      if (response.ok) {
        const json = await response.json();
        setPic(json.message);
      }
    }
    catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className="flex items-center justify-center text-center">
      <Image width={700} height={700} src={pic} alt="Image of dog"></Image>
    </div>
  )
}

export default DogPic