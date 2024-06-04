import Image from 'next/image'
import React from 'react'

function SpinnyDoggos({imageUrl}: {imageUrl: string}) {
  return (
    <Image src={imageUrl} alt="Picture of dogs"/>
  )
}

export default SpinnyDoggos