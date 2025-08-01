import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { Loader2, Download, Zap, Target, Wind, ArrowRight, Sparkles, Activity, Type, Italic, Bold, PenTool, Layers, Hash } from "lucide-react";

// Import all generated logos
import logoRazorSpeed from "@/assets/logo-razor-speed.png";
import logoLightningBolt from "@/assets/logo-lightning-bolt.png";
import logoSonicBoom from "@/assets/logo-sonic-boom.png";
import logoRacingStripes from "@/assets/logo-racing-stripes.png";
import logoGeometricArrow from "@/assets/logo-geometric-arrow.png";
import logoParticleTrail from "@/assets/logo-particle-trail.png";

// New text-focused logos
import logoSplitText from "@/assets/logo-split-text.png";
import logoGradientFade from "@/assets/logo-gradient-fade.png";
import logoStretchedText from "@/assets/logo-stretched-text.png";
import logoNeonGlow from "@/assets/logo-neon-glow.png";
import logoTiltedLetters from "@/assets/logo-tilted-letters.png";
import logo3dText from "@/assets/logo-3d-text.png";

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
    },
    // New text-focused concepts
    {
      id: "split-text",
      name: "Split Letter Effect",
      icon: Hash,
      description: "Letters sliced diagonally with offset pieces",
      prompt: "Typography logo for 'razerfast' with split letter effect, where each letter appears to be sliced diagonally with offset pieces"
    },
    {
      id: "gradient-fade",
      name: "Gradient Fade Text",
      icon: Type,
      description: "Text fades from black to blue suggesting speed",
      prompt: "Minimalist logo 'razerfast' with gradient text effect from black to electric blue"
    },
    {
      id: "stretched-text",
      name: "Speed Stretched Text",
      icon: Italic,
      description: "Letters stretched horizontally to show motion",
      prompt: "Bold typography logo 'razerfast' where letters are stretched horizontally to show speed"
    },
    {
      id: "neon-glow",
      name: "Neon Glow Effect",
      icon: Layers,
      description: "Futuristic glowing text with cyberpunk style",
      prompt: "Futuristic logo 'razerfast' with neon glow effect, cyberpunk style typography"
    },
    {
      id: "tilted-letters",
      name: "Dynamic Tilted Letters",
      icon: PenTool,
      description: "Scattered and rotated letters creating movement",
      prompt: "Creative logo 'razerfast' where some letters are tilted and rotated to create dynamic movement"
    },
    {
      id: "3d-text",
      name: "3D Extruded Text",
      icon: Bold,
      description: "Letters with depth and dimensional shadows",
      prompt: "Typography logo 'razerfast' with 3D extrusion effect, letters appear to come out of the page"
    }
  ];

  const generateAllLogos = async () => {
    setIsGenerating(true);
    
    // Map of logo IDs to their generated images
    const logoImages = {
      "razor-speed": logoRazorSpeed,
      "lightning-bolt": logoLightningBolt,
      "sonic-boom": logoSonicBoom,
      "racing-stripes": logoRacingStripes,
      "geometric-arrow": logoGeometricArrow,
      "particle-trail": logoParticleTrail,
      "split-text": logoSplitText,
      "gradient-fade": logoGradientFade,
      "stretched-text": logoStretchedText,
      "neon-glow": logoNeonGlow,
      "tilted-letters": logoTiltedLetters,
      "3d-text": logo3dText
    };

    const logos: GeneratedLogo[] = [];

    try {
      for (const logoPrompt of logoPrompts) {
        toast.info(`Loading ${logoPrompt.name}...`);
        
        logos.push({
          id: logoPrompt.id,
          name: logoPrompt.name,
          imageURL: logoImages[logoPrompt.id as keyof typeof logoImages],
          description: logoPrompt.description,
          icon: logoPrompt.icon
        });
        
        toast.success(`${logoPrompt.name} loaded!`);
        
        // Add small delay for smooth UX
        await new Promise(resolve => setTimeout(resolve, 300));
      }

      setGeneratedLogos(logos);
      toast.success("All logo concepts loaded successfully!");
      
    } catch (error) {
      console.error('Error loading logos:', error);
      toast.error('Failed to load logos. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  const downloadLogo = async (imageURL: string, fileName: string) => {
    try {
      // Fetch the image to handle CORS issues
      const response = await fetch(imageURL);
      const blob = await response.blob();
      
      // Create download link
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `razerfast-${fileName}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      
      toast.success(`${fileName} downloaded!`);
    } catch (error) {
      toast.error('Download failed. Please try right-clicking and saving the image.');
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">RazerFast Logo Generator</h1>
        <p className="text-muted-foreground mb-8">
          Explore 12 unique logo concepts mixing graphics and creative typography for speed and precision
        </p>
        
        
        <Button 
          onClick={generateAllLogos} 
          disabled={isGenerating}
          className="w-full max-w-md mx-auto"
        >
          {isGenerating ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              Loading Logos...
            </>
          ) : (
            "Load All 12 Logo Concepts"
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
          <p>1. <strong>Load logos:</strong> Click the button above to load all 6 logo concepts</p>
          <p>2. <strong>Preview designs:</strong> View each unique logo concept with different speed themes</p>
          <p>3. <strong>Download favorites:</strong> Click the download button on logos you like</p>
          <p>4. <strong>Use in your brand:</strong> High-quality PNG files ready for your business</p>
        </CardContent>
      </Card>
    </div>
  );
};