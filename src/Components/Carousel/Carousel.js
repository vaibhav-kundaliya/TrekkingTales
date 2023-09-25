import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import Box from "@mui/material/Box";
import img1 from "../Utils/images/carosole/1.jpg"
import img2 from "../Utils/images/carosole/2.jpg"
import img3 from "../Utils/images/carosole/3.jpg"
import img4 from "../Utils/images/carosole/4.jpg"
import img5 from "../Utils/images/carosole/5.jpg"

const imgs = [img1, img2, img3, img4, img5]

function Item(props)
{
    return (
        <Box>
            <img src={props.img} style={{width:"100%", height:"600px", objectFit:"cover", }} />
        </Box>
    )
}

export default function Carousel() {
   var items = [
      {
          name: "Random Name #1",
          description: "Probably the most ranadasdaddom thing you have ever seen!"
      },
      {
          name: "Random Name #2",
          description: "Hello World!"
      }
  ]

  return (
      <Carousel indicators={false}>
          {
              imgs.map( (img) => <Item img={img} /> )
          }
      </Carousel>
  )
}
