import BlurText from "@/components/BlurText"
import CurvedLoop from "@/components/CurvedLoop"
import { Icons } from "@/components/icon"
import { LIST_MENU } from "@/lib/constants"
import Image from "next/image"
const HeroSection = () => {
  return (
    <div className="relative flex aspect-video flex-col justify-around overflow-hidden bg-red-500 p-8">
      <Image src={"/image/hero.png"} alt="Hero Image" fill priority />

      <div className="z-10 flex justify-between font-inter">
        <span className="font-inter text-xl">
          @ code by <strong>Abdu</strong>
        </span>
        <BlurText
          text="Passionate Creative Designer and Developer, dedicated to crafting
          innovative solutions and exceptional digital experiences through
          modern technologies"
          delay={100}
          animateBy="words"
          direction="top"
          className="flex w-150 flex-wrap justify-end text-right font-inter text-xl"
        />
      </div>

      <div className="z-10 flex flex-1 items-center justify-center font-inter">
        <CurvedLoop
          marqueeText="Creative Web Developer ✦ Mobile Developer ✦"
          curveAmount={0}
          interactive={false}
        />
      </div>

      <div className="z-10 flex h-17.5 w-114 justify-evenly self-center rounded-xl bg-[#171717] px-5 py-3">
        {Array.from(LIST_MENU, (menu) => {
          const IconComponent = Icons[menu.icon] as React.ComponentType<{
            size?: number
            className?: string
          }>
          return (
            <div
              key={menu.id}
              className="flex h-12.5 w-12.5 items-center justify-center rounded-full bg-[#262626]"
            >
              {IconComponent ? <IconComponent size={20} /> : null}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default HeroSection
