import GetStartedModal from "./GetStartedModal"
import ServicesGrid from "./ServicesSlider"

const Services = () => {
  return (
    <div className="py-20 bg-white">
      <div className="w-[80%] mx-auto mb-2">
        <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-2">What We Offer</p>
        <h2 className="text-3xl sm:text-4xl text-blue-950 font-black leading-tight">
          Everything your business<br className="hidden sm:block" /> needs to go online
        </h2>
      </div>

      <ServicesGrid />

      {/* CTA strip */}
      <div className="w-[80%] mx-auto mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 bg-blue-950 rounded-2xl px-8 py-6">
        <p className="text-white font-semibold text-lg">Ready to get your business online?</p>
        <GetStartedModal />
      </div>
    </div>
  )
}

export default Services
