"use client"
import { servicesData } from "@/data/data"
import {
  BsLightningChargeFill,
  BsGlobe2,
  BsServer,
} from "react-icons/bs"
import {
  MdOutlineTouchApp,
  MdOutlineMenuBook,
  MdOutlineStorefront,
} from "react-icons/md"

const icons = [
  <BsLightningChargeFill key={1} />,
  <MdOutlineTouchApp key={2} />,
  <MdOutlineMenuBook key={3} />,
  <BsGlobe2 key={4} />,
  <BsServer key={5} />,
  <MdOutlineStorefront key={6} />,
]

const ServicesGrid = () => {
  return (
    <div className="w-[80%] mx-auto mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {servicesData.map((service, index) => (
        <div
          key={service.id}
          className={`relative bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col gap-4
            ${index === 5 ? "sm:col-span-2 lg:col-span-1" : ""}`}
        >
          {/* Icon */}
          <div className="w-12 h-12 rounded-xl bg-blue-950 flex items-center justify-center text-white text-xl shrink-0">
            {icons[index]}
          </div>

          {/* Text */}
          <div>
            <h3 className="text-blue-950 font-bold text-base mb-1">{service.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ServicesGrid
