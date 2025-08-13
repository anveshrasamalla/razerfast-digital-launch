import Layout from "@/components/Layout";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useState, useMemo, useEffect } from "react";
import { CheckCircle2, Car, Calendar, Star, MapPin, Bell, Wrench } from "lucide-react";
import poster from "@/assets/tech-background.jpg";

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState<{days:number;hours:number;minutes:number;seconds:number}>({days:0,hours:0,minutes:0,seconds:0});
  const target = useMemo(() => Date.now() + 7 * 24 * 60 * 60 * 1000, []);
  useEffect(() => {
    const i = setInterval(() => {
      const diff = Math.max(0, target - Date.now());
      const days = Math.floor(diff / (1000*60*60*24));
      const hours = Math.floor((diff / (1000*60*60)) % 24);
      const minutes = Math.floor((diff / (1000*60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
      setTimeLeft({days, hours, minutes, seconds});
    }, 1000);
    return () => clearInterval(i);
  }, [target]);
  return (
    <div className="flex gap-4 text-center">
      {([['Days', timeLeft.days], ['Hours', timeLeft.hours], ['Minutes', timeLeft.minutes], ['Seconds', timeLeft.seconds]] as const).map(([label, value]) => (
        <div key={label} className="min-w-[70px]">
          <div className="text-3xl font-bold text-yellow-400">{String(value).padStart(2,'0')}</div>
          <div className="text-xs text-white/60">{label}</div>
        </div>
      ))}
    </div>
  );
};

const AutomaxPro = () => {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const open = (src: string) => setLightboxSrc(src);
  const close = () => setLightboxSrc(null);

  return (
    <Layout>
      <Helmet>
        <title>Automobile Garage & Service Websites – Get More Bookings | Razerfast</title>
        <meta name="description" content="Get more bookings for your garage. Professional websites with online booking, service management, and customer reviews. Industrial strength design." />
        <link rel="canonical" href={typeof window !== 'undefined' ? window.location.href : 'https://razerfast.lovable.app/work/automax-pro'} />
      </Helmet>

      <style>{`
        .speed-lines { position: relative; overflow: hidden; }
        .speed-lines::before { content: ''; position: absolute; top: 50%; left: -100%; right: 100%; height: 2px; background: linear-gradient(90deg, transparent, #facc15, transparent); animation: speedLine 2s ease-in-out infinite; }
        @keyframes speedLine { 0% { transform: translateX(-100%); } 100% { transform: translateX(200vw); } }
        .gear-spin { animation: gearSpin 10s linear infinite; }
        @keyframes gearSpin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>

      {/* Sticky navigation */}
      <div className="sticky top-0 z-30 w-full backdrop-blur supports-[backdrop-filter]:bg-gray-900/70 bg-gray-900/90 border-b border-yellow-400/20">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2 text-sm text-white/70"><Car className="h-4 w-4 text-yellow-400" /> Auto Services</div>
          <a href="#contact" className="inline-block"><Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold" size="sm">Book Consultation</Button></a>
        </div>
      </div>

      {/* Hero Section */}
      <header className="relative h-[70vh] md:h-[80vh] bg-gray-900 text-white overflow-hidden">
        <video className="absolute inset-0 h-full w-full object-cover opacity-60" src="/videos/garage-hero.mp4" autoPlay muted loop playsInline poster={poster} />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-gray-900/60" />
        
        {/* Speed lines overlay */}
        <div className="absolute inset-0 speed-lines" aria-hidden />
        
        <div className="relative max-w-7xl mx-auto h-full flex items-center px-4">
          <div className="max-w-2xl animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
              Get More <span className="text-yellow-400">Bookings</span> for Your Garage
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-300">Bookings, services, and reviews – all in one powerful site.</p>
            <div className="mt-8 flex gap-4">
              <a href="#contact"><Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold" size="lg">Book Your Free Consultation</Button></a>
              <a href="#features"><Button variant="outline" className="border-white text-white hover:bg-white/10" size="lg">See Features</Button></a>
            </div>
          </div>
        </div>

        {/* Gear decoration */}
        <div className="absolute bottom-10 right-10 w-20 h-20 gear-spin" aria-hidden>
          <Wrench className="w-full h-full text-yellow-400/30" />
        </div>
      </header>

      <main className="bg-gray-900 text-white">
        {/* Problem & Solution */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-gray-900 to-gray-800">
          <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <Badge className="mb-4 bg-yellow-400/20 text-yellow-400 border-yellow-400/30">Problem → Solution</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Customers can't book online?</h2>
              <p className="text-gray-300 mb-6">Turn phone calls into instant bookings. Professional websites that showcase your services, manage appointments, and build trust with reviews and certifications.</p>
              <ul className="space-y-3">
                {[
                  'Online booking system with service selection',
                  'Customer portal for service history and reminders',
                  'Google Reviews integration and trust badges',
                ].map((t)=> (
                  <li key={t} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-yellow-400 mt-0.5" />
                    <span className="text-gray-200">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="mx-auto w-[280px] sm:w-[320px] aspect-[9/19] rounded-[2rem] border-2 border-yellow-400/30 bg-gradient-to-b from-gray-800 to-gray-900 shadow-2xl overflow-hidden">
                <div className="h-6 bg-gray-700" />
                <div className="h-full bg-gradient-to-b from-gray-800/40 to-gray-900 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-yellow-400/20 flex items-center justify-center animate-pulse">
                    <Car className="h-10 w-10 text-yellow-400" />
                  </div>
                </div>
              </div>
              <div className="absolute -right-6 -top-6 w-32 h-32 rounded-full bg-yellow-400/10 blur-2xl" aria-hidden />
              <div className="absolute -left-6 -bottom-6 w-40 h-40 rounded-full bg-yellow-400/5 blur-3xl" aria-hidden />
            </div>
          </div>
        </section>

        {/* Portfolio Showcase */}
        <section className="py-16 md:py-24 bg-gray-800">
          <div className="max-w-7xl mx-auto px-4">
            <div className="mb-10 text-center">
              <Badge className="mb-4 bg-gray-700 text-yellow-400 border-yellow-400/30">Portfolio</Badge>
              <h2 className="text-3xl md:text-4xl font-bold">Auto Service Examples</h2>
              <p className="text-gray-400">Click to see booking systems in action</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                ['/src/assets/case-study-1.jpg','/src/assets/case-study-2.jpg'],
                ['/src/assets/case-study-3.jpg','/src/assets/case-study-4.jpg'],
                ['/src/assets/case-study-5.jpg','/src/assets/hero-consulting.jpg'],
              ].map(([a,b]) => (
                <Card key={a} className="overflow-hidden group cursor-zoom-in bg-gray-800 border-gray-700 hover:border-yellow-400/50 transition-all hover:scale-105" onClick={()=>open(a)}>
                  <CardContent className="p-0">
                    <div className="relative aspect-[4/3]">
                      <img src={b} alt="Auto service booking system" className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500" loading="lazy" />
                      <img src={a} alt="Auto garage website" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section id="features" className="py-16 md:py-24 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-yellow-400/20 text-yellow-400 border-yellow-400/30">Features</Badge>
              <h2 className="text-3xl md:text-4xl font-bold">Built for automotive professionals</h2>
              <p className="text-gray-400">Industrial strength tools for modern garages</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {icon: Calendar, title:'Online Booking', desc:'Smart scheduling with service time estimates.', color:'text-yellow-400'},
                {icon: Wrench, title:'Service List', desc:'Comprehensive service catalog with pricing.', color:'text-blue-400'},
                {icon: Star, title:'Google Reviews', desc:'Trust badges and customer testimonials.', color:'text-green-400'},
                {icon: MapPin, title:'Location Map', desc:'Directions, hours, and contact information.', color:'text-red-400'},
                {icon: Bell, title:'Service Reminders', desc:'Automated follow-ups and maintenance alerts.', color:'text-purple-400'},
                {icon: Car, title:'Vehicle History', desc:'Customer portal with service records.', color:'text-orange-400'},
              ].map(({icon:Icon,title,desc,color}) => (
                <Card key={title} className="hover:-translate-y-2 transition-all duration-300 hover:shadow-lg bg-gray-800 border-gray-700 hover:border-gray-600">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center mb-4">
                      <Icon className={`h-6 w-6 ${color}`} />
                    </div>
                    <h3 className="font-semibold text-lg text-white">{title}</h3>
                    <p className="text-gray-400 text-sm mt-1">{desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Special Offer */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-gray-800 to-yellow-600">
          <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">Website in 7 days – from $499</h2>
              <p className="text-white/90 mt-2">Rev up your business. Limited garage slots this month.</p>
              <div className="mt-6"><Countdown /></div>
            </div>
            <div className="text-center md:text-right">
              <a href="#contact"><Button className="bg-white text-gray-900 hover:bg-gray-100 font-bold" size="lg">Claim Your Spot</Button></a>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 md:py-24 bg-gray-800">
          <div className="max-w-7xl mx-auto px-4">
            <div className="mb-10 text-center">
              <Badge className="mb-4 bg-gray-700 text-yellow-400 border-yellow-400/30">Testimonials</Badge>
              <h2 className="text-3xl md:text-4xl font-bold">Trusted by garage owners</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {name:'Mike, Pro Auto Repair', text:'Bookings increased 300%. No more missed calls or double bookings.'},
                {name:'Sarah, QuickFix Garage', text:'Professional site that builds trust. Customers love the online booking.'},
                {name:'Tony, Elite Motors', text:'Fast setup, great support. Exactly what our shop needed.'},
              ].map((t)=> (
                <Card key={t.name} className="h-full bg-gray-700 border-gray-600">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <img src="/placeholder.svg" alt={`${t.name} photo`} className="h-10 w-10 rounded-full object-cover" loading="lazy" />
                      <div className="font-medium text-white">{t.name}</div>
                    </div>
                    <p className="text-gray-300">"{t.text}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA + Contact */}
        <section className="py-16 md:py-24 bg-gray-900" id="contact">
          <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">Rev Up Your Online Presence</h2>
              <p className="text-gray-400 mt-2">Professional websites for professional garages. Let's get started.</p>
              <div className="mt-6 flex gap-3">
                <Badge className="bg-yellow-400 text-black">Designed by Razerfast</Badge>
              </div>
            </div>
            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <Input placeholder="Name" aria-label="Name" className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 focus:border-yellow-400" />
                <Input placeholder="Email" type="email" aria-label="Email" className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 focus:border-yellow-400" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <Input placeholder="Phone" aria-label="Phone" className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 focus:border-yellow-400" />
                <Input placeholder="Garage Name" aria-label="Garage Name" className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 focus:border-yellow-400" />
              </div>
              <Textarea placeholder="Tell us about your automotive services" aria-label="Message" rows={5} className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400 focus:border-yellow-400" />
              <Button type="submit" className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold">Send Message</Button>
            </form>
          </div>
        </section>
      </main>

      <Dialog open={!!lightboxSrc} onOpenChange={close}>
        <DialogContent className="max-w-3xl p-0 overflow-hidden bg-gray-900 border-gray-700">
          {lightboxSrc && <img src={lightboxSrc} alt="Preview" className="w-full h-auto" />}
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default AutomaxPro;
