import React from 'react'
import Card from '../card/Card'
import Footer from '../Footer'
import DisplaySection from '../DisplaySection'
import Diary from '../Diary'
import Slider from '../carausel/Slider'
import './Main.css'
import Pop from '../Popular/Pop'




function Main() {
  return (
    <>
      <DisplaySection/>
      <Card/>
      <Slider/>
      <Diary/> 
      {/* <Pop/>  */}
      <Footer/>
    </>
  )
}

export default Main






// import React from 'react'
// import DisplaySection from '../DisplaySection'
// import Card from '../card/Card'

// export default function Home() {
//   return (
//     <>
//      {/* <DisplaySection/>  */}
//     <Card/>
//     </>
//   )
// }

  