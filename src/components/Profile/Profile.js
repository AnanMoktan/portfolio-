import React from "react";
import "./Profile.css";
import { Typography } from "@mui/material";
import CustomTimeline, { CustomTimelineSeparator } from "../Timeline/Timeline";
import resumeData from "../../utils/resumeData";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { Timeline } from "@mui/icons-material";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineContent from "@mui/lab/TimelineContent";
import CustomButton from "../Button/Button";
import GetAppIcon from "@mui/icons-material/GetApp";

const downloadPDF = () => {
  const pdfFilePath = "../../assets/pdf/ResumeF.pdf"; // Replace with the actual path to your PDF file

  // Create an anchor element to initiate the download
  const anchor = document.createElement("a");
  anchor.href = pdfFilePath;
  anchor.download = "your-pdf-file.pdf"; // Specify the desired name for the downloaded file
  anchor.click();
};

const CustomTimelineItem = ({ title, text, link }) => (
  <TimelineItem>
    <CustomTimelineSeparator />
    <TimelineContent className="timeline_content">
      {link ? (
        <Typography className="timelineItem_text">
          <span>{title}:</span>{" "}
          <a href={link} target="_blank">
            {text}
          </a>
        </Typography>
      ) : (
        <Typography className="timelineItem_text">
          <span>{title}</span>
          {text}
        </Typography>
      )}
    </TimelineContent>
  </TimelineItem>
);
const Profile = () => {
  return (
    <div className="profile container_shadow">
      <div className="profile_name">
        <Typography className="name">{resumeData.name}</Typography>
        <Typography className="title">{resumeData.title}</Typography>
      </div>
      <div className="profile_image">
        <img
          src={require("../../assets/images/od134451 (1).JPG")}
          alt="my_image"
        />
      </div>
      <div className="profile_information">
        <CustomTimeline icon={<PersonOutlineOutlinedIcon />}>
          <CustomTimelineItem title="Name:" text={resumeData.name} />
          <CustomTimelineItem title="Title:" text={resumeData.title} />
          <CustomTimelineItem title="Email:" text={resumeData.email} />
          {Object.keys(resumeData.socials).map((key) => (
            <CustomTimelineItem
              title={key}
              text={resumeData.socials[key].text}
              link={resumeData.socials[key].link}
            />
          ))}
        </CustomTimeline>
        <div className="button_container custom_btn">
          <CustomButton
            text={"Download Cv"}
            myFunction={downloadPDF}
            icon={<GetAppIcon />}
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
