import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";
import { ArrowRight, Play, CheckCircle, Star, TrendingUp, Users, Zap, ShoppingCart, BarChart3 } from "lucide-react";
const Index = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const words = ["Visible", "Trusted", "Automated", "Optimized", "Digital"];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord(prev => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);
  return <Layout>
      <style>
        {`.min-h-screen { background: #F5F4F1 !important; }`}
      </style>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8" style={{
      backgroundColor: "#F5F4F1"
    }}>
        <div className="max-w-6xl mx-auto text-center">
          {/* Small subtitle */}
          <div className="text-sm font-medium tracking-[0.2em] text-muted-foreground/70 uppercase mb-12">
            RIGHT TOOLS. RIGHT TEAM. RAZERFAST.
          </div>

          {/* Main headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-foreground leading-tight tracking-wide mb-8 flex flex-wrap justify-center">
            Let’s make your business&nbsp;
            <span className="relative w-[150px] inline-block text-left" style={{
            minHeight: "1em"
          }}>
              <span key={words[currentWord]} className="absolute left-0 top-0 transition-opacity duration-500 ease-in-out animate-fade-in-up">
                {words[currentWord]}
              </span>
            </span>
          </h1>

        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#F5F4F1" }}>
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-sm font-medium tracking-[0.2em] text-muted-foreground/70 uppercase mb-8">
            TRUSTED BY
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="font-bold text-2xl">APOLLO</div>
            <div className="font-bold text-2xl">Jägermeister</div>
            <div className="font-bold text-2xl">THE EXPLORERS CLUB</div>
            <div className="font-bold text-2xl">Huddly</div>
            <div className="font-bold text-2xl">Pathlock</div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-sm font-medium tracking-[0.2em] text-white/60 uppercase mb-4">
                WHO WE ARE
              </div>
              <h2 className="text-4xl md:text-5xl font-light text-white mb-6 leading-tight">
                We are <span className="font-medium">Razerfast</span><br />
                an award-winning web design agency focused on fostering relationships & work culture<br />
                to deliver world-class digital products.
              </h2>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="w-8 h-8 bg-orange-500 rounded flex items-center justify-center">
                  <Star className="w-5 h-5 text-white fill-white" />
                </div>
                <span className="text-white text-xl font-medium">4.9</span>
              </div>
              <p className="text-white/60">51 reviews</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-sm font-medium tracking-[0.2em] text-white/60 uppercase mb-4">
              CASE STUDIES
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-white">
              High-performing digital products with great designs.
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Case Study 1 */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl mb-6">
                <div className="w-full h-80 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <div className="text-gray-500">Project Image</div>
                </div>
                <div className="absolute top-4 left-4">
                  <Badge className="bg-black/80 text-white border-white/20">Retail</Badge>
                </div>
              </div>
              <h3 className="text-xl font-medium text-white mb-2">
                103% conversion increase in a Shopify store with menswear apparel
              </h3>
              <p className="text-blue-400 hover:text-blue-300">Case study →</p>
            </div>

            {/* Case Study 2 */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl mb-6">
                <div className="w-full h-80 bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center">
                  <div className="text-white">Mobile App Design</div>
                </div>
                <div className="absolute top-4 left-4">
                  <Badge className="bg-black/80 text-white border-white/20">Electric Mobility</Badge>
                </div>
              </div>
              <h3 className="text-xl font-medium text-white mb-2">
                Enhanced electric scooter experience with an innovative mobile app
              </h3>
              <p className="text-blue-400 hover:text-blue-300">Case study →</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Case Study 3 */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl mb-6">
                <div className="w-full h-60 bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center">
                  <div className="text-white">Website Design</div>
                </div>
                <div className="absolute top-4 left-4">
                  <Badge className="bg-black/80 text-white border-white/20">Information Technology</Badge>
                </div>
              </div>
              <h3 className="text-lg font-medium text-white mb-2">
                Lightweight and easy-to-read website for a cybersecurity market leader
              </h3>
              <p className="text-blue-400 hover:text-blue-300">Case study →</p>
            </div>

            {/* Case Study 4 */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl mb-6">
                <div className="w-full h-60 bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
                  <div className="text-white">Sustainability</div>
                </div>
                <div className="absolute top-4 left-4">
                  <Badge className="bg-black/80 text-white border-white/20">Technology</Badge>
                </div>
              </div>
              <h3 className="text-lg font-medium text-white mb-2">
                Unique website with a beautiful presentation of sustainability-oriented ideas
              </h3>
              <p className="text-blue-400 hover:text-blue-300">Case study →</p>
            </div>

            {/* Case Study 5 */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl mb-6">
                <div className="w-full h-60 bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center">
                  <div className="text-white">E-commerce</div>
                </div>
                <div className="absolute top-4 left-4">
                  <Badge className="bg-black/80 text-white border-white/20">Technology</Badge>
                </div>
              </div>
              <h3 className="text-lg font-medium text-white mb-2">
                Lightning-fast headless Shopify with innovative wearables
              </h3>
              <p className="text-blue-400 hover:text-blue-300">Case study →</p>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-light text-white mb-6">Hungry for more examples?</h3>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black">
              Check Our Case Studies
            </Button>
          </div>
        </div>
      </section>

      {/* Products & Services Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#F5F4F1" }}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-sm font-medium tracking-[0.2em] text-muted-foreground/70 uppercase mb-4">
              PRODUCTS & SERVICES
            </div>
            <h2 className="text-4xl md:text-5xl font-medium text-foreground">
              World-class digital products and five-star services.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Service 1 */}
            <div className="space-y-6">
              <div className="text-6xl font-light text-muted-foreground/30">01</div>
              <h3 className="text-2xl font-medium text-foreground">Websites</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Custom WordPress Websites</li>
                <li>• Custom HubSpot Websites</li>
                <li>• Custom Headless Websites</li>
                <li>• Custom Webflow Websites</li>
              </ul>
              <p className="text-muted-foreground">
                Reach your business goals with a custom-made, fast & mobile-friendly website.
              </p>
              <Button variant="link" className="text-foreground p-0 h-auto">
                See Details <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>

            {/* Service 2 */}
            <div className="space-y-6">
              <div className="text-6xl font-light text-muted-foreground/30">02</div>
              <h3 className="text-2xl font-medium text-foreground">E-commerce</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Custom Shopify E-commerce</li>
                <li>• Custom WooCommerce E-commerce</li>
              </ul>
              <p className="text-muted-foreground">
                Boost your sales with a conversion-oriented, custom-tailored, and high-converting online store.
              </p>
              <Button variant="link" className="text-foreground p-0 h-auto">
                See Details <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>

            {/* Service 3 */}
            <div className="space-y-6">
              <div className="text-6xl font-light text-muted-foreground/30">03</div>
              <h3 className="text-2xl font-medium text-foreground">Web Apps</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Custom Web Apps</li>
              </ul>
              <p className="text-muted-foreground">
                Grow your business with a modern & user-friendly web app.
              </p>
              <Button variant="link" className="text-foreground p-0 h-auto">
                See Details <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>

            {/* Service 4 */}
            <div className="space-y-6">
              <div className="text-6xl font-light text-muted-foreground/30">04</div>
              <h3 className="text-2xl font-medium text-foreground">Mobile Apps</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Custom Mobile Apps</li>
              </ul>
              <p className="text-muted-foreground">
                Keep your customers engaged with a well-designed & sleek mobile app.
              </p>
              <Button variant="link" className="text-foreground p-0 h-auto">
                See Details <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-sm font-medium tracking-[0.2em] text-white/60 uppercase mb-4">
              TESTIMONIALS
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-white">
              Our clients love working with us!
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white/5 rounded-2xl p-6 space-y-4">
              <div className="w-12 h-12 bg-gray-300 rounded"></div>
              <p className="text-white">
                "We've doubled our conversion in just one month. That's the most direct metric of our success."
              </p>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-orange-500 fill-orange-500" />
                <span className="text-white text-sm">5.0</span>
              </div>
              <div>
                <p className="text-white font-medium">Nikh Khosla</p>
                <p className="text-white/60 text-sm">CEO - Seneca (US)</p>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white/5 rounded-2xl p-6 space-y-4">
              <div className="w-12 h-12 bg-gray-300 rounded"></div>
              <p className="text-white">
                "This was the most well-managed project I've been a part of."
              </p>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-orange-500 fill-orange-500" />
                <span className="text-white text-sm">5.0</span>
              </div>
              <div>
                <p className="text-white font-medium">Michael Puterbaugh</p>
                <p className="text-white/60 text-sm">CMO - Pathlock (US)</p>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white/5 rounded-2xl p-6 space-y-4">
              <div className="w-12 h-12 bg-gray-300 rounded"></div>
              <p className="text-white">
                "They were one of the best UX designers I've worked with."
              </p>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-orange-500 fill-orange-500" />
                <span className="text-white text-sm">5.0</span>
              </div>
              <div>
                <p className="text-white font-medium">Mac Piskorz</p>
                <p className="text-white/60 text-sm">CEO - Apollo Scooters (CA)</p>
              </div>
            </div>

            {/* Testimonial 4 */}
            <div className="bg-white/5 rounded-2xl p-6 space-y-4">
              <div className="w-12 h-12 bg-gray-300 rounded"></div>
              <p className="text-white">
                "The communication was exceptional."
              </p>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-orange-500 fill-orange-500" />
                <span className="text-white text-sm">5.0</span>
              </div>
              <div>
                <p className="text-white font-medium">Sharde Heim</p>
                <p className="text-white/60 text-sm">Product Designer - Curious Thing (AU)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Q&A Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "#F5F4F1" }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <div className="text-sm font-medium tracking-[0.2em] text-muted-foreground/70 uppercase mb-4">
                Q&A
              </div>
              <h2 className="text-4xl md:text-5xl font-medium text-foreground mb-12">
                Simple answers to big questions.
              </h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-medium text-foreground mb-3">What are digital products?</h3>
                  <p className="text-muted-foreground">
                    They are websites, online stores, and applications, including mobile applications. These are our specialty, but they aren't the only things we're passionate about.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-foreground mb-3">Can you deliver a complete product?</h3>
                  <p className="text-muted-foreground">
                    Yes, we can create a complete product from scratch. Aside from a number of UX and UI design services, we offer programming, copywriting, and search engine optimization services.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-foreground mb-3">How much time do you need?</h3>
                  <p className="text-muted-foreground">
                    We specialize in creating custom products. In general, building a website from the ground up takes us around ten weeks.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-foreground mb-3">How much will it cost?</h3>
                  <p className="text-muted-foreground">
                    The majority of our clients sign a time and materials pricing contract, but we can charge a fixed fee if need be. The starting price for a project is $15,000.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="w-full h-48 bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl"></div>
                <div className="w-full h-32 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl"></div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="w-full h-32 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl"></div>
                <div className="w-full h-48 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-sm font-medium tracking-[0.2em] text-white/60 uppercase mb-4">
            EXCITED?
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-white mb-12 leading-tight">
            Let's build or improve your digital product
          </h2>
          <Button size="lg" className="bg-white text-black hover:bg-gray-100 px-8 py-4 text-lg rounded-full">
            Schedule a Call
          </Button>
        </div>
      </section>

    </Layout>;
};
export default Index;