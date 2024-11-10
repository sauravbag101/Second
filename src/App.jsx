
import './App.css'
import React from 'react'
import Navbar from './Components/Navbar'
import ImageGallery from './Components/ImageGallery'
import AllData from './Components/AllData'
import Text from './Components/Text'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Text/>
      <ImageGallery/>
      <AllData/>
    </div>
  )
}

export default App
