import React from 'react'
import { MContext } from './UseContext'
export default function Demo() {
  const {categories} = useContext(MContext)
  console.log(categories)
  return (
    <div>Demo</div>
  )
}
