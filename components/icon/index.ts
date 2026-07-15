import * as Lucide from "lucide-react"
import { GithubIcon } from "./github"
import { LinkedinIcon } from "@/components/icon/linkedin"
import { TerminalWindowIcon } from "@/components/icon/terminal-window"

export const Icons = {
  ...Lucide,
  GithubIcon,
  LinkedinIcon,
  TerminalWindowIcon,
}

export type IconName = keyof typeof Icons
