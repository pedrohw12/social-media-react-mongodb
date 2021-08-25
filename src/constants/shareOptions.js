// MUI icons
import { PermMedia, Label, Room, EmojiEmotions } from "@material-ui/icons";

export const shareOptions = [
  {
    title: "Photo or Video",
    icon: <PermMedia htmlColor="tomato" className="shareIcon" />,
  },
  { title: "Tag", icon: <Label htmlColor="blue" className="shareIcon" /> },
  { title: "Location", icon: <Room htmlColor="green" className="shareIcon" /> },
  {
    title: "Feelings",
    icon: <EmojiEmotions htmlColor="goldenrod" className="shareIcon" />,
  },
];
