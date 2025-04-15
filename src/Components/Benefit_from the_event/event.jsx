import { CircleCheckBig } from "lucide-react"
import audience from "./audience"
const Event = () => {
  return (
    <div className="container space-y-6">
      <h3 className="font-lato font-bold uppercase">For whom?</h3>
      <div className="flex flex-col gap-6 lg:flex-row lg:justify-between lg:gap-10">
        <h1 className="font-lato font-black text-[32px] lg:text-[46px] leading-tight">
          Who will benefit from the event:
        </h1>
        <ul className="space-y-4">
          {audience.map((item, idx) => (
            <li key={idx} className="flex gap-4 items-start">
              <CircleCheckBig color="red" className="min-w-[24px] mt-1" />
              <p>{item}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
export default Event
