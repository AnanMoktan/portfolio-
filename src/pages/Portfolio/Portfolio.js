import React, { useState } from "react";
import "./Portfolio.css";
import {
  CardActionArea,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Grow,
  Typography,
} from "@mui/material";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import resumeData from "../../utils/resumeData";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";

const Portfolio = () => {
  const [tabValue, setTabValue] = useState("All");
  const [projectDialog, setProjectDialog] = useState(false);

  return (
    <>
      <Grid container spacing={1} className=" section pb_45 pt_45">
        {/*Title */}
        <Grid item className="section_title mb_20">
          <span></span>
          <h6 className="section_title_text">Portfolio</h6>
        </Grid>

        {/* Tabs */}
        <Grid item xs={12}>
          <Tabs
            value={tabValue}
            indcatorColor="white"
            className="customTabs"
            onChange={(event, newValue) => setTabValue(newValue)}
          >
            <Tab
              label="All"
              value="All"
              className={
                tabValue == "All" ? "customTabs_item active" : "customs_item"
              }
            />
            {[...new Set(resumeData.projects.map((item) => item.tag))].map(
              (tag) => (
                <Tab
                  label={tag}
                  value={tag}
                  className={
                    tabValue == tag ? "customTabs_item active" : "customs_item"
                  }
                />
              )
            )}
          </Tabs>
        </Grid>
        {/*projects */}
        <Grid item xs={12}>
          <Grid container spacing={2}>
            {resumeData.projects.map((project) => (
              <>
                {tabValue == project.tag || tabValue == "All" ? (
                  <Grid items xs={12} sm={6} md={4}>
                    <Grow in timeout={1000}>
                      <Card
                        className="CustomCard"
                        onClick={() => setProjectDialog(project)}
                      >
                        <img
                          className="customCard_image"
                          src={project.image}
                          alt="my_image"
                        />

                        <CardContent>
                          <Typography
                            variant={"body2"}
                            className="customCard_title"
                          >
                            {project.title}
                          </Typography>
                          <Typography
                            variant="caption"
                            className="customCard_caption"
                          >
                            {project.caption}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grow>
                  </Grid>
                ) : null}
              </>
            ))}
          </Grid>
        </Grid>
        <Dialog
          open={projectDialog}
          onClose={() => setProjectDialog(false)}
          className="projectDialog"
          maxWidth={"lg"}
          fullWidth
        >
          <DialogTitle onClose={() => setProjectDialog(false)}>
            {projectDialog.title}
          </DialogTitle>
          <img
            src={projectDialog.image}
            alt=""
            className="projectDialog_image"
          />
          <DialogContent>
            <Typography className="projectDialog_description">
              {projectDialog.description}
            </Typography>
          </DialogContent>
          <DialogActions className="projectDialog_description">
            {projectDialog?.links?.map((link) => (
              <a
                href={link.link}
                target="_blank"
                className="projectDialog_icon"
              >
                {link.icon}
              </a>
            ))}
          </DialogActions>
        </Dialog>
      </Grid>
    </>
  );
};

export default Portfolio;
