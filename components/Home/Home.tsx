"use client"
import Contact from "./Contact/Contact"
import Hero from "./Hero/Hero"
import Services from "./Services/Services"
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs"

const Home = () => {
  return (
    <div className="overflow-hidden">
      <section id="home"><Hero /></section>
      <section id="services"><Services /></section>
      <section id="why-choose-us"><WhyChooseUs /></section>
      <section id="contact"><Contact /></section>
    </div>
  )
}

export default Home
