import type { SiteConfig } from "@core/web/types"

export const config: SiteConfig = {
  business: {
    name: "Golden Roofing AZ",
    tagline: "Your Roof, Our Priority. Always.",
    phone: "(520) 285-6262",
    phoneHref: "tel:+15202856262",
    email: "info@goldenroofingaz.com",
    address: "123 Main St",
    city: "Tucson",
    serviceAreas: ["Tucson", "Oro Valley", "Marana", "Sahuarita", "Green Valley"],
    license: "ROC # 330789",
    since: "2005",
    google_rating: "4.9",
    review_count: "200",
    emergency: true,
    theme: "slate",
    niche: "roofing",
  },

  services: [
    { icon: "home", title: "Shingle Roofs", desc: "Expert installation and repair for durable and attractive shingle roofing systems.", urgent: false },
    { icon: "home", title: "Tile Roofs", desc: "Specializing in the repair and installation of beautiful and long-lasting tile roofs.", urgent: false },
    { icon: "home", title: "Flat Roofs", desc: "Professional services for flat roof repair, replacement, and new installations.", urgent: false },
    { icon: "sparkles", title: "Roof Coating", desc: "Extend your roof's life and improve energy efficiency with our advanced roof coating solutions.", urgent: false },
    { icon: "hammer", title: "Roof Replacement", desc: "Complete roof replacement services, ensuring a sturdy and reliable new roof for your property.", urgent: true },
    { icon: "wrench", title: "Roof Repair", desc: "Fast and effective repairs for all types of roof damage, preventing further issues.", urgent: true }
  ],

  testimonials: [
    { name: "Sarah J.", location: "Tucson, AZ", stars: 5, text: "Golden Roofing AZ replaced our old shingle roof last month, and the entire process was incredibly smooth. From the initial inspection to the final cleanup, their team was professional and efficient. The new roof looks fantastic, and we even got a great financing option that made it super affordable. Highly recommend their quality work!" },
    { name: "Michael P.", location: "Oro Valley, AZ", stars: 5, text: "When a monsoon storm damaged our tile roof, Golden Roofing AZ was there quickly. They provided a free inspection within 24 hours and helped us navigate the insurance claim process seamlessly. The repair was done perfectly, and their communication throughout was excellent. Truly a hassle-free experience during a stressful time." },
    { name: "Emily R.", location: "Marana, AZ", stars: 5, text: "We needed a new coating for our flat roof, and Golden Roofing AZ delivered beyond expectations. Their crew was punctual, tidy, and completed the job ahead of schedule. The competitive pricing and the noticeable difference in our energy bill have made us very happy customers. They truly are Tucson's best bang for your buck!" }
  ],

  trustBadges: [
    "Licensed, Bonded & Insured", "GAF Certified Contractor", "BBB A+ Rated", "Google Guaranteed", "Free 24-Hr Inspections", "Financing Available"
  ],

  stats: [
    { value: 4.9, label: "Google Rating", suffix: "★", decimals: 1 },
    { value: 1500, label: "Roofs Completed", suffix: "+", decimals: 0 },
    { value: 18, label: "Yrs Experience", suffix: "+", decimals: 0 }
  ],

  reasons: [
    { icon: "clock", title: "Fast Response", desc: "We offer quick turnaround times and free inspections within 24 hours to address your roofing needs promptly." },
    { icon: "dollar-sign", title: "Upfront Pricing", desc: "Receive competitive, transparent pricing with no hidden fees and flexible financing options available." },
    { icon: "award", title: "Certified Pros", desc: "Our team is GAF and TAMKO certified, ensuring top-quality materials and expert workmanship on every project." },
    { icon: "thumbs-up", title: "Satisfaction Guarantee", desc: "We stand behind our work with a commitment to your complete satisfaction and lasting results." },
    { icon: "phone", title: "Insurance Claim Help", desc: "We provide hassle-free assistance with insurance claims to make the process smooth for you." },
    { icon: "truck", title: "Fully Equipped", desc: "Our crews arrive fully equipped to handle any residential or commercial roofing project efficiently." }
  ],

  formServiceOptions: ["Shingle Roofs", "Tile Roofs", "Flat Roofs", "Roof Coating", "Roof Replacement", "Roof Repair"]
}

// Backward-compat re-exports
export const BUSINESS = config.business
export const SERVICES = config.services!
export const TESTIMONIALS = config.testimonials!
export const TRUST_BADGES = config.trustBadges!