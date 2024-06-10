import Image from 'next/image'
import React from 'react'
import '../styling/animations.css'


function SpinnyPics({ imageUrl }: { imageUrl: string }) {
  return (
    <Image className="mt-96 spin rounded-full" src={imageUrl} width={500} height={500} alt="Picture of dogs" />
  )
}

export default SpinnyPics