import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe } from "lucide-react";

export default function Contact() {
  return (
    <Layout>
      <div className="min-h-screen relative overflow-hidden" style={{ backgroundColor: '#d4c5d9' }}>
        {/* 3D Geometric Shapes */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Orange/Red Circle */}
          <div className="absolute top-32 right-80 w-16 h-16 bg-gradient-to-br from-red-400 to-orange-400 rounded-full shadow-lg"></div>
          
          {/* Yellow Donut */}
          <div className="absolute top-20 right-32 w-32 h-32 bg-gradient-to-br from-yellow-300 to-yellow-400 rounded-full shadow-lg">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-purple-200 rounded-full"></div>
          </div>
          
          {/* Purple U-Shape */}
          <div className="absolute top-72 right-48 w-48 h-32 perspective-1000">
            <div className="w-full h-full bg-gradient-to-br from-purple-600 to-purple-700 rounded-t-full shadow-lg relative">
              <div className="absolute inset-x-8 top-0 bottom-4 bg-gradient-to-br from-purple-600 to-purple-700 rounded-t-full"></div>
              <div className="absolute inset-x-12 top-4 bottom-8 bg-purple-200 rounded-t-full"></div>
            </div>
            {/* Yellow sphere on the U */}
            <div className="absolute -top-4 right-4 w-16 h-16 bg-gradient-to-br from-yellow-300 to-yellow-400 rounded-full shadow-lg"></div>
            {/* Base platform */}
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-56 h-8 bg-gradient-to-br from-pink-200 to-pink-300 rounded-full shadow-sm"></div>
          </div>
          
          {/* Yellow Donut Platform */}
          <div className="absolute bottom-32 right-16 w-80 h-20 perspective-1000">
            <div className="w-full h-full bg-gradient-to-br from-yellow-300 to-yellow-400 rounded-full shadow-lg relative">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-purple-200 rounded-full"></div>
              {/* Inner hole highlight */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/30 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 min-h-screen flex flex-col">
          {/* Hero Section */}
          <div className="flex-1 flex items-center justify-start px-8 md:px-16 lg:px-24">
            <div className="max-w-4xl">
              <h1 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white leading-none tracking-tight mb-12">
                <div className="mb-4">We've got a</div>
                <div className="mb-4">great feeling</div>
                <div>about this</div>
              </h1>
              
              <Button 
                className="bg-black text-white hover:bg-gray-800 rounded-full px-8 py-6 text-lg font-medium transition-all duration-300 group"
              >
                Submit a brief
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Footer Contact Info */}
          <div className="px-8 md:px-16 lg:px-24 pb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-700">
              {/* Global Contact */}
              <div className="flex items-start space-x-3">
                <Globe className="h-5 w-5 mt-1 text-gray-600" />
                <div>
                  <div className="font-medium text-gray-800 mb-2">We work globally</div>
                  <div className="text-gray-600">contact@razerfast.com</div>
                </div>
              </div>

              {/* USA */}
              <div>
                <div className="font-semibold text-gray-800 mb-2">USA</div>
                <div className="text-gray-600 mb-1">Los Angeles, CA</div>
                <div className="text-gray-600">jason@razerfast.com</div>
              </div>

              {/* Australia */}
              <div>
                <div className="font-semibold text-gray-800 mb-2">Australia</div>
                <div className="text-gray-600 mb-1">Perth, WA</div>
                <div className="text-gray-600">jay@razerfast.com.au</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}