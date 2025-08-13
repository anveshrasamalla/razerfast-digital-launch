import Layout from "@/components/Layout";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useState, useMemo, useEffect } from "react";
import { CheckCircle2, Coffee, MapPin, Clock, ShoppingCart, Star, UtensilsCrossed } from "lucide-react";
import heroImage from "@/assets/brewbean-hero.jpg";
import portfolioImage from "@/assets/brewbean-portfolio-1.jpg";
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
          <div className="text-3xl font-bold text-tech-accent">{String(value).padStart(2,'0')}</div>
          <div className="text-xs text-muted-foreground">{label}</div>
        </div>
      ))}
    </div>
  );
};

const BrewBeanCafe = () => {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const open = (src: string) => setLightboxSrc(src);
  const close = () => setLightboxSrc(null);

  return (
    <Layout>
      <Helmet>
        <title>Cafes & Restaurants Website Design – Razerfast</title>
        <meta name="description" content="Serve more customers with a stunning cafe website. Menus, reservations, online orders – all in one place. Launch in 7 days from $399." />
        <link rel="canonical" href={typeof window !== 'undefined' ? window.location.href : 'https://razerfast.lovable.app/work/brew-bean-cafe'} />
      </Helmet>

      <style>{`
        .steam:before, .steam:after { content: ''; position: absolute; inset: 0; background: radial-gradient(circle at 50% 60%, hsl(var(--foreground)/0.35), transparent 60%); filter: blur(20px); animation: rise 6s ease-in-out infinite; }
        .steam:after { animation-delay: 3s; }
        @keyframes rise { 0% { transform: translateY(10px) scale(0.95); opacity: .6 } 50% { transform: translateY(-10px) scale(1); opacity: 1 } 100% { transform: translateY(10px) scale(0.95); opacity: .6 } }
      `}</style>

      {/* Sticky page bar */}
      <div className="sticky top-0 z-30 w-full backdrop-blur supports-[backdrop-filter]:bg-background/70 bg-background/90 border-b">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground"><Coffee className="h-4 w-4" /> Cafes & Restaurants</div>
          <a href="#contact" className="inline-block"><Button variant="cta" size="sm">Book Now</Button></a>
        </div>
      </div>

      {/* Hero with video */}
      <header className="relative h-[70vh] md:h-[80vh] isolate">
        <img className="absolute inset-0 h-full w-full object-cover" src={heroImage} alt="Cafe website design showcase" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 to-background" />
        <div className="relative max-w-7xl mx-auto h-full flex items-center px-4">
          <div className="max-w-2xl animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">Serve More Customers with a Stunning Cafe Website</h1>
            <p className="mt-4 text-lg md:text-xl text-muted-foreground">Menus, reservations, online orders – all in one place, built in 7 days.</p>
            <div className="mt-8 flex gap-4">
              <a href="#contact"><Button variant="cta" size="lg">Get Started Today</Button></a>
              <a href="#features"><Button variant="minimal" size="lg">See Features</Button></a>
            </div>
          </div>
        </div>
        {/* Decorative coffee steam */}
        <div className="absolute right-10 bottom-10 w-24 h-24 steam" aria-hidden />
      </header>

      <main>
        {/* Problem -> Solution */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <Badge variant="outline" className="mb-4">Problem → Solution</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Turn browsing into bookings</h2>
              <p className="text-muted-foreground mb-6">Customers can’t find your menu online? Bookings are messy? We build cafe websites that make it effortless to browse menus, reserve tables, and order online – all optimized for mobile.</p>
              <ul className="space-y-3">
                {[
                  'Clear online menus with prices and dietary labels',
                  'One-click table reservations integrated with your calendar',
                  'Online ordering with secure payments',
                ].map((t)=> (
                  <li key={t} className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-tech-accent" /><span>{t}</span></li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="mx-auto w-[280px] sm:w-[320px] aspect-[9/19] rounded-[2rem] border bg-card text-card-foreground shadow-xl overflow-hidden">
                <div className="h-6 bg-muted" />
                <div className="h-full bg-gradient-to-b from-muted/40 to-background flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-tech-accent/20 flex items-center justify-center">
                    <UtensilsCrossed className="h-10 w-10 text-tech-accent" />
                  </div>
                </div>
              </div>
              <div className="absolute -left-6 -bottom-6 w-32 h-32 rounded-2xl bg-tech-accent/10 blur-2xl" aria-hidden />
            </div>
          </div>
        </section>

        {/* Portfolio Showcase */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4">
            <div className="mb-10">
              <Badge variant="outline" className="mb-4">Portfolio</Badge>
              <h2 className="text-3xl md:text-4xl font-bold">Cafe Website Examples</h2>
              <p className="text-muted-foreground">Hover to preview different pages. Click to enlarge.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {Array.from({length: 3}).map((_, idx) => (
                <Card key={idx} className="overflow-hidden group cursor-zoom-in" onClick={()=>open(portfolioImage)}>
                  <CardContent className="p-0">
                    <div className="relative aspect-[4/3]">
                      <img src={portfolioImage} alt="Cafe website portfolio showcase" className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-300" loading="lazy" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section id="features" className="py-16 md:py-24 bg-[length:cover] bg-fixed" style={{backgroundImage:'linear-gradient(to bottom, hsl(var(--background)), hsl(var(--background)))'}}>
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">Features</Badge>
              <h2 className="text-3xl md:text-4xl font-bold">Built for busy cafes</h2>
              <p className="text-muted-foreground">Smooth, fast and delightful for your staff and your customers.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {icon: UtensilsCrossed, title:'Online Menu', desc:'Beautiful, filterable menus with dietary labels.'},
                {icon: Clock, title:'Table Reservations', desc:'Smart bookings with reminders and calendar sync.'},
                {icon: ShoppingCart, title:'Ordering & Payments', desc:'Pickup, delivery and secure checkout.'},
                {icon: MapPin, title:'Google Maps', desc:'Easy directions, hours and live updates.'},
                {icon: Star, title:'Customer Reviews', desc:'Showcase top ratings and testimonials.'},
                {icon: Coffee, title:'Loyalty-ready', desc:'Integrations for rewards and repeat business.'},
              ].map(({icon:Icon,title,desc}) => (
                <Card key={title} className="hover:-translate-y-1 transition-transform">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-tech-accent/10 flex items-center justify-center mb-4"><Icon className="h-6 w-6 text-tech-accent" /></div>
                    <h3 className="font-semibold text-lg">{title}</h3>
                    <p className="text-muted-foreground text-sm mt-1">{desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Special Offer */}
        <section className="py-16 md:py-24 bg-gradient-hero text-primary-foreground">
          <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">Launch your website in just 7 days – from $399</h2>
              <p className="text-primary-foreground/80 mt-2">Limited spots available this month. Secure your build slot now.</p>
              <div className="mt-6"><Countdown /></div>
            </div>
            <div className="text-center md:text-right">
              <a href="#contact"><Button variant="cta" size="lg">Claim Offer</Button></a>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4">
            <div className="mb-10 text-center">
              <Badge variant="outline" className="mb-4">Testimonials</Badge>
              <h2 className="text-3xl md:text-4xl font-bold">Loved by local cafes</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {name:'Olivia, Brew House', text:'Our orders doubled within weeks. Booking table is now effortless.'},
                {name:'Mason, Daily Drip', text:'Menu updates take minutes and customers love the design.'},
                {name:'Ava, Roastery Co.', text:'Fast build, great support, and gorgeous visuals.'},
              ].map((t)=> (
                <Card key={t.name} className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <img src="/placeholder.svg" alt={`${t.name} photo`} className="h-10 w-10 rounded-full object-cover" loading="lazy" />
                      <div className="font-medium">{t.name}</div>
                    </div>
                    <p className="text-muted-foreground">“{t.text}”</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA + Contact */}
        <section className="py-16 md:py-24 bg-muted/30" id="contact">
          <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">Let’s Get Your Cafe Online</h2>
              <p className="text-muted-foreground mt-2">Tell us about your business and we’ll get back to you the same day.</p>
              <div className="mt-6 flex gap-3">
                <Badge variant="secondary" className="bg-tech-accent text-tech-accent-foreground">Designed by Razerfast</Badge>
              </div>
            </div>
            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <Input placeholder="Name" aria-label="Name" />
                <Input placeholder="Email" type="email" aria-label="Email" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <Input placeholder="Phone" aria-label="Phone" />
                <Input placeholder="Business Name" aria-label="Business Name" />
              </div>
              <Textarea placeholder="Tell us about your cafe" aria-label="Message" rows={5} />
              <Button type="submit" variant="cta" className="w-full">Send Message</Button>
            </form>
          </div>
        </section>
      </main>

      <Dialog open={!!lightboxSrc} onOpenChange={close}>
        <DialogContent className="max-w-3xl p-0 overflow-hidden">
          {lightboxSrc && <img src={lightboxSrc} alt="Preview" className="w-full h-auto" />}
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default BrewBeanCafe;
