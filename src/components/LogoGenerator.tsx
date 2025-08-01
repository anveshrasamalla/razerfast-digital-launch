import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { Loader2, Download, Zap, Target, Wind, ArrowRight, Sparkles, Activity } from "lucide-react";

interface GeneratedLogo {
  id: string;
  name: string;
  imageURL: string;
  description: string;
  icon: any;
}

export const LogoGenerator = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedLogos, setGeneratedLogos] = useState<GeneratedLogo[]>([]);

  const logoPrompts = [
    {
      id: "razor-speed",
      name: "Razor Blade + Speed Lines",
      icon: Target,
      description: "Sleek razor blade with motion blur trails",
      prompt: "Minimalist logo design for 'razerfast', featuring a sharp, sleek razor blade silhouette with dynamic speed lines and motion blur trails cutting through space, modern typography, black and silver color scheme, clean background, vector style, professional tech company logo"
    },
    {
      id: "lightning-bolt",
      name: "Lightning Bolt Integration", 
      icon: Zap,
      description: "Electric energy representing instant speed",
      prompt: "Modern logo for 'razerfast' with lightning bolt elements integrated into the letter 'R' or 'F', electric blue and white colors, dynamic energy lines, sharp angular design, tech company branding, minimalist style, vector graphics"
    },
    {
      id: "sonic-boom",
      name: "Sonic Boom Visual",
      icon: Activity,
      description: "Circular ripples like breaking sound barrier",
      prompt: "Dynamic logo for 'razerfast' featuring sonic boom visual effects, circular ripples and sound waves emanating from text, breaking sound barrier concept, gradient blue to white colors, modern typography, tech-focused design, clean vector style"
    },
    {
      id: "racing-stripes",
      name: "Racing Stripe Design",
      icon: Wind,
      description: "Horizontal speed lines like race car stripes",
      prompt: "Sporty logo for 'razerfast' with racing stripe design, horizontal speed lines cutting through or behind the text, automotive-inspired, red and black color scheme, bold typography, dynamic motion lines, vector style logo"
    },
    {
      id: "geometric-arrow",
      name: "Geometric Speed Arrow",
      icon: ArrowRight,
      description: "Abstract angular arrow from razor fragments",
      prompt: "Geometric logo for 'razerfast' featuring abstract angular arrow pointing forward, made of sharp geometric pieces like razor fragments, modern tech aesthetic, gradient from dark blue to cyan, minimalist design, vector graphics style"
    },
    {
      id: "particle-trail",
      name: "Particle Trail Effect",
      icon: Sparkles,
      description: "Digital pixels trailing behind moving text",
      prompt: "Digital logo for 'razerfast' with particle trail effect, text appears to be moving fast creating digital particle trails, glowing pixels and dots trailing behind, neon blue and purple colors, futuristic tech design, dark background, vector style"
    }
  ];

  const generateAllLogos = async () => {
    setIsGenerating(true);
    const logos: GeneratedLogo[] = [];

    try {
      for (const logoPrompt of logoPrompts) {
        toast.info(`Generating ${logoPrompt.name}...`);
        
        // Generate a placeholder for now since Edge Function isn't working
        const placeholderUrl = `https://via.placeholder.com/512x512/000000/FFFFFF?text=${encodeURIComponent(logoPrompt.name)}`;
        
        logos.push({
          id: logoPrompt.id,
          name: logoPrompt.name,
          imageURL: placeholderUrl,
          description: logoPrompt.description,
          icon: logoPrompt.icon
        });
        
        toast.success(`${logoPrompt.name} placeholder created!`);
        
        // Add small delay between generations
        await new Promise(resolve => setTimeout(resolve, 500));
      }

      setGeneratedLogos(logos);
      toast.success("Logo placeholders generated! Connect to Supabase for actual AI generation.");
      
    } catch (error) {
      console.error('Error generating logos:', error);
      toast.error('Failed to generate logos. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  const downloadLogo = (imageURL: string, fileName: string) => {
    const link = document.createElement('a');
    link.href = imageURL;
    link.download = `razerfast-${fileName}.webp`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">RazerFast Logo Generator</h1>
        <p className="text-muted-foreground mb-8">
          Generate 6 unique logo concepts that tell the story of speed and precision
        </p>
        
        
        <Button 
          onClick={generateAllLogos} 
          disabled={isGenerating}
          className="w-full"
        >
          {isGenerating ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Generating Logos...
            </>
          ) : (
            "Generate All 6 Logo Concepts"
          )}
        </Button>
      </div>

      {/* Logo Concepts Preview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {logoPrompts.map((prompt) => (
          <Card key={prompt.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-2">
                <prompt.icon className="w-5 h-5 text-primary" />
                <CardTitle className="text-lg">{prompt.name}</CardTitle>
              </div>
              <CardDescription>{prompt.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>

      {/* Generated Logos */}
      {generatedLogos.length > 0 && (
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-center">Your Generated Logos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {generatedLogos.map((logo) => (
              <Card key={logo.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square bg-gray-100 flex items-center justify-center">
                  <img 
                    src={logo.imageURL} 
                    alt={logo.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <logo.icon className="w-5 h-5 text-primary" />
                      <CardTitle className="text-lg">{logo.name}</CardTitle>
                    </div>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => downloadLogo(logo.imageURL, logo.id)}
                    >
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                  <CardDescription>{logo.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Instructions */}
      <Card className="bg-muted/50">
        <CardHeader>
          <CardTitle>💡 Next Steps</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <p>1. <strong>Get your API key:</strong> Visit runware.ai and create an account</p>
          <p>2. <strong>Generate logos:</strong> Enter your API key above and click generate</p>
          <p>3. <strong>Download favorites:</strong> Click the download button on logos you like</p>
          <p>4. <strong>For production:</strong> Add your API key to Supabase Edge Function Secrets</p>
        </CardContent>
      </Card>
    </div>
  );
};