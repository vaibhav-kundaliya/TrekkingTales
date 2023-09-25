import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import img1 from "../../Assests/images/homepage/aboutImage1.jpg";
import img2 from "../../Assests/images/homepage/aboutImage2.jpg";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function About() {
   const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("lg"));
   const isLargeScreen = useMediaQuery((theme) => theme.breakpoints.up("lg"));

   let img_col = 1;
   let img_width = 400;
   if (isSmallScreen) {
      img_col = 2;
      img_width = 800;
   }
   if (isLargeScreen) {
      img_col = 1;
      img_width = 400;
   }
   return (
      <Container maxWidth="lg">
         <Grid container spacing={2} sx={{ justifyContent: "space-evenly" }}>
            <Grid>
               <ImageList
                  cols={img_col}
                  sx={{
                     margin: 0,
                     width: { lg: 400 },
                  }}
               >
                  <ImageListItem>
                     <img src={img1} />
                  </ImageListItem>
                  <ImageListItem>
                     <img src={img2} />
                  </ImageListItem>
               </ImageList>
            </Grid>
            <Grid
               lg={6}
               item
               sx={{
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
               }}
            >
               <Typography>
                  <p>
                     It’s a big wide world out there. A world of cultural charms and natural wonders; of mega-cities and remote outposts; of paths to cross and lessons to learn; of limitless kindness
                     and harsh realities.
                  </p>
                  <p>
                     We travel to enquire, to hear stories and to be awestruck by incredible scenery. To witness the ingenuity and defiance of individuals and the remarkable output of their
                     cooperation. To be humbled by the history of yesterday, informed about the politics of today and excited by the possibilities of tomorrow.
                  </p>{" "}
                  <p> We travel to have fun.</p> <p>Anywhere We Roam is the story of our travels. The moments that moved us, the characters we encountered and the stage upon which it is all set.</p>{" "}
                  <p>It’s a big wide world out there, come see it with us</p>
               </Typography>
            </Grid>
         </Grid>
         <br />
         <hr />
         <Grid container sx={{justifyContent:'space-evenly', textAlign:"center", gap:"1rem"}}>
            <Box>Blogger of the Year, <br /><b> British Guild of Travel Writers (2022)</b></Box>
            <Box>Blogger of the Year, <br /><b> TravMedia Awards (2021)</b></Box>
            <Box>Blogger of the Year, <br /><b> Blogosphere Awards (2021)</b></Box>
            <Box>Blogger of the Year, <br /><b> Travel Media Awards (2020)</b></Box>
         </Grid>
      </Container>
   );
}
