// Material ui
import {
  RssFeed,
  Chat,
  PlayCircleFilledOutlined,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
  School,
} from "@material-ui/icons";

export const sidebarOptions = [
  { title: "Feed", icon: <RssFeed className="sidebarIcon" /> },
  { title: "Chats", icon: <Chat className="sidebarIcon" /> },
  {
    title: "Videos",
    icon: <PlayCircleFilledOutlined className="sidebarIcon" />,
  },
  { title: "Groups", icon: <Group className="sidebarIcon" /> },
  { title: "BooksMarks", icon: <Bookmark className="sidebarIcon" /> },
  { title: "Questions", icon: <HelpOutline className="sidebarIcon" /> },
  { title: "Jobs", icon: <WorkOutline className="sidebarIcon" /> },
  { title: "Events", icon: <Event className="sidebarIcon" /> },
  { title: "Courses", icon: <School className="sidebarIcon" /> },
];
