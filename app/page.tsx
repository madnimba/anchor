import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Zap, Award, ArrowRight, Anchor, Weight, Wrench, Star, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 md:pt-28 pb-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23334155' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: "60px 60px",
            }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge className="bg-teal-500/20 text-teal-400 border-teal-500/30 px-4 py-2 text-sm font-medium">
                  Premium Marine Equipment
                </Badge>
                <h1 className="font-bold text-5xl md:text-7xl text-slate-100 leading-tight">
                  <span className="relative inline-block">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">Steady</span>
                    <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full"></span>
                  </span>{" "}
                  in Every{" "}
                  <span className="text-slate-100">Storm</span>
                </h1>
                <p className="text-xl text-slate-300 leading-relaxed max-w-lg">
                  Premium marine anchors engineered for maximum holding power. Built to withstand the harshest
                  conditions and trusted by professionals worldwide for over two decades.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/product">
                  <Button
                    size="lg"
                    className="bg-teal-600 hover:bg-teal-500 text-white font-medium px-8 py-4 text-lg group"
                  >
                    Explore Product
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-4 text-lg bg-transparent"
                >
                  View Specs
                </Button>
              </div>

              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="text-slate-300 text-sm">20+ Years Experience</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-teal-400" />
                  <span className="text-slate-300 text-sm">Lifetime Warranty</span>
                </div>
              </div>
            </div>

            {/* Hero Image - Large Product Visual */}
            <div className="relative">
              <div className="bg-slate-800/50 rounded-2xl p-8 backdrop-blur-sm border border-slate-700 relative overflow-hidden">
                <img
                  src="/anchor1.jpg"
                  alt="Premium Anchorio Marine Anchor - Hero Product Shot"
                  className="w-full h-64 md:h-96 object-cover rounded-xl shadow-2xl"
                />
                <div className="absolute top-3 right-3 md:top-4 md:right-4 bg-gradient-to-r from-teal-500 to-blue-500 text-white px-3 py-2 md:px-6 md:py-3 rounded-lg font-bold shadow-lg text-xs sm:text-sm md:text-base z-10">
                  Premium Quality
                </div>
                <div className="absolute bottom-3 left-3 md:bottom-4 md:left-4 bg-slate-900/90 text-teal-400 px-3 py-1.5 md:px-4 md:py-2 rounded-lg font-medium border border-slate-700 text-xs sm:text-sm md:text-base z-10">
                  316 Marine Steel
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Promise Highlights - Enhanced */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="font-bold text-4xl md:text-5xl text-slate-100 mb-6">Why Choose Anchorio?</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Three core principles that make our anchors the trusted choice for maritime professionals and recreational
              boaters worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Reliability - Enhanced */}
            <Card className="bg-slate-800 border-slate-700 hover:border-teal-500/50 transition-all duration-500 group hover:shadow-2xl hover:shadow-teal-500/10">
              <CardContent className="p-10 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-teal-500/20 to-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-10 h-10 text-teal-400" />
                </div>
                <h3 className="font-bold text-2xl text-slate-100 mb-4">Reliability</h3>
                <p className="text-slate-400 leading-relaxed mb-6">
                  Built to hold in all conditions. Our anchors undergo rigorous testing to ensure they perform when you
                  need them most, from calm harbors to stormy seas.
                </p>
                <ul className="text-left space-y-2 text-sm text-slate-500">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0" />
                    <span>Storm-tested design</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0" />
                    <span>All-weather performance</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0" />
                    <span>Corrosion resistant</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Performance - Enhanced */}
            <Card className="bg-slate-800 border-slate-700 hover:border-teal-500/50 transition-all duration-500 group hover:shadow-2xl hover:shadow-teal-500/10">
              <CardContent className="p-10 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-teal-500/20 to-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-10 h-10 text-teal-400" />
                </div>
                <h3 className="font-bold text-2xl text-slate-100 mb-4">Performance</h3>
                <p className="text-slate-400 leading-relaxed mb-6">
                  Engineered for maximum holding power. Advanced design and premium materials deliver superior grip and
                  stability in any seabed condition.
                </p>
                <ul className="text-left space-y-2 text-sm text-slate-500">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0" />
                    <span>15:1 holding ratio</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0" />
                    <span>Quick-set technology</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0" />
                    <span>Universal seabed grip</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Trust - Enhanced */}
            <Card className="bg-slate-800 border-slate-700 hover:border-teal-500/50 transition-all duration-500 group hover:shadow-2xl hover:shadow-teal-500/10">
              <CardContent className="p-10 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-teal-500/20 to-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-10 h-10 text-teal-400" />
                </div>
                <h3 className="font-bold text-2xl text-slate-100 mb-4">Trust</h3>
                <p className="text-slate-400 leading-relaxed mb-6">
                  Backed by rigorous testing and industry standards. Trusted by commercial fleets and recreational
                  boaters worldwide for over two decades.
                </p>
                <ul className="text-left space-y-2 text-sm text-slate-500">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0" />
                    <span>Industry certified</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0" />
                    <span>Global fleet trusted</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-teal-400 flex-shrink-0" />
                    <span>20+ year heritage</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Visual Specs Teaser - Enhanced with Minimal Diagram */}
      <section className="py-24 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="font-bold text-4xl md:text-5xl text-slate-100 mb-6">Built for Every Vessel</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Precision engineering meets maritime excellence in every anchor we craft. See the technical specifications
              that set us apart.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            {/* Weight Range */}
            <div className="text-center group">
              <div className="w-24 h-24 bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform border border-slate-600">
                <Weight className="w-12 h-12 text-slate-100" />
              </div>
              <h3 className="font-bold text-3xl text-slate-100 mb-2">5-500 lbs</h3>
              <p className="text-slate-400 text-lg mb-4">Weight Range</p>
              <div className="w-full bg-slate-700 rounded-full h-2">
                <div className="bg-gradient-to-r from-teal-500 to-blue-500 h-2 rounded-full w-3/4"></div>
              </div>
              <p className="text-xs text-slate-500 mt-2">Covers 95% of vessel types</p>
            </div>

            {/* Materials */}
            <div className="text-center group">
              <div className="w-24 h-24 bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform border border-slate-600">
                <Wrench className="w-12 h-12 text-slate-100" />
              </div>
              <h3 className="font-bold text-3xl text-slate-100 mb-2">316 Steel</h3>
              <p className="text-slate-400 text-lg mb-4">Marine Grade</p>
              <div className="flex justify-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-2 h-8 bg-gradient-to-t from-teal-500 to-blue-500 rounded-full"></div>
                ))}
              </div>
              <p className="text-xs text-slate-500 mt-2">Maximum corrosion resistance</p>
            </div>

            {/* Holding Power */}
            <div className="text-center group">
              <div className="w-24 h-24 bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform border border-slate-600">
                <Anchor className="w-12 h-12 text-slate-100" />
              </div>
              <h3 className="font-bold text-3xl text-slate-100 mb-2">15:1 Ratio</h3>
              <p className="text-slate-400 text-lg mb-4">Holding Power</p>
              <div className="relative w-16 h-16 mx-auto">
                <div className="absolute inset-0 border-4 border-slate-600 rounded-full"></div>
                <div className="absolute inset-0 border-4 border-teal-500 rounded-full border-t-transparent animate-spin"></div>
                <div className="absolute inset-2 bg-gradient-to-br from-teal-500 to-blue-500 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-white">15x</span>
                </div>
              </div>
              <p className="text-xs text-slate-500 mt-2">Industry leading performance</p>
            </div>
          </div>

          <div className="bg-slate-900/50 rounded-2xl p-8 border border-slate-700 mb-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-2xl font-bold text-teal-400 mb-1">3</div>
                <div className="text-slate-400 text-sm">Model Variants</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-teal-400 mb-1">20+</div>
                <div className="text-slate-400 text-sm">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-teal-400 mb-1">1000+</div>
                <div className="text-slate-400 text-sm">Vessels Equipped</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-teal-400 mb-1">99.9%</div>
                <div className="text-slate-400 text-sm">Reliability Rate</div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link href="/product">
              <Button
                size="lg"
                className="bg-teal-600 hover:bg-teal-500 text-white font-medium px-10 py-4 text-lg group"
              >
                View Full Specifications
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
