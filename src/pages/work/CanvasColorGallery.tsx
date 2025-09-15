import Layout from "@/components/Layout";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useState, useMemo, useEffect } from "react";
import { CheckCircle2, Palette, Calendar, ShoppingCart, User, Camera, Paintbrush } from "lucide-react";
import poster from "@/assets/canvas-hero.jpg";
import portfolioImage from "@/assets/canvas-portfolio-1.jpg";

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
          <div className="text-3xl font-bold text-cyan-400">{String(value).padStart(2,'0')}</div>
          <div className="text-xs text-white/60">{label}</div>
        </div>
      ))}
    </div>
  );
};

const CanvasColorGallery = () => {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const open = (src: string) => setLightboxSrc(src);
  const close = () => setLightboxSrc(null);

  const artworks = [
    '/src/assets/artwork-1.jpg',
    '/src/assets/artwork-2.jpg', 
    '/src/assets/artwork-3.jpg',
    '/src/assets/artwork-4.jpg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % artworks.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Layout>
      <Helmet>
        <title>Art & Creative Business Websites – Turn Your Art Into a Global Gallery | Razerfast</title>
        <meta name="description" content="Sell, showcase, and schedule exhibitions online. Bold gallery-inspired websites for artists and creative businesses. Modern digital design meets high-end art." />
        <link rel="canonical" href={typeof window !== 'undefined' ? window.location.href : 'https://razerfast.lovable.app/work/canvas-color-gallery'} />
      </Helmet>

      <style>{`
        .paint-stroke { position: relative; }
        .paint-stroke::after { content: ''; position: absolute; bottom: -10px; left: 0; right: 0; height: 8px; background: linear-gradient(90deg, transparent, rgba(6, 182, 212, 0.6), transparent); transform: skew(-20deg); }
        .gallery-fade { animation: galleryFade 0.8s ease-out; }
        @keyframes galleryFade { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        .neon-glow { box-shadow: 0 0 20px rgba(6, 182, 212, 0.3); }
      `}</style>

      {/* Sticky navigation */}
      <div className="sticky top-0 z-30 w-full backdrop-blur supports-[backdrop-filter]:bg-black/70 bg-black/90 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2 text-sm text-white/70"><Palette className="h-4 w-4 text-cyan-400" /> Art & Creative</div>
          <a href="#contact" className="inline-block"><Button className="bg-cyan-400 hover:bg-cyan-500 text-black font-semibold" size="sm">Showcase Your Art</Button></a>
        </div>
      </div>

      {/* Split Hero Section */}
      <header className="relative h-[70vh] md:h-[80vh] bg-black text-white overflow-hidden">
        {/* Left side - Art slideshow */}
        <div className="absolute left-0 top-0 w-1/2 h-full">
          {artworks.map((src, index) => (
            <div 
              key={src}
              className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
            >
              <img src={src} alt={`Artwork ${index + 1}`} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/80" />
            </div>
          ))}
        </div>

        {/* Right side - Content */}
        <div className="absolute right-0 top-0 w-1/2 h-full flex items-center justify-center">
          <div className="max-w-xl px-8 gallery-fade">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Turn Your Art Into a{" "}
              <span className="paint-stroke text-cyan-400">Global Gallery</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 mb-8">
              Sell, showcase, and schedule exhibitions online.
            </p>
            <div className="flex flex-col gap-4">
              <a href="#contact">
                <Button className="bg-cyan-400 hover:bg-cyan-500 text-black font-semibold neon-glow" size="lg">
                  Showcase Your Art Now
                </Button>
              </a>
              <a href="#features">
                <Button variant="outline" className="border-white text-white hover:bg-white/10" size="lg">
                  See Gallery Features
                </Button>
              </a>
            </div>
          </div>
        </div>

        {/* Decorative paintbrush strokes */}
        <div className="absolute bottom-10 left-1/4 w-32 h-2 bg-gradient-to-r from-transparent via-cyan-400 to-transparent transform -rotate-12 opacity-60" aria-hidden />
        <div className="absolute top-20 right-1/4 w-24 h-2 bg-gradient-to-r from-transparent via-pink-400 to-transparent transform rotate-45 opacity-40" aria-hidden />
      </header>

      <main className="bg-black text-white">
        {/* Storytelling Section */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div className="gallery-fade">
                <Badge className="mb-4 bg-cyan-400/20 text-cyan-400 border-cyan-400/30">Your Story</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Every Artist Deserves a Digital Gallery</h2>
                <p className="text-white/70 mb-6">Transform your creative passion into a thriving online business. Showcase your portfolio, sell original pieces, and connect with collectors worldwide.</p>
                <ul className="space-y-3">
                  {[
                    'Professional portfolio with high-resolution galleries',
                    'E-commerce integration for art sales and commissions', 
                    'Exhibition calendar and event management',
                  ].map((t)=> (
                    <li key={t} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-cyan-400 mt-0.5" />
                      <span className="text-white/90">{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <img src={poster} alt="Art gallery interface" className="w-full rounded-lg" />
                <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-pink-500/20 blur-2xl" aria-hidden />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full bg-cyan-400/20 blur-3xl" aria-hidden />
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Mockups */}
        <section className="py-16 md:py-24 bg-white/5">
          <div className="max-w-7xl mx-auto px-4">
            <div className="mb-10 text-center">
              <Badge className="mb-4 bg-pink-400/20 text-pink-400 border-pink-400/30">Portfolio</Badge>
              <h2 className="text-3xl md:text-4xl font-bold">Art E-commerce Examples</h2>
              <p className="text-white/70">Click to expand gallery view</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                [portfolioImage, poster],
                [portfolioImage, poster],
                [portfolioImage, poster],
              ].map(([a,b]) => (
                <Card key={a} className="overflow-hidden group cursor-zoom-in bg-white/5 border-white/10 hover:border-cyan-400/50 transition-all hover:scale-105" onClick={()=>open(a)}>
                  <CardContent className="p-0">
                    <div className="relative aspect-[4/3]">
                      <img src={b} alt="Art commerce features" className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500" loading="lazy" />
                      <img src={a} alt="Art gallery design" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section id="features" className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-cyan-400/20 text-cyan-400 border-cyan-400/30">Features</Badge>
              <h2 className="text-3xl md:text-4xl font-bold">Built for artists and creators</h2>
              <p className="text-white/70">Professional tools to showcase and sell your art</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {icon: Palette, title:'Artwork Catalog', desc:'Organized galleries with zoom and filtering.', color:'text-cyan-400'},
                {icon: User, title:'Artist Bio Pages', desc:'Professional profiles and artist statements.', color:'text-pink-400'},
                {icon: ShoppingCart, title:'Online Shop', desc:'Secure sales with print options and sizing.', color:'text-green-400'},
                {icon: Calendar, title:'Event Calendar', desc:'Exhibitions, shows, and gallery openings.', color:'text-yellow-400'},
                {icon: Camera, title:'Commission Requests', desc:'Custom artwork ordering system.', color:'text-purple-400'},
                {icon: Paintbrush, title:'Process Stories', desc:'Behind-the-scenes content and techniques.', color:'text-orange-400'},
              ].map(({icon:Icon,title,desc,color}) => (
                <Card key={title} className="hover:-translate-y-2 transition-all duration-300 hover:shadow-lg bg-white/5 border-white/10 hover:border-white/20">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4">
                      <Icon className={`h-6 w-6 ${color}`} />
                    </div>
                    <h3 className="font-semibold text-lg text-white">{title}</h3>
                    <p className="text-white/70 text-sm mt-1">{desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Special Offer */}
        <section className="py-16 md:py-24 bg-gradient-to-r from-cyan-600 to-pink-600">
          <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">Launch your gallery in 7 days – from $499</h2>
              <p className="text-white/90 mt-2">Limited artist slots available. Secure your creative space.</p>
              <div className="mt-6"><Countdown /></div>
            </div>
            <div className="text-center md:text-right">
              <a href="#contact"><Button className="bg-white text-black hover:bg-gray-100 font-semibold" size="lg">Claim Your Gallery</Button></a>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4">
            <div className="mb-10 text-center">
              <Badge className="mb-4 bg-pink-400/20 text-pink-400 border-pink-400/30">Testimonials</Badge>
              <h2 className="text-3xl md:text-4xl font-bold">Loved by artists worldwide</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {name:'Sofia, Abstract Artist', text:'My online sales tripled within the first month. The gallery layout is stunning.'},
                {name:'Marcus, Photographer', text:'Perfect platform for showcasing my work and managing client commissions.'},
                {name:'Elena, Sculptor', text:'Beautiful, professional site that truly represents my artistic vision.'},
              ].map((t)=> (
                <Card key={t.name} className="h-full bg-white/5 border-white/10">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <img src="/placeholder.svg" alt={`${t.name} photo`} className="h-10 w-10 rounded-full object-cover" loading="lazy" />
                      <div className="font-medium text-white">{t.name}</div>
                    </div>
                    <p className="text-white/80">"{t.text}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA + Contact */}
        <section className="py-16 md:py-24 bg-white/5" id="contact">
          <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold">Create Your Digital Gallery</h2>
              <p className="text-white/70 mt-2">Let's showcase your art to the world. Professional, beautiful, effective.</p>
              <div className="mt-6 flex gap-3">
                <Badge className="bg-cyan-400 text-black">Designed by Razerfast</Badge>
              </div>
            </div>
            <form className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <Input placeholder="Artist Name" aria-label="Name" className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-cyan-400" />
                <Input placeholder="Email" type="email" aria-label="Email" className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-cyan-400" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <Input placeholder="Phone" aria-label="Phone" className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-cyan-400" />
                <Input placeholder="Art Medium" aria-label="Art Medium" className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-cyan-400" />
              </div>
              <Textarea placeholder="Tell us about your art and vision" aria-label="Message" rows={5} className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-cyan-400" />
              <Button type="submit" className="w-full bg-cyan-400 hover:bg-cyan-500 text-black font-semibold">Send Message</Button>
            </form>
          </div>
        </section>
      </main>

      <Dialog open={!!lightboxSrc} onOpenChange={close}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-black border-white/20">
          {lightboxSrc && <img src={lightboxSrc} alt="Gallery Preview" className="w-full h-auto" />}
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default CanvasColorGallery;
