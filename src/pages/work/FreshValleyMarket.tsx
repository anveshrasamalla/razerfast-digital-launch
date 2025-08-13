import Layout from "@/components/Layout";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useState, useMemo, useEffect } from "react";
import { CheckCircle2, ShoppingBasket, Truck, Percent, CreditCard, Package, Apple } from "lucide-react";
import poster from "@/assets/freshvalley-hero.jpg";
import portfolioImage from "@/assets/freshvalley-portfolio-1.jpg";

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
          <div className="text-3xl font-bold text-green-500">{String(value).padStart(2,'0')}</div>
          <div className="text-xs text-muted-foreground">{label}</div>
        </div>
      ))}
    </div>
  );
};

const FreshValleyMarket = () => {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const open = (src: string) => setLightboxSrc(src);
  const close = () => setLightboxSrc(null);

  return (
    <Layout>
      <Helmet>
        <title>Grocery Store Website Design – Fresh & Online | Razerfast</title>
        <meta name="description" content="Bring your store to your customers' pockets. Online ordering, delivery, and payment – all ready in a week. Launch your grocery store online from $399." />
        <link rel="canonical" href={typeof window !== 'undefined' ? window.location.href : 'https://razerfast.lovable.app/work/fresh-valley-market'} />
      </Helmet>

      <style>{`
        .float-produce { animation: float 6s ease-in-out infinite; }
        .float-produce:nth-child(2) { animation-delay: 2s; }
        .float-produce:nth-child(3) { animation-delay: 4s; }
        @keyframes float { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-20px) rotate(5deg); } }
        .parallax-grocery { background-attachment: fixed; background-size: cover; background-position: center; }
      `}</style>

      {/* Sticky navigation */}
      <div className="sticky top-0 z-30 w-full backdrop-blur supports-[backdrop-filter]:bg-background/70 bg-background/90 border-b">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground"><ShoppingBasket className="h-4 w-4 text-green-500" /> Grocery Stores</div>
          <a href="#contact" className="inline-block"><Button className="bg-green-500 hover:bg-green-600 text-white" size="sm">Start Your Store</Button></a>
        </div>
      </div>

      {/* Hero Section */}
      <header className="relative h-[70vh] md:h-[80vh] isolate overflow-hidden">
        <video className="absolute inset-0 h-full w-full object-cover" src="/videos/grocery-hero.mp4" autoPlay muted loop playsInline poster={poster} />
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 via-green-900/40 to-transparent" />
        
        {/* Floating produce */}
        <div className="absolute top-20 right-20 w-16 h-16 float-produce" aria-hidden>
          <Apple className="w-full h-full text-green-300 opacity-60" />
        </div>
        <div className="absolute bottom-32 left-20 w-12 h-12 float-produce" aria-hidden>
          <Package className="w-full h-full text-orange-300 opacity-60" />
        </div>
        
        <div className="relative max-w-7xl mx-auto h-full flex items-center px-4">
          <div className="max-w-2xl animate-fade-in text-white">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Bring Your Store to Your Customers' Pockets</h1>
            <p className="mt-4 text-lg md:text-xl text-green-100">Online ordering, delivery, and payment – all ready in a week.</p>
            <div className="mt-8 flex gap-4">
              <a href="#contact"><Button className="bg-green-500 hover:bg-green-600 text-white" size="lg">Start Your Online Store</Button></a>
              <a href="#features"><Button variant="minimal" className="text-white border-white hover:bg-white/10" size="lg">See Features</Button></a>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Problem & Solution */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-green-50 to-background">
          <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <Badge className="mb-4 bg-green-100 text-green-800 border-green-200">Problem → Solution</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-green-900">Customers can't find your store online?</h2>
              <p className="text-green-700 mb-6">Now they can order groceries in minutes, track delivery, and pay securely – all from their phones. Transform your local grocery into a modern shopping experience.</p>
              <ul className="space-y-3">
                {[
                  'Complete product catalog with photos and prices',
                  'Real-time delivery tracking and notifications',
                  'Secure checkout with multiple payment options',
                ].map((t)=> (
                  <li key={t} className="flex items-start gap-3"><CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" /><span className="text-green-800">{t}</span></li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="mx-auto w-[280px] sm:w-[320px] aspect-[9/19] rounded-[2rem] border-4 border-green-200 bg-gradient-to-b from-green-50 to-white shadow-2xl overflow-hidden">
                <div className="h-6 bg-green-100" />
                <div className="h-full bg-gradient-to-b from-green-50/40 to-background flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-green-500/20 flex items-center justify-center animate-pulse">
                    <ShoppingBasket className="h-10 w-10 text-green-600" />
                  </div>
                </div>
              </div>
              <div className="absolute -right-6 -top-6 w-32 h-32 rounded-full bg-yellow-300/20 blur-2xl" aria-hidden />
              <div className="absolute -left-6 -bottom-6 w-40 h-40 rounded-full bg-orange-300/20 blur-3xl" aria-hidden />
            </div>
          </div>
        </section>

        {/* Portfolio Showcase */}
        <section className="py-16 md:py-24 parallax-grocery" style={{backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(/src/assets/tech-background.jpg)'}}>
          <div className="max-w-7xl mx-auto px-4">
            <div className="mb-10 text-center text-white">
              <Badge className="mb-4 bg-green-500 text-white border-green-400">Portfolio</Badge>
              <h2 className="text-3xl md:text-4xl font-bold">Grocery Store Examples</h2>
              <p className="text-green-100">Hover to see shopping features. Click to view full size.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                [portfolioImage, poster],
                [portfolioImage, poster],
                [portfolioImage, poster],
              ].map(([a,b]) => (
                <Card key={a} className="overflow-hidden group cursor-zoom-in border-green-200 hover:border-green-400 transition-all hover:scale-105" onClick={()=>open(a)}>
                  <CardContent className="p-0">
                    <div className="relative aspect-[4/3]">
                      <img src={b} alt="Grocery store features" className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500" loading="lazy" />
                      <img src={a} alt="Grocery store design" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section id="features" className="py-16 md:py-24 bg-gradient-to-b from-background to-green-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-green-100 text-green-800 border-green-200">Features</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-green-900">Everything your grocery store needs</h2>
              <p className="text-green-700">Complete online shopping experience for your customers.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {icon: ShoppingBasket, title:'Online Orders', desc:'Easy browsing, cart, and instant checkout.', color:'text-green-600'},
                {icon: Truck, title:'Delivery Tracking', desc:'Real-time updates from store to doorstep.', color:'text-blue-600'},
                {icon: Percent, title:'Discounts & Coupons', desc:'Promotional codes and seasonal offers.', color:'text-red-500'},
                {icon: CreditCard, title:'Payment Gateway', desc:'Secure payments with cards and digital wallets.', color:'text-purple-600'},
                {icon: Package, title:'Stock Updates', desc:'Live inventory with low-stock alerts.', color:'text-orange-600'},
                {icon: Apple, title:'Fresh Produce', desc:'Special sections for fresh fruits and vegetables.', color:'text-green-500'},
              ].map(({icon:Icon,title,desc,color}) => (
                <Card key={title} className="hover:-translate-y-2 transition-all duration-300 hover:shadow-lg border-green-100">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center mb-4"><Icon className={`h-6 w-6 ${color}`} /></div>
                    <h3 className="font-semibold text-lg text-green-900">{title}</h3>
                    <p className="text-green-600 text-sm mt-1">{desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Special Offer */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-green-600 to-green-700 text-white">
          <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">Launch in 7 days – from $399</h2>
              <p className="text-green-100 mt-2">Fresh opportunity! Limited availability this month.</p>
              <div className="mt-6"><Countdown /></div>
            </div>
            <div className="text-center md:text-right">
              <a href="#contact"><Button className="bg-white text-green-700 hover:bg-green-50" size="lg">Claim Your Spot</Button></a>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4">
            <div className="mb-10 text-center">
              <Badge className="mb-4 bg-green-100 text-green-800 border-green-200">Testimonials</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-green-900">Fresh reviews from store owners</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {name:'Carlos, Valley Fresh Market', text:'Online orders increased 400%. Customers love the convenience.'},
                {name:'Maria, Corner Grocery', text:'Setup was incredibly fast and support was amazing throughout.'},
                {name:'James, Organic Plus', text:'Beautiful design and our delivery system works perfectly.'},
              ].map((t)=> (
                <Card key={t.name} className="h-full border-green-100">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <img src="/placeholder.svg" alt={`${t.name} photo`} className="h-10 w-10 rounded-full object-cover" loading="lazy" />
                      <div className="font-medium text-green-900">{t.name}</div>
                    </div>
                    <p className="text-green-700">"{t.text}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA + Contact */}
        <section className="py-16 md:py-24 bg-green-50" id="contact">
          <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-green-900">Get Your Grocery Store Online</h2>
              <p className="text-green-700 mt-2">Fresh start for your business. We'll respond within hours.</p>
              <div className="mt-6 flex gap-3">
                <Badge className="bg-green-500 text-white">Designed by Razerfast</Badge>
              </div>
            </div>
            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <Input placeholder="Name" aria-label="Name" className="border-green-200 focus:border-green-500" />
                <Input placeholder="Email" type="email" aria-label="Email" className="border-green-200 focus:border-green-500" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <Input placeholder="Phone" aria-label="Phone" className="border-green-200 focus:border-green-500" />
                <Input placeholder="Store Name" aria-label="Store Name" className="border-green-200 focus:border-green-500" />
              </div>
              <Textarea placeholder="Tell us about your grocery store" aria-label="Message" rows={5} className="border-green-200 focus:border-green-500" />
              <Button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white">Send Message</Button>
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

export default FreshValleyMarket;
