// React
import { ChangeEvent, Fragment, useEffect, useState } from "react";

// Material-UI Components
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { Theme } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import Fab from "@mui/material/Fab";
import Grow from "@mui/material/Grow";
import Link from "@mui/material/Link";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import useMediaQuery from "@mui/material/useMediaQuery";

// Material-UI Icons
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";

// Email
import emailjs from "@emailjs/browser";

// Snackbars
import { enqueueSnackbar } from "notistack";

// Images & CSS
// TODO - Uncomment next line after adding profile image
// import profile from "../assets/profile-transparent.png";
import "../Home.css";
import {
  projectList,
  skills,
  fullName,
  location,
  occupation,
  greeting,
  aboutMe,
  socialMedia,
  serviceKey,
  templateKey,
  publicKey,
} from "../constants/profileData";

// Custom Components
import SocialMediaIcon from "../components/SocialMediaIcon";

const pages = ["Home", "About", "Projects", "Contact"];

const customColor = "#005b96";

function Home() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const growLinks = setTimeout(() => {
      document.body.style.cursor = "auto";
    }, 3000);

    const enableScroll = setTimeout(() => {
      setShowScroll(true);
      document.body.style.overflow = "auto";
    }, 3000);

    return () => {
      clearTimeout(growLinks);
      clearTimeout(enableScroll);
    };
  }, []);

  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  interface projectListItem {
    imageSource: string;
    title: string;
    description: string;
    buttonTitle: string;
    buttonUrl: string;
  }

  const smallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleNameUpdate = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleEmailUpdate = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleMessageUpdate = (event: ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  return (
    <Box id="home" className="bg-gray-100">
      <AppBar
        position="sticky"
        className="bg-gradient-to-b from-black to-primary"
        sx={{ pointerEvents: `${showScroll ? "auto" : "none"}` }}
      >
        <Container
          maxWidth="lg"
          sx={{ pointerEvents: `${showScroll ? "auto" : "none"}` }}
        >
          <Grow in={true} timeout={4500}>
            <Toolbar disableGutters sx={{ height: "85px" }}>
              <IconButton
                name="buttonContainerOnly"
                disableRipple
                sx={{
                  "&:hover": {
                    cursor: "text",
                  },
                }}
              >
                <Avatar
                  // TODO - Uncomment next line after adding profile image
                  // src={profile}
                  alt="avatar image"
                  sx={{
                    width: 60,
                    height: 60,
                    backgroundColor: "#005b96",
                  }}
                />
                <Typography
                  component="span"
                  sx={{
                    fontSize: "18px",
                    color: "white",
                    paddingLeft: { xs: "10px", md: "20px" },
                  }}
                >
                  {fullName}
                  <br></br>
                  <Typography
                    component="span"
                    sx={{
                      fontSize: "12px",
                      color: "white",
                    }}
                  >
                    {location}
                  </Typography>
                </Typography>
              </IconButton>
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", md: "flex" },
                  justifyContent: "flex-end",
                }}
              >
                {pages.map((page) => (
                  <Link
                    key={page}
                    aria-label={page}
                    href={`#${page.toLowerCase()}`}
                  >
                    <Button
                      name={page}
                      sx={{
                        textTransform: "none",
                        fontSize: "18px",
                        m: 3,
                        color: "white",
                        "&:hover": {
                          color: "gray",
                        },
                      }}
                    >
                      {page}
                    </Button>
                  </Link>
                ))}
                {socialMedia.map((data) => {
                  return <SocialMediaIcon key={data.name} data={data} />;
                })}
              </Box>
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "flex", md: "none" },
                  justifyContent: "flex-end",
                }}
              >
                <MenuIcon onClick={() => setDrawerOpen(true)} />
              </Box>
            </Toolbar>
          </Grow>
        </Container>
      </AppBar>
      <Box
        className="bg-container"
        sx={{
          height: { xs: "90vh", md: "90vh" },
          display: "flex",
          alignItems: "center",
          paddingBottom: { xs: "15vh", md: "0px" },
        }}
      >
        <Grow in={true} timeout={4500}>
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              flexDirection: "column",
              backgroundColor: "#242424",
              borderRadius: "0 5px 5px 0",
              paddingX: "5px",
              paddingY: "20px",
            }}
          >
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                flexDirection: "column",
              }}
            >
              {socialMedia.map((data) => {
                return (
                  <SocialMediaIcon key={data.name} data={data} sidebar={true} />
                );
              })}
            </Box>
          </Box>
        </Grow>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            width: "100%",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <Grow in={true} timeout={4500}>
            <Typography
              variant="h1"
              component="span"
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "50px", md: "100px" },
              }}
            >
              {fullName}&nbsp;
            </Typography>
          </Grow>
          <Grow in={true} timeout={4500}>
            <Typography>{occupation}</Typography>
          </Grow>
          <Grow in={true} timeout={4500}>
            <Link aria-label="projects" href="#projects">
              <Button
                name="projects and contributions"
                variant="contained"
                sx={{
                  backgroundColor: `${customColor}`,
                  fontSize: { xs: "12px", md: "18px" },
                  fontWeight: "bold",
                  marginTop: "50px",
                  paddingX: "35px",
                  paddingY: "15px",
                }}
              >
                Projects & Contributions
              </Button>
            </Link>
          </Grow>
          <Tooltip
            placement="top"
            title={
              <Typography component="span">
                Scroll Down To See More &#128526;
              </Typography>
            }
          >
            <KeyboardDoubleArrowDownIcon
              className="animate-ping infinite"
              sx={{
                visibility: `${showScroll ? "visible" : "hidden"}`,
                position: "absolute",
                bottom: { xs: "50px", md: "75px" },
                color: `${customColor}`,
                height: "32px",
                width: "32px",
                "&:hover": {
                  cursor: "pointer",
                },
              }}
            />
          </Tooltip>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            borderRadius: "0 5px 5px 0",
            paddingX: "5px",
            paddingY: "20px",
          }}
        >
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              flexDirection: "column",
              visibility: "hidden",
            }}
          >
            {socialMedia.map((data) => {
              return (
                <SocialMediaIcon key={data.name} data={data} sidebar={true} />
              );
            })}
          </Box>
        </Box>
      </Box>
      <Box component="div" className="bg-[#fafafa] pb-[75px]">
        <Container
          maxWidth="lg"
          sx={{
            pointerEvents: `${showScroll ? "auto" : "none"}`,
          }}
        >
          <Box
            id="about"
            sx={{
              paddingTop: "100px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              component="span"
              variant="h4"
              sx={{ fontWeight: "bold", textAlign: "center" }}
            >
              About Me
            </Typography>
            <Box
              component="div"
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "15px",
                marginBottom: "15px",
              }}
            >
              <Box
                sx={{
                  width: "35px",
                  height: "5px",
                  backgroundColor: `${customColor}`,
                  borderRadius: "5px",
                }}
              />
            </Box>
            <Typography
              component="span"
              color="secondary"
              sx={{ fontWeight: "bold", textAlign: "center" }}
            >
              A brief background of my career and some of my experiences and
              skills
            </Typography>
            <Box
              display="flex"
              justifyContent="space-around"
              justifyItems="center"
            >
              <Box
                marginTop="75px"
                width="100%"
                display="flex"
                flexDirection={{ xs: "column", md: "row" }}
              >
                <Box
                  paddingBottom={{ xs: "50px", md: 0 }}
                  sx={{
                    textAlign: { xs: "center", md: "none" },
                    paddingRight: { xs: "0px", md: "50px" },
                  }}
                  flex="1"
                >
                  <Typography
                    variant="h5"
                    sx={{ fontWeight: "bold", marginBottom: "25px" }}
                  >
                    {/* &#128075 = hand wave emoji */}
                    {greeting} &#128075;
                  </Typography>
                  <Typography
                    component="span"
                    color="secondary"
                    sx={{ fontWeight: "bold" }}
                  >
                    {aboutMe.map((paragraph: string, index: number) => {
                      return (
                        <Fragment key={index}>
                          <Box key={index} component="p">
                            {paragraph}
                          </Box>
                          <br></br>
                        </Fragment>
                      );
                    })}
                  </Typography>
                  <Link key="#contact" aria-label="#contact" href="#contact">
                    <Button
                      name="contact me"
                      variant="contained"
                      sx={{
                        backgroundColor: `${customColor}`,
                        fontSize: "18px",
                        fontWeight: "bold",
                        marginTop: "50px",
                        paddingX: "35px",
                        paddingY: "15px",
                      }}
                    >
                      Contact Me
                    </Button>
                  </Link>
                </Box>
                <Box
                  flex="1"
                  sx={{
                    textAlign: { xs: "center", md: "none" },
                    paddingRight: { xs: "0px", md: "50px" },
                    paddingTop: { xs: "50px", md: 0 },
                  }}
                >
                  {skills.map((skillset: string[], index: number) => {
                    return (
                      <Box key={index} sx={{ marginBottom: "25px" }}>
                        <Typography
                          variant="h5"
                          sx={{ fontWeight: "bold", marginBottom: "20px" }}
                        >
                          {skillset[0]}
                        </Typography>
                        {skillset.map((skill: string, index2: number) => {
                          return index2 !== 0 ? (
                            <Chip
                              key={index2}
                              sx={{
                                backgroundColor: `${customColor}33`,
                                marginRight: "10px",
                                marginBottom: "10px",
                              }}
                              label={
                                <Typography
                                  component="span"
                                  sx={{
                                    color: "primary",
                                    fontWeight: "bold",
                                    padding: "5px",
                                  }}
                                >
                                  {skill}
                                </Typography>
                              }
                            />
                          ) : null;
                        })}
                      </Box>
                    );
                  })}
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
      <Box component="div" className="bg-gray-100">
        <Container
          maxWidth="lg"
          sx={{
            pointerEvents: `${showScroll ? "auto" : "none"}`,
          }}
        >
          <Box
            id="projects"
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "auto",
              paddingTop: "100px",
            }}
          >
            <Typography
              component="span"
              variant="h4"
              sx={{ fontWeight: "bold", textAlign: "center" }}
            >
              Projects & Contributions
            </Typography>
            <Box
              component="div"
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "15px",
                marginBottom: "15px",
              }}
            >
              <Box
                sx={{
                  width: "35px",
                  height: "5px",
                  backgroundColor: `${customColor}`,
                  borderRadius: "5px",
                }}
              />
            </Box>
            <Typography
              component="span"
              color="secondary"
              sx={{
                fontWeight: "bold",
                textAlign: "center",
                marginBottom: "100px",
              }}
            >
              Some of my recent projects and contributions
            </Typography>
            {projectList.map((project: projectListItem) => {
              return (
                <Box
                  key={project.title}
                  display="flex"
                  justifyContent="space-around"
                  justifyItems="center"
                >
                  <Box
                    display="flex"
                    flexDirection={{ xs: "column", md: "row" }}
                    marginBottom="150px"
                  >
                    <Box
                      sx={{
                        textAlign: { xs: "center", md: "none" },
                      }}
                      flex="1"
                    >
                      <Paper
                        elevation={10}
                        sx={{
                          padding: "2px",
                          height: "auto",
                        }}
                      >
                        <img
                          alt={project.imageSource}
                          src={project.imageSource}
                          style={{ maxWidth: "100%", height: "auto" }} // Ensure the image scales within the container
                        />
                      </Paper>
                    </Box>
                    <Box
                      flex="1"
                      display="flex"
                      flexDirection="column"
                      justifyContent="center"
                      alignItems="center"
                      sx={{
                        textAlign: { xs: "center", md: "none" },
                        paddingTop: { xs: "50px", md: 0 },
                      }}
                    >
                      <Typography
                        variant="h4"
                        sx={{
                          fontWeight: "bold",
                          textAlign: "center",
                          marginBottom: "10px",
                        }}
                      >
                        {project.title}
                      </Typography>
                      <Typography
                        component="span"
                        color="secondary"
                        sx={{
                          fontWeight: "bold",
                          textAlign: "center",
                          width: "80%",
                        }}
                      >
                        {project.description}
                      </Typography>

                      <Tooltip
                        title={
                          <Typography component="span">
                            {project.buttonUrl}
                          </Typography>
                        }
                      >
                        <Link
                          href={project.buttonUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={project.title}
                        >
                          <Button
                            name={project.buttonTitle}
                            variant="contained"
                            sx={{
                              backgroundColor: `${customColor}`,
                              fontSize: "18px",
                              fontWeight: "bold",
                              marginTop: "25px",
                              paddingX: "35px",
                              paddingY: "15px",
                            }}
                          >
                            {project.buttonTitle}
                          </Button>
                        </Link>
                      </Tooltip>
                    </Box>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Container>
      </Box>
      <Box
        id="contact"
        className="bg-container"
        sx={{
          height: { xs: "90vh", md: "90vh" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box sx={{ width: { xs: "80vw", md: "40vw" } }}>
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold", textAlign: "center" }}
          >
            Contact Me
          </Typography>
          <Box
            component="div"
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "15px",
              marginBottom: "15px",
            }}
          >
            <Box
              sx={{
                width: "35px",
                height: "5px",
                backgroundColor: `${customColor}`,
                borderRadius: "5px",
              }}
            />
          </Box>
          <Typography
            color="secondary"
            sx={{
              fontWeight: "bold",
              textAlign: "center",
              marginBottom: "100px",
            }}
          >
            Contact me by submitting your message below and I will respond as
            soon as possible
          </Typography>

          <Container maxWidth="md">
            <Box sx={{ mb: 2 }}>
              <TextField
                value={name}
                onChange={handleNameUpdate}
                label="Name"
                sx={{ backgroundColor: "white" }}
                fullWidth
              />
            </Box>
            <Box sx={{ mb: 2 }}>
              <TextField
                value={email}
                onChange={handleEmailUpdate}
                label="Email"
                sx={{ backgroundColor: "white" }}
                fullWidth
              />
            </Box>
            <Box sx={{ mb: 2 }}>
              <TextField
                value={message}
                onChange={handleMessageUpdate}
                label="Message"
                multiline
                rows={smallScreen ? 5 : 10}
                fullWidth
                variant="outlined"
                sx={{ backgroundColor: "white" }}
              />
            </Box>
            <Button
              onClick={() => {
                if (!message || !email || !name) {
                  enqueueSnackbar("Empty Input", {
                    variant: "error",
                  });
                  return;
                }
                try {
                  emailjs
                    .send(
                      serviceKey,
                      templateKey,
                      {
                        from_name: name,
                        reply_to: email,
                        message,
                      },
                      publicKey
                    )
                    .then(() => {
                      enqueueSnackbar("Email Sent", {
                        variant: "success",
                      });
                    });
                } catch (error: any) {
                  enqueueSnackbar(error, {
                    variant: "error",
                  });
                }
              }}
              name="submit email"
              variant="contained"
              fullWidth
              sx={{
                backgroundColor: `${customColor}`,
                fontSize: "18px",
                fontWeight: "bold",
                paddingY: "15px",
              }}
            >
              Submit
            </Button>
          </Container>
        </Box>
      </Box>
      <AppBar
        position="relative"
        sx={{ top: "auto", bottom: 0 }}
        className="bg-gradient-to-b from-black to-primary"
      >
        <Toolbar sx={{ height: "85px" }}>
          <Link aria-label="top" href="#">
            <Fab
              aria-label="fab"
              name="fab"
              sx={{
                position: "absolute",
                zIndex: 1,
                top: -30,
                left: 0,
                right: 0,
                margin: "0 auto",
                boxShadow: "none",
                backgroundColor: `${customColor}`,
                color: "white",
                "&:hover": {
                  color: `${customColor}`,
                },
              }}
            >
              <KeyboardArrowUpIcon />
            </Fab>
          </Link>
          <Box
            sx={{
              display: "flex-col",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
              }}
            >
              <Divider />
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <Typography
                component="span"
                sx={{ fontSize: "12px", paddingTop: "10px" }}
              >
                &copy; 2023. Designed By <b>{fullName}</b>
              </Typography>
            </Box>
          </Box>
        </Toolbar>
        <Drawer
          anchor="top"
          open={drawerOpen}
          onClose={toggleDrawer}
          transitionDuration={500}
        >
          <List
            sx={{
              width: "100%",
              color: "white",
              backgroundColor: "#242424",
            }}
          >
            {pages.map((item, index) => (
              <Fragment key={index}>
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setDrawerOpen(false)}
                >
                  <ListItem sx={{ width: "100%" }}>
                    <ListItemText
                      primary={item}
                      sx={{
                        textAlign: "center",
                      }}
                    />
                  </ListItem>
                </a>

                {index !== pages.length - 1 && <Divider />}
              </Fragment>
            ))}
          </List>
        </Drawer>
      </AppBar>
    </Box>
  );
}
export default Home;
