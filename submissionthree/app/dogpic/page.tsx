'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image';
import SpinnyPics from '../components/spinnypics';

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
    <div className="w-full flex items-center justify-center">
      {pic && <SpinnyPics imageUrl={pic}/>}
    </div>
  )
}

export default DogPic