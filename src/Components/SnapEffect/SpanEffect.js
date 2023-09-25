import React from "react";
import map1 from "../../Assests/images/homepage/map1.png";
import map2 from "../../Assests/images/homepage/map2.png";
import map3 from "../../Assests/images/homepage/map3.png";
import map4 from "../../Assests/images/homepage/map4.png";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
export default function SpanEffect() {
   const MapTextList = [
      {
         id: 1,
         img: map1,
         country: "Asia",
      },
      {
         id: 2,
         img: map2,
         country: "Europe",
      },
      {
         id: 3,
         img: map3,
         country: "American",
      },
      {
         id: 4,
         img: map4,
         country: "Austrelia",
      },
   ];

   const iterator = MapTextList.map((item) => (
      <div
         style={{
            backgroundImage: `radial-gradient(
         rgba(147, 147, 217, 0.13 ), rgba(48, 62, 73, .80)),url(${item.img})`,
            height: "100vh",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            scrollSnapAlign: "center",
            scrollSnapStop: "always"
         }}
         key={item.id}
      >
         <Box
            sx={{
               display: "flex",
               flexDirection: "row",
               gap: 5,
               width: "fit-content",
               height: "fit-content",
            }}
         >
            <Typography component="div" fontSize={132}>
               {item.country}
            </Typography>
         </Box>
      </div>
   ));

   return (
      <div
         style={{
            height: "100vh",
            overflowY: "scroll",
            scrollSnapType: "y mandatory",
         }}
      >
         {iterator}
      </div>
   );
}
