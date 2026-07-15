import { IconName } from "@/components/icon"

export interface MenuItem {
  id: string
  label: string
  icon: IconName
  url: string
  as: string
}

const LIST_MENU: MenuItem[] = [
  { id: "menu-1", label: "Home", icon: "House", url: "/", as: "" },
  {
    id: "menu-2",
    label: "Code",
    icon: "TerminalWindowIcon",
    url: "/user",
    as: "",
  },
  { id: "menu-3", label: "User", icon: "User", url: "/user", as: "" },
  {
    id: "menu-4",
    label: "Github",
    icon: "GithubIcon",
    url: "/analytics",
    as: "",
  },
  {
    id: "menu-5",
    label: "Linkedin",
    icon: "LinkedinIcon",
    url: "/",
    as: "",
  },
]

export { LIST_MENU }
