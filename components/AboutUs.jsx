"use client"

import { useState } from "react"
import Image from "next/image"
import { MapPin, Phone, Mail, Globe } from "lucide-react"
import Navbar from "./Navbar"
import { Dialog, DialogContent } from "./ui/dialog"

const AboutUs = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  const services = [
    "Interest-free Qarze Hasana loans",
    "Business development loans for small enterprises",
    "Education loans for students",
    "Healthcare financing for medical treatments",
    "Agricultural loans for farmers",
    "Women empowerment through microfinance",
    "Skills development and training programs",
    "Financial literacy workshops",
    "Community development initiatives",
    "Emergency relief funds",
    "Green energy loans for sustainable projects",
  ]

  const certificates = [
    {
      src: "/images/certificate-of-incorporation.jpg",
      alt: "Certificate of Incorporation",
      title: "Certificate of Incorporation",
    },
    {
      src: "/images/secp-registration.jpg",
      alt: "SECP Registration",
      title: "SECP Registration",
    },
    {
      src: "/images/tax-exemption-certificate.jpg",
      alt: "Tax Exemption Certificate",
      title: "Tax Exemption Certificate",
    },
  ]

  return (
    <div className="bg-gradient-to-br from-green-800 via-green-700 to-teal-600 min-h-screen text-white">
      <Navbar />

      <section className="pt-20 pb-16">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-bold mb-6 text-center">Welcome to Saylani Micro Finance</h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            A non-profit organization dedicated to empowering communities through interest-free microfinance solutions,
            fostering economic growth and social development across Pakistan.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white/10 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-8 text-center">About Us</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg mb-6">
                At Saylani Micro Finance, we are committed to providing accessible financial services to underserved
                communities. Our mission is to alleviate poverty and promote sustainable development through
                interest-free loans and comprehensive support programs.
              </p>
              <p className="text-lg mb-6">
                With a dedicated team of professionals and a wide network of community partners, we strive to create
                lasting positive impact in the lives of individuals and families across Pakistan.
              </p>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/assets/about/saylani-office.jpg"
                alt="Saylani Micro Finance Office"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white/10 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-8 text-center">Our Certificates</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className="cursor-pointer transform hover:scale-105 transition-transform duration-300"
                onClick={() => setSelectedImage(cert.src)}
              >
                <Image
                  src={cert.src || "/placeholder.svg"}
                  alt={cert.alt}
                  width={400}
                  height={500}
                  className="rounded-lg shadow-lg"
                />
                <p className="mt-4 text-center text-lg">{cert.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white/10 backdrop-blur-sm">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-8 text-center">Our Services</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:bg-white/10 transition-all duration-300"
              >
                <p>{service}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-8 text-center">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <MapPin className="w-6 h-6 mr-4 text-yellow-300" />
                  <span>Office 205, Green Tower, Plot 15, Sector F-7 Markaz, Islamabad, Pakistan</span>
                </li>
                <li className="flex items-center">
                  <Phone className="w-6 h-6 mr-4 text-yellow-300" />
                  <span>051-2345678</span>
                </li>
                <li className="flex items-center">
                  <Mail className="w-6 h-6 mr-4 text-yellow-300" />
                  <a href="mailto:info@saylanimicrofinance.com" className="hover:text-yellow-300 transition-colors">
                    info@saylanimicrofinance.com
                  </a>
                </li>
                <li className="flex items-center">
                  <Globe className="w-6 h-6 mr-4 text-yellow-300" />
                  <a
                    href="https://saylanimicrofinance.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-yellow-300 transition-colors"
                  >
                    saylanimicrofinance.com
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Send us a Message</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 rounded-lg bg-white/10 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-yellow-300"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 rounded-lg bg-white/10 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-yellow-300"
                />
                <textarea
                  placeholder="Your Message"
                  rows="4"
                  className="w-full p-3 rounded-lg bg-white/10 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-yellow-300"
                ></textarea>
                <button
                  type="submit"
                  className="bg-yellow-500 text-gray-900 font-semibold py-3 px-6 rounded-lg hover:bg-yellow-400 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl">
          <div className="relative w-full h-[80vh]">
            <Image src={selectedImage || "/placeholder.svg"} alt="Certificate" fill className="object-contain" />
          </div>
        </DialogContent>
      </Dialog>

      <footer className="bg-green-800 py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; 2023 Saylani Micro Finance. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default AboutUs

