import Layout from "@/components/Layout";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useState, useMemo, useEffect } from "react";
import { CheckCircle2, ShoppingBag, CreditCard, Percent, Users, Share2, Crown } from "lucide-react";
import poster from "@/assets/hero-consulting.jpg";

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
          <div className="text-3xl font-bold text-rose-400">{String(value).padStart(2,'0')}</div>
          <div className="text-xs text-white/60">{label}</div>
        </div>
      ))}
    </div>
  );
};

const BoutiqueFashion = () => {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const open = (src: string) => setLightboxSrc(src);
  const close = () => setLightboxSrc(null);

  return (
    <Layout>
      <Helmet>
        <title>Boutique & Retail Store Websites – Sell Anywhere, Anytime | Razerfast</title>
        <meta name="description" content="From your store to the world in just one week. Elegant, luxury-inspired e-commerce websites for boutiques and retail stores. Chic minimalist design." />
        <link rel="canonical" href={typeof window !== 'undefined' ? window.location.href : 'https://razerfast.lovable.app/work/boutique-fashion'} />
      </Helmet>

      <style>{`
        .luxury-shimmer { position: relative; overflow: hidden; }
        .luxury-shimmer::after { content: ''; position: absolute; top: 0; left: -100%; width: 100%; height: 100%; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent); animation: shimmer 3s ease-in-out infinite; }
        @keyframes shimmer { 0% { left: -100%; } 100% { left: 100%; } }
        .runway-slide { animation: runwaySlide 20s linear infinite; }
        @keyframes runwaySlide { 0% { transform: translateX(-50%); } 100% { transform: translateX(50%); } }
      `}</style>

      {/* Sticky navigation */}
      <div className="sticky top-0 z-30 w-full backdrop-blur supports-[backdrop-filter]:bg-rose-50/80 bg-rose-50/90 border-b border-rose-200">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2 text-sm text-rose-600"><ShoppingBag className="h-4 w-4 text-rose-500" /> Boutiques & Retail</div>
          <a href="#contact" className="inline-block"><Button className="bg-rose-500 hover:bg-rose-600 text-white" size="sm">Start Selling</Button></a>
        </div>
      </div>

      {/* Hero Section */}
      <header className="relative h-[70vh] md:h-[80vh] bg-gradient-to-br from-rose-50 to-pink-50 overflow-hidden">
        <video className="absolute inset-0 h-full w-full object-cover opacity-30" src="/videos/boutique-hero.mp4" autoPlay muted loop playsInline poster={poster} />
        <div className="absolute inset-0 bg-gradient-to-r from-rose-50/90 via-transparent to-pink-50/90" />
        
        {/* Floating fashion elements */}
        <div className="absolute top-20 right-20 w-24 h-24 luxury-shimmer opacity-20" aria-hidden>
          <Crown className="w-full h-full text-rose-400" />
        </div>
        
        <div className="relative max-w-7xl mx-auto h-full flex items-center px-4">
          <div className="max-w-2xl animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900">
              Sell <span className="text-rose-500">Anywhere</span>, Anytime
            </h1>
            <p className="mt-4 text-lg md:text-xl text-gray-600">From your store to the world in just one week.</p>
            <div className="mt-8 flex gap-4">
              <a href="#contact"><Button className="bg-rose-500 hover:bg-rose-600 text-white" size="lg">Start Selling Online</Button></a>
              <a href="#features"><Button variant="outline" className="border-rose-300 text-rose-600 hover:bg-rose-50" size="lg">See Features</Button></a>
            </div>
          </div>
        </div>

        {/* Runway background effect */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-rose-100/50 to-transparent runway-slide" aria-hidden />
      </header>

      <main>
        {/* Problem & Solution */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-rose-50 to-background">
          <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <Badge className="mb-4 bg-rose-100 text-rose-700 border-rose-200">Problem → Solution</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Limited by your location?</h2>
              <p className="text-gray-600 mb-6">Transform your boutique into a global brand. Elegant e-commerce that showcases your style, manages inventory, and delivers luxury shopping experiences online.</p>
              <ul className="space-y-3">
                {[
                  'Beautiful product catalogs with professional photography',
                  'Secure luxury checkout with multiple payment options',
                  'Inventory sync between online and in-store sales',
                ].map((t)=> (
                  <li key={t} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-rose-500 mt-0.5" />
                    <span className="text-gray-700">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="mx-auto w-[280px] sm:w-[320px] aspect-[9/19] rounded-[2rem] border-2 border-rose-200 bg-gradient-to-b from-rose-50 to-white shadow-2xl overflow-hidden luxury-shimmer">
                <div className="h-6 bg-rose-100" />
                <div className="h-full bg-gradient-to-b from-rose-50/40 to-background flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-rose-500/20 flex items-center justify-center animate-pulse">
                    <ShoppingBag className="h-10 w-10 text-rose-500" />
                  </div>
                </div>
              </div>
              <div className="absolute -right-6 -top-6 w-32 h-32 rounded-full bg-pink-200/50 blur-2xl" aria-hidden />
              <div className="absolute -left-6 -bottom-6 w-40 h-40 rounded-full bg-rose-200/30 blur-3xl" aria-hidden />
            </div>
          </div>
        </section>

        {/* Portfolio Showcase */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-background to-rose-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="mb-10 text-center">
              <Badge className="mb-4 bg-rose-100 text-rose-700 border-rose-200">Portfolio</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Boutique Store Examples</h2>
              <p className="text-gray-600">Hover to see luxury features. Click to view collections.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                ['/src/assets/case-study-1.jpg','/src/assets/case-study-2.jpg'],
                ['/src/assets/case-study-3.jpg','/src/assets/case-study-4.jpg'],
                ['/src/assets/case-study-5.jpg','/src/assets/hero-consulting.jpg'],
              ].map(([a,b]) => (
                <Card key={a} className="overflow-hidden group cursor-zoom-in border-rose-200 hover:border-rose-300 transition-all hover:scale-105 hover:shadow-lg" onClick={()=>open(a)}>
                  <CardContent className="p-0">
                    <div className="relative aspect-[4/3]">
                      <img src={b} alt="Boutique store features" className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500" loading="lazy" />
                      <img src={a} alt="Boutique store design" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                      <div className="absolute inset-0 bg-gradient-to-t from-rose-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section id="features" className="py-16 md:py-24 bg-rose-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-rose-100 text-rose-700 border-rose-200">Features</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Luxury features for modern boutiques</h2>
              <p className="text-gray-600">Elegant tools for elegant brands</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {icon: ShoppingBag, title:'Online Catalog', desc:'Beautiful product displays with zoom and filters.', color:'text-rose-500'},
                {icon: CreditCard, title:'Secure Checkout', desc:'Luxury payment experience with saved preferences.', color:'text-purple-500'},
                {icon: Percent, title:'Promotions', desc:'Seasonal sales, VIP discounts, and flash offers.', color:'text-green-500'},
                {icon: Users, title:'Loyalty Programs', desc:'Reward repeat customers with exclusive perks.', color:'text-blue-500'},
                {icon: Share2, title:'Social Integration', desc:'Instagram shop, influencer partnerships.', color:'text-pink-500'},
                {icon: Crown, title:'VIP Experience', desc:'Exclusive collections and early access features.', color:'text-yellow-500'},
              ].map(({icon:Icon,title,desc,color}) => (
                <Card key={title} className="hover:-translate-y-2 transition-all duration-300 hover:shadow-lg border-rose-200 bg-white">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-rose-50 flex items-center justify-center mb-4">
                      <Icon className={`h-6 w-6 ${color}`} />
                    </div>
                    <h3 className="font-semibold text-lg text-gray-900">{title}</h3>
                    <p className="text-gray-600 text-sm mt-1">{desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Special Offer */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-rose-500 to-pink-500 text-white">
          <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">Launch your boutique online – from $599</h2>
              <p className="text-rose-100 mt-2">Exclusive launch offer. Limited boutique slots available.</p>
              <div className="mt-6"><Countdown /></div>
            </div>
            <div className="text-center md:text-right">
              <a href="#contact"><Button className="bg-white text-rose-600 hover:bg-rose-50 font-semibold" size="lg">Claim Your Boutique</Button></a>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="mb-10 text-center">
              <Badge className="mb-4 bg-rose-100 text-rose-700 border-rose-200">Testimonials</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Loved by boutique owners</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {name:'Isabella, Chic Boutique', text:'Sales tripled within the first month. The design perfectly captures our brand essence.'},
                {name:'Alexandra, Style Studio', text:'Professional, elegant, and so easy to manage. Customers love the shopping experience.'},
                {name:'Victoria, Fashion House', text:'Exceeded expectations. The luxury feel translated perfectly online.'},
              ].map((t)=> (
                <Card key={t.name} className="h-full border-rose-200">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <img src="/placeholder.svg" alt={`${t.name} photo`} className="h-10 w-10 rounded-full object-cover" loading="lazy" />
                      <div className="font-medium text-gray-900">{t.name}</div>
                    </div>
                    <p className="text-gray-600">"{t.text}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA + Contact */}
        <section className="py-16 md:py-24 bg-rose-50" id="contact">
          <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Launch Your Boutique Online</h2>
              <p className="text-gray-600 mt-2">Elegant solutions for elegant brands. Let's create something beautiful together.</p>
              <div className="mt-6 flex gap-3">
                <Badge className="bg-rose-500 text-white">Designed by Razerfast</Badge>
              </div>
            </div>
            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <Input placeholder="Name" aria-label="Name" className="border-rose-200 focus:border-rose-500" />
                <Input placeholder="Email" type="email" aria-label="Email" className="border-rose-200 focus:border-rose-500" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <Input placeholder="Phone" aria-label="Phone" className="border-rose-200 focus:border-rose-500" />
                <Input placeholder="Boutique Name" aria-label="Boutique Name" className="border-rose-200 focus:border-rose-500" />
              </div>
              <Textarea placeholder="Tell us about your boutique and style" aria-label="Message" rows={5} className="border-rose-200 focus:border-rose-500" />
              <Button type="submit" className="w-full bg-rose-500 hover:bg-rose-600 text-white">Send Message</Button>
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

export default BoutiqueFashion;