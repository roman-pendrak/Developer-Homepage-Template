import { IconButton, Link } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { SocialMediaLink } from "../constants/profileData";

type Props = {
  data: SocialMediaLink;
  sidebar?: boolean;
};

const SocialMediaIcon = ({ data, sidebar }: Props) => {
  if (data.name === "GitHub") {
    return (
      <IconButton name="GitHub">
        <Link
          aria-label={data.name}
          href={data.link}
          target="_blank"
          rel="noopener"
        >
          <GitHubIcon
            sx={{
              color: "white",
              fontSize: sidebar ? "42px" : "32px",
              "&:hover": {
                color: "gray",
              },
            }}
          />
        </Link>
      </IconButton>
    );
  }
  if (data.name === "LinkedIn") {
    return (
      <IconButton name="LinkedIn">
        <Link
          aria-label={data.name}
          href={data.link}
          target="_blank"
          rel="noopener"
        >
          <LinkedInIcon
            sx={{
              color: "white",
              fontSize: sidebar ? "42px" : "32px",
              "&:hover": {
                color: "gray",
              },
            }}
          />
        </Link>
      </IconButton>
    );
  }
  if (data.name === "YouTube") {
    return (
      <IconButton name="YouTube">
        <Link
          aria-label={data.name}
          href={data.link}
          target="_blank"
          rel="noopener"
        >
          <YouTubeIcon
            sx={{
              color: "white",
              fontSize: sidebar ? "42px" : "32px",
              "&:hover": {
                color: "gray",
              },
            }}
          />
        </Link>
      </IconButton>
    );
  }
  if (data.name === "Instagram") {
    return (
      <IconButton name="Instagram">
        <Link
          aria-label={data.name}
          href={data.link}
          target="_blank"
          rel="noopener"
        >
          <InstagramIcon
            sx={{
              color: "white",
              fontSize: sidebar ? "42px" : "32px",
              "&:hover": {
                color: "gray",
              },
            }}
          />
        </Link>
      </IconButton>
    );
  }
  if (data.name === "Facebook") {
    return (
      <IconButton name="Facebook">
        <Link
          aria-label={data.name}
          href={data.link}
          target="_blank"
          rel="noopener"
        >
          <FacebookIcon
            sx={{
              color: "white",
              fontSize: sidebar ? "42px" : "32px",
              "&:hover": {
                color: "gray",
              },
            }}
          />
        </Link>
      </IconButton>
    );
  }
  if (data.name === "Twitter") {
    return (
      <IconButton name="Twitter">
        <Link
          aria-label={data.name}
          href={data.link}
          target="_blank"
          rel="noopener"
        >
          <TwitterIcon
            sx={{
              color: "white",
              fontSize: sidebar ? "42px" : "32px",
              "&:hover": {
                color: "gray",
              },
            }}
          />
        </Link>
      </IconButton>
    );
  }

  return null;
};

export default SocialMediaIcon;
