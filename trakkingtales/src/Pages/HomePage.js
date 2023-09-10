import React from "react";
import firstImage from "../Utils/images/homepage/firstImage.jpg";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import MapIcon from "@mui/icons-material/Map";
import PreviewIcon from "@mui/icons-material/Preview";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import ImageText from "../Components/ImageText/ImageText";


export default function HomePage() {
   return (
      <>
         <Container
            maxWidth="xl"
            sx={{
               padding: "0px !important",
            }}
         >
            <img src={firstImage} alt="" style={{ width: "100%", height: "550px", objectFit: "cover" }} />
         </Container>
         <Container
            maxWidth="md"
            sx={{
               backgroundColor: "#FFFF",
               marginTop: "-50px",
               position: "relative",
               display: "flex",
               justifyContent: "space-evenly",
               boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
               color: "navbar.main",
               gap: "30px",
               padding: "15px",
            }}
         >
            <Box width={"fit-content"} textAlign={"center"}>
               <HistoryEduIcon sx={{ fontSize: 50 }} />
               <br />
               50+ Blogs
            </Box>
            <Box width={"fit-content"} textAlign={"center"}>
               <MapIcon sx={{ fontSize: 50 }} />
               <br />
               200+ Places visited
            </Box>
            <Box width={"fit-content"} textAlign={"center"}>
               <PreviewIcon sx={{ fontSize: 50 }} />
               <br />
               41K+ Visitors
            </Box>
            <Box width={"fit-content"} textAlign={"center"}>
               <SubscriptionsIcon sx={{ fontSize: 50 }} />
               <br />
               4K+ Subscribers
            </Box>
         </Container>
         <Container maxWidth="xl" sx={{marginTop:"2rem"}}>
            <ImageText />
         </Container>
      </>
   );
}
