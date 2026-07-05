import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi"

const contactDetails = [
  {
    id: 1,
    icon: <HiOutlineMail className="text-2xl text-blue-950" />,
    label: "Email",
    value: "nelutionllc@gmail.com",
    href: "mailto:nelutionllc@gmail.com",
  },
  {
    id: 2,
    icon: <HiOutlinePhone className="text-2xl text-blue-950" />,
    label: "Phone",
    value: "+1 (682) 583-1546",
    href: "tel:+16825831546",
  },
  {
    id: 3,
    icon: <HiOutlineLocationMarker className="text-2xl text-blue-950" />,
    label: "Location",
    value: "Dallas, Texas",
    href: null,
  },
]

const Contact = () => {
  return (
    <div className="py-16 bg-white">
      <div className="w-[80%] mx-auto flex flex-col lg:flex-row gap-12">

        {/* Left — heading + contact info */}
        <div className="flex-1 flex flex-col gap-8">
          <div>
            <h2 className="text-3xl sm:text-4xl text-blue-950 font-black leading-tight">Contact Us</h2>
            <p className="mt-3 text-gray-500 text-sm leading-relaxed">
              Have questions or ready to get started? Reach out and we&apos;ll get back to you promptly.
            </p>
          </div>

          <div>
            <h3 className="text-blue-950 font-bold text-xl">Damber Bokati</h3>
            <p className="text-gray-500 text-sm mt-1">Founder & CEO, Nelution LLC</p>
          </div>

          <div className="flex flex-col gap-5">
            {contactDetails.map((item) => (
              <div key={item.id} className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-blue-950 font-medium text-sm hover:text-blue-700 transition-colors duration-200"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-blue-950 font-medium text-sm">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — form */}
        <div className="flex-1 bg-gray-50 rounded-xl p-8 border border-gray-100">
          <h3 className="text-blue-950 font-semibold text-lg mb-6">Send us a message</h3>
          <form className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="Your name"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-200 text-sm text-gray-700 outline-none focus:border-blue-950 transition-colors duration-200 bg-white"
              />
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-200 text-sm text-gray-700 outline-none focus:border-blue-950 transition-colors duration-200 bg-white"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="px-4 py-3 rounded-lg border border-gray-200 text-sm text-gray-700 outline-none focus:border-blue-950 transition-colors duration-200 bg-white"
            />
            <textarea
              rows={5}
              placeholder="Tell us about your business and what you need..."
              className="px-4 py-3 rounded-lg border border-gray-200 text-sm text-gray-700 outline-none focus:border-blue-950 transition-colors duration-200 bg-white resize-none"
            />
            <button
              type="submit"
              className="bg-blue-950 text-white font-semibold text-sm py-3 px-6 rounded-lg hover:bg-blue-900 transition-colors duration-200 cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </div>
  )
}

export default Contact
