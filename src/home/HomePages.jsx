import React, { useState } from 'react'
import  Homes  from '../components/homes/Homes'
import Upcoming from '../components/Upcoming/Upcoming'
import { latest, recommended, upcome } from '../dummyData'
import Trending from '../components/trending/Trending'

const HomePages = () => {
  const [items,setItems] = useState(upcome)
  const [item,setItem] = useState(latest)
  const [rec,setRec] = useState(recommended)
  return (
    <>
        <Homes />
        <Upcoming items={items} Title="Upcoming Movies"/>
        <Upcoming items={item} Title="Latest Movies" />
        <Trending />
        <Upcoming items={rec} Title="Recommended Movies" />
    </>
  )
}

export default HomePages