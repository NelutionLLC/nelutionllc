import SectionHeading from "@/components/Helper/SectionHeading"
import { BsLightningChargeFill, BsGlobe, BsArrowRepeat, BsCurrencyDollar } from "react-icons/bs"
import { MdOutlineStorefront, MdOutlineTouchApp } from "react-icons/md"

const reasons = [
  {
    id: 1,
    icon: <MdOutlineTouchApp className="text-4xl text-blue-950" />,
    title: "Zero Technical Skill Required",
    description:
      "No coding, no hosting setup, no complex dashboards. If you can type and upload a photo, you can manage your entire website.",
  },
  {
    id: 2,
    icon: <MdOutlineStorefront className="text-4xl text-blue-950" />,
    title: "Built for Your Business Type",
    description:
      "Not a generic builder. Nelution understands restaurants, salons, gyms, clinics, and more — with content fields tailored exactly to your industry.",
  },
  {
    id: 3,
    icon: <BsLightningChargeFill className="text-4xl text-blue-950" />,
    title: "Live in Minutes, Not Weeks",
    description:
      "Skip the agency back-and-forth. Choose a template, fill in your details, and hit publish. Your site goes live the same day.",
  },
  {
    id: 4,
    icon: <BsGlobe className="text-4xl text-blue-950" />,
    title: "Your Own Domain, Included",
    description:
      "Connect your existing domain or use a free Nelution subdomain. SSL certificates are handled automatically — no extra setup.",
  },
  {
    id: 5,
    icon: <BsArrowRepeat className="text-4xl text-blue-950" />,
    title: "Always Up to Date",
    description:
      "Update your menu, hours, team, or product listings yourself, anytime. No waiting on a developer to make simple changes.",
  },
  {
    id: 6,
    icon: <BsCurrencyDollar className="text-4xl text-blue-950" />,
    title: "Affordable & Transparent Pricing",
    description:
      "Simple monthly plans with no hidden fees and no surprise invoices. Scale up when you're ready, or cancel anytime.",
  },
]

const WhyChooseUs = () => {
  return (
    <div className="py-16 bg-gray-50">
      <SectionHeading
        heading="Why Choose Us"
        subHeading="Everything you need to get your business online — without the hassle"
      />

      <div className="w-[80%] mx-auto mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {reasons.map((reason) => (
          <div
            key={reason.id}
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
          >
            <div className="mb-4">{reason.icon}</div>
            <h3 className="text-blue-950 font-semibold text-lg mb-2">{reason.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{reason.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default WhyChooseUs
