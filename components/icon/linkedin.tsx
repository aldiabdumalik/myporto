import { Icon, type IconNode } from "lucide-react"
import type { ComponentProps } from "react"

const linkedinIcon: IconNode = [
  [
    "path",
    {
      d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6",
      key: "linkedin-path",
    },
  ],
  [
    "path",
    {
      d: "M2 9h4v12H2z",
      key: "linkedin-rect",
    },
  ],
  [
    "circle",
    {
      cx: "4",
      cy: "4",
      r: "2",
      key: "linkedin-circle",
    },
  ],
]

type LinkedinIconProps = Omit<ComponentProps<typeof Icon>, "iconNode">

export function LinkedinIcon(props: LinkedinIconProps) {
  return <Icon {...props} iconNode={linkedinIcon} />
}
