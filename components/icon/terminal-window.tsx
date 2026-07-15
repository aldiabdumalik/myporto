import { Icon, type IconNode } from "lucide-react"
import type { ComponentProps } from "react"

const terminalWindowIcon: IconNode = [
  [
    "rect",
    {
      x: "1.25",
      y: "1.25",
      width: "21.5",
      height: "18.5",
      rx: "3.25",
      key: "window",
    },
  ],
  [
    "path",
    {
      d: "M7.375 14.25L10.625 11L7.375 7.75",
      key: "chevron",
    },
  ],
  [
    "path",
    {
      d: "M12.5 14H17.5",
      key: "line",
    },
  ],
]

type TerminalWindowIconProps = Omit<ComponentProps<typeof Icon>, "iconNode">

export function TerminalWindowIcon(props: TerminalWindowIconProps) {
  return <Icon {...props} iconNode={terminalWindowIcon} />
}
