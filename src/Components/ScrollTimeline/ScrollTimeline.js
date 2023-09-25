import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import MapIcon from "@mui/icons-material/Map";
import 'react-vertical-timeline-component/style.min.css';
import css from "./ScrollTimeline.module.css"
import { Container } from "@mui/material";

let timelineElement = [
   {
      id: 1,
      title: "Lorem ipsum dolor sit amet",
      location: "TechBlogger Conference",
      description: "Received the prestigious Top Innovator Award at the TechBlogger Conference in San Francisco, USA.",
      date: "2018",
   },
   {
      id: 2,
      title: "Top Innovator Award.",
      location: "Lorem, ipsum.",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quibusdam quasi recusandae, ab sint labore.",
      date: "2018",
   },
   {
      id: 3,
      title: "Lorem ipsum dolor sit amet.",
      location: "Lorem, ipsum.",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quibusdam quasi recusandae, ab sint labore.",
      date: "2018",
   },
   {
      id: 4,
      title: "Lorem ipsum dolor sit amet.",
      location: "Lorem, ipsum.",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quibusdam quasi recusandae, ab sint labore.",
      date: "2018",
   },
   {
      id: 5,
      title: "Lorem ipsum dolor sit amet.",
      location: "Lorem, ipsum.",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quibusdam quasi recusandae, ab sint labore.",
      date: "2018",
   },
];

export default function ScrollTimeline() {
   return (
      <div>
         <VerticalTimeline lineColor="black">
            <VerticalTimelineElement
               className="vertical-timeline-element--work"
               contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
               contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
               date="2015"
               iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
               icon={<MapIcon />}
               dateClassName={css.date}
            >
               <h2 className="vertical-timeline-element-title">Best blogger</h2>
               <h4 className="vertical-timeline-element-subtitle">Student Blogging Competition</h4>
               <p>It was my First blogging competition, which is organized by the british counsile every year.</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
               className="vertical-timeline-element--work"
               contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
               contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
               date="2017"
               iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
               icon={<MapIcon />}
               dateClassName={css.date}
            >
               <h2 className="vertical-timeline-element-title">Best Creative Blogger</h2>
               <h4 className="vertical-timeline-element-subtitle">Blog-A-Thon</h4>
               <p>This Blog-A-Thon was online blogging competition organized by unstop. </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
               className="vertical-timeline-element--work"
               contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
               contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
               date="2011 - present"
               iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
               icon={<MapIcon />}
               dateClassName={css.date}
            >
               <h3 className="vertical-timeline-element-title">Best Story Telling</h3>
               <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
               <p>Creative Direction, User Experience, Visual Design, Project Management, Team Leading</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
               className="vertical-timeline-element--work"
               contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
               contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
               date="2011 - present"
               iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
               icon={<MapIcon />}
               dateClassName={css.date}
            >
               <h3 className="vertical-timeline-element-title">Creative Director</h3>
               <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
               <p>Creative Direction, User Experience, Visual Design, Project Management, Team Leading</p>
            </VerticalTimelineElement>
         </VerticalTimeline>
      </div>
   );
}
