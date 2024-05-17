// import { Animator, FadeIn, FadeOut, MoveIn, MoveOut, ScrollContainer, ScrollPage, Sticky } from "react-scroll-motion";
// import Navbar from "./Navbar";

// export default function Home() {
//   return (
//   <>
//   <ScrollContainer>
//     <ScrollPage >
//         <Animator animation={ MoveIn(0, 3000)}>
//             <Navbar/>
//         </Animator>
//     </ScrollPage>
//   </ScrollContainer>
//   </>
//   );
// }
import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Wai from './Wai'
import Projects from './Projects'
import Connect from './Connect'

export default function Home() {
  return (
    <div>
      <Navbar />
				<Hero/>
				<Wai />
				<Projects />
				<Connect />
    </div>
  )
}

