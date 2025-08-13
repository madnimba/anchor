import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Ship, Sailboat, Anchor, Weight, Ruler, Shield, Zap, CheckCircle, ArrowRight, Star } from "lucide-react"

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />

      {/* Product Hero - Enhanced with Multiple Angles */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 items-center">
            <div className="space-y-8 max-w-3xl mx-auto text-center">
              <Badge className="bg-teal-500/20 text-teal-400 border-teal-500/30 px-4 py-2">Premium Marine Anchor</Badge>
              <h1 className="font-bold text-5xl md:text-6xl text-slate-100 leading-tight">
                Anchorio Marine Anchor System
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed">
                Precision-engineered marine anchors crafted from 316 marine-grade stainless steel. Designed for superior
                holding power and tested in the world's most challenging waters.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                <div className="flex items-center space-x-3 text-slate-300">
                  <CheckCircle className="w-5 h-5 text-teal-400 flex-shrink-0" />
                  <span>316 Marine Grade Steel</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-300">
                  <CheckCircle className="w-5 h-5 text-teal-400 flex-shrink-0" />
                  <span>15:1 Holding Ratio</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-300">
                  <CheckCircle className="w-5 h-5 text-teal-400 flex-shrink-0" />
                  <span>Lifetime Warranty</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-300">
                  <CheckCircle className="w-5 h-5 text-teal-400 flex-shrink-0" />
                  <span>Quick-Set Technology</span>
                </div>
              </div>

              <div className="bg-slate-800/50 rounded-xl p-5 md:p-6 border border-slate-700">
                <h3 className="font-bold text-lg text-slate-100 mb-3">Materials & Testing</h3>
                <p className="text-slate-300 leading-relaxed">
                  Each Anchorio anchor is forged from premium 316 marine-grade stainless steel and undergoes rigorous
                  testing in simulated storm conditions. Our design philosophy centers on maximum holding power while
                  maintaining ease of retrieval, ensuring your vessel stays secure without compromising operational
                  efficiency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Variants - Enhanced with Compact Cards */}
      <section className="py-16 md:py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="font-bold text-4xl md:text-5xl text-slate-100 mb-6">Choose Your Model</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Three specialized variants designed for different vessel types and marine applications. Each model is
              precision-engineered for specific operational requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Commercial Model - Enhanced */}
            <Card className="bg-slate-800 border-slate-700 hover:border-blue-500/50 transition-all duration-500 group hover:shadow-2xl hover:shadow-blue-500/10">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform">
                  <Ship className="w-8 h-8 md:w-10 md:h-10 text-blue-400" />
                </div>
                <CardTitle className="font-bold text-2xl text-slate-100">Commercial Maritime</CardTitle>
                <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30 w-fit mx-auto px-3 py-1">
                  Heavy Duty
                </Badge>
              </CardHeader>
              <CardContent className="space-y-6">
                 <img
                  src="/commercial.png"
                  alt="Commercial Maritime Anchor"
                   className="w-full h-auto object-contain rounded-lg block"
                />

                <div className="space-y-4">
                  <div className="bg-slate-900/50 rounded-lg p-4 space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400">Weight Range:</span>
                      <span className="text-slate-100 font-medium">50-500 lbs</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400">Holding Power:</span>
                      <span className="text-slate-100 font-medium">Up to 7,500 lbs</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400">Chain Size:</span>
                      <span className="text-slate-100 font-medium">3/8" - 1"</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-slate-100 font-medium mb-2">Intended Vessel Types:</h4>
                    <ul className="text-sm text-slate-400 space-y-1">
                      <li>• Cargo ships and container vessels</li>
                      <li>• Commercial fishing fleets</li>
                      <li>• Offshore platforms and workboats</li>
                      <li>• Emergency and rescue vessels</li>
                    </ul>
                  </div>
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-500 text-white py-3 font-medium">
                  Request Commercial Quote
                </Button>
              </CardContent>
            </Card>

            {/* Universal Model - Enhanced */}
            <Card className="bg-slate-800 border-teal-500/30 hover:border-teal-500/70 transition-all duration-500 group hover:shadow-2xl hover:shadow-teal-500/20 ring-1 ring-teal-500/20">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-teal-500/20 to-teal-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform">
                  <Anchor className="w-8 h-8 md:w-10 md:h-10 text-teal-400" />
                </div>
                <CardTitle className="font-bold text-2xl text-slate-100">Universal</CardTitle>
                <Badge className="bg-teal-500/20 text-teal-400 border-teal-500/30 w-fit mx-auto px-3 py-1">
                  Most Popular
                </Badge>
              </CardHeader>
              <CardContent className="space-y-6">
                 <img
                  src="/universal.png"
                  alt="Universal Marine Anchor"
                   className="w-full h-auto object-contain rounded-lg block"
                />

                <div className="space-y-4">
                  <div className="bg-slate-900/50 rounded-lg p-4 space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400">Weight Range:</span>
                      <span className="text-slate-100 font-medium">15-150 lbs</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400">Holding Power:</span>
                      <span className="text-slate-100 font-medium">Up to 2,250 lbs</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400">Chain Size:</span>
                      <span className="text-slate-100 font-medium">1/4" - 5/8"</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-slate-100 font-medium mb-2">Intended Vessel Types:</h4>
                    <ul className="text-sm text-slate-400 space-y-1">
                      <li>• Motor yachts and cruisers</li>
                      <li>• Charter and tour boats</li>
                      <li>• Work boats and patrol vessels</li>
                      <li>• Medium recreational craft</li>
                    </ul>
                  </div>
                </div>

                <Button className="w-full bg-teal-600 hover:bg-teal-500 text-white py-3 font-medium">
                  Request Universal Quote
                </Button>
              </CardContent>
            </Card>

            {/* Recreational Model - Enhanced */}
            <Card className="bg-slate-800 border-slate-700 hover:border-emerald-500/50 transition-all duration-500 group hover:shadow-2xl hover:shadow-emerald-500/10">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform">
                  <Sailboat className="w-8 h-8 md:w-10 md:h-10 text-emerald-400" />
                </div>
                <CardTitle className="font-bold text-2xl text-slate-100">Recreational Marine</CardTitle>
                <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30 w-fit mx-auto px-3 py-1">
                  Lightweight
                </Badge>
              </CardHeader>
              <CardContent className="space-y-6">
                 <img
                  src="/recreational.png"
                  alt="Recreational Marine Anchor"
                   className="w-full h-auto object-contain rounded-lg block"
                />

                <div className="space-y-4">
                  <div className="bg-slate-900/50 rounded-lg p-4 space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400">Weight Range:</span>
                      <span className="text-slate-100 font-medium">5-50 lbs</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400">Holding Power:</span>
                      <span className="text-slate-100 font-medium">Up to 750 lbs</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400">Chain Size:</span>
                      <span className="text-slate-100 font-medium">3/16" - 3/8"</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-slate-100 font-medium mb-2">Intended Vessel Types:</h4>
                    <ul className="text-sm text-slate-400 space-y-1">
                      <li>• Sailboats and sailing yachts</li>
                      <li>• Small craft and dinghies</li>
                      <li>• Personal watercraft</li>
                      <li>• Fishing boats and tenders</li>
                    </ul>
                  </div>
                </div>

                <Button className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-3 font-medium">
                  Request Recreational Quote
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Target Group Applications - Enhanced Split Section */}
      <section className="py-16 md:py-24 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="commercial" className="w-full">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="font-bold text-3xl md:text-5xl text-slate-100 mb-4 md:mb-6">Applications & Use Cases</h2>
              <p className="text-lg md:text-xl text-slate-400 mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed">
                Discover how Anchorio anchors serve different maritime sectors with specialized solutions for every
                operational requirement
              </p>
              <TabsList className="bg-slate-700 border-slate-600 p-1">
                <TabsTrigger value="commercial" className="data-[state=active]:bg-slate-600 px-5 md:px-8 py-2.5 md:py-3 text-sm md:text-base">
                  Commercial Maritime
                </TabsTrigger>
                <TabsTrigger value="recreational" className="data-[state=active]:bg-slate-600 px-5 md:px-8 py-2.5 md:py-3 text-sm md:text-base">
                  Recreational Marine
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="commercial" className="space-y-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                  <div className="space-y-4">
                    <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30 px-3 py-1">
                      Heavy Duty Solutions
                    </Badge>
                    <h3 className="font-bold text-3xl text-slate-100">Commercial Maritime Solutions</h3>
                    <p className="text-lg text-slate-300 leading-relaxed">
                      Built for the demanding requirements of commercial operations. Our heavy-duty anchors provide
                      reliable holding power for cargo vessels, fishing fleets, and offshore platforms in the world's
                      most challenging waters.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-bold text-lg text-slate-100">Vessel Types:</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                          <div>
                            <span className="text-slate-300 font-medium">Cargo & Container Ships</span>
                            <p className="text-sm text-slate-500">50-500 lb anchors for maximum holding</p>
                          </div>
                        </li>
                        <li className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                          <div>
                            <span className="text-slate-300 font-medium">Commercial Fishing Fleets</span>
                            <p className="text-sm text-slate-500">Storm-tested for harsh conditions</p>
                          </div>
                        </li>
                        <li className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                          <div>
                            <span className="text-slate-300 font-medium">Offshore Platforms</span>
                            <p className="text-sm text-slate-500">Heavy-duty workboat applications</p>
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-bold text-lg text-slate-100">Key Features:</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start space-x-3">
                          <Star className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                          <div>
                            <span className="text-slate-300 font-medium">Emergency Readiness</span>
                            <p className="text-sm text-slate-500">Quick deployment systems</p>
                          </div>
                        </li>
                        <li className="flex items-start space-x-3">
                          <Star className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                          <div>
                            <span className="text-slate-300 font-medium">Fleet Standardization</span>
                            <p className="text-sm text-slate-500">Consistent performance across vessels</p>
                          </div>
                        </li>
                        <li className="flex items-start space-x-3">
                          <Star className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                          <div>
                            <span className="text-slate-300 font-medium">24/7 Support</span>
                            <p className="text-sm text-slate-500">Global technical assistance</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <img
                    src="/anchor3.webp"
                    alt="Commercial Maritime Vessel with Anchorio Anchor"
                    className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent rounded-2xl"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-slate-900/90 rounded-lg p-4 border border-slate-700">
                      <h4 className="font-bold text-slate-100 mb-2">Commercial Grade Performance</h4>
                      <p className="text-sm text-slate-300">Trusted by major shipping lines worldwide</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="recreational" className="space-y-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                  <div className="space-y-4">
                    <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30 px-3 py-1">
                      Leisure Solutions
                    </Badge>
                    <h3 className="font-bold text-3xl text-slate-100">Recreational Marine Excellence</h3>
                    <p className="text-lg text-slate-300 leading-relaxed">
                      Perfect for leisure boating and recreational activities. Lightweight yet powerful, our
                      recreational anchors provide peace of mind for weekend warriors and sailing enthusiasts exploring
                      coastal waters.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <h4 className="font-bold text-lg text-slate-100">Vessel Types:</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                          <div>
                            <span className="text-slate-300 font-medium">Sailboats & Yachts</span>
                            <p className="text-sm text-slate-500">15-150 lb range for cruising</p>
                          </div>
                        </li>
                        <li className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                          <div>
                            <span className="text-slate-300 font-medium">Motor Cruisers</span>
                            <p className="text-sm text-slate-500">Easy handling and retrieval</p>
                          </div>
                        </li>
                        <li className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                          <div>
                            <span className="text-slate-300 font-medium">Small Craft</span>
                            <p className="text-sm text-slate-500">5-50 lb lightweight options</p>
                          </div>
                        </li>
                      </ul>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-bold text-lg text-slate-100">Key Benefits:</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start space-x-3">
                          <Star className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                          <div>
                            <span className="text-slate-300 font-medium">Easy Handling</span>
                            <p className="text-sm text-slate-500">Lightweight design for solo operation</p>
                          </div>
                        </li>
                        <li className="flex items-start space-x-3">
                          <Star className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                          <div>
                            <span className="text-slate-300 font-medium">Quick Set</span>
                            <p className="text-sm text-slate-500">Fast anchoring for day trips</p>
                          </div>
                        </li>
                        <li className="flex items-start space-x-3">
                          <Star className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                          <div>
                            <span className="text-slate-300 font-medium">Compact Storage</span>
                            <p className="text-sm text-slate-500">Space-efficient design</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <img
                    src="/anchor3.webp"
                    alt="Recreational Sailing Vessel with Anchorio Anchor"
                    className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent rounded-2xl"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-slate-900/90 rounded-lg p-4 border border-slate-700">
                      <h4 className="font-bold text-slate-100 mb-2">Recreational Excellence</h4>
                      <p className="text-sm text-slate-300">Perfect for weekend adventures and coastal cruising</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Mini Specs Section - Enhanced with Icon-Based Table */}
      <section className="py-16 md:py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="font-bold text-3xl md:text-5xl text-slate-100 mb-4 md:mb-6">Technical Specifications</h2>
            <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Precision engineering meets maritime excellence in every detail. See the technical specifications that set
              Anchorio apart from the competition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-16">
            {/* Material */}
            <Card className="bg-slate-800 border-slate-700 text-center hover:border-teal-500/50 transition-all duration-300 group">
              <CardContent className="p-6 md:p-8">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-teal-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform">
                  <Shield className="w-7 h-7 md:w-8 md:h-8 text-teal-400" />
                </div>
                <h3 className="font-bold text-xl text-slate-100 mb-3">Material</h3>
                <p className="text-slate-400 mb-2">316 Marine Grade</p>
                <p className="text-slate-400">Stainless Steel</p>
                <div className="mt-4 text-xs text-slate-500">Maximum corrosion resistance</div>
              </CardContent>
            </Card>

            {/* Weight Range */}
            <Card className="bg-slate-800 border-slate-700 text-center hover:border-teal-500/50 transition-all duration-300 group">
              <CardContent className="p-6 md:p-8">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-teal-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform">
                  <Weight className="w-7 h-7 md:w-8 md:h-8 text-teal-400" />
                </div>
                <h3 className="font-bold text-xl text-slate-100 mb-3">Weight Range</h3>
                <p className="text-slate-400 mb-2">5 lbs - 500 lbs</p>
                <p className="text-slate-400">All Vessel Types</p>
                <div className="mt-4 text-xs text-slate-500">Covers 95% of marine applications</div>
              </CardContent>
            </Card>

            {/* Holding Power */}
            <Card className="bg-slate-800 border-slate-700 text-center hover:border-teal-500/50 transition-all duration-300 group">
              <CardContent className="p-6 md:p-8">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-teal-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform">
                  <Zap className="w-7 h-7 md:w-8 md:h-8 text-teal-400" />
                </div>
                <h3 className="font-bold text-xl text-slate-100 mb-3">Holding Ratio</h3>
                <p className="text-slate-400 mb-2">15:1 Weight to Hold</p>
                <p className="text-slate-400">Industry Leading</p>
                <div className="mt-4 text-xs text-slate-500">Superior grip performance</div>
              </CardContent>
            </Card>

            {/* Dimensions */}
            <Card className="bg-slate-800 border-slate-700 text-center hover:border-teal-500/50 transition-all duration-300 group">
              <CardContent className="p-6 md:p-8">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-teal-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform">
                  <Ruler className="w-7 h-7 md:w-8 md:h-8 text-teal-400" />
                </div>
                <h3 className="font-bold text-xl text-slate-100 mb-3">Dimensions</h3>
                <p className="text-slate-400 mb-2">Custom Sized</p>
                <p className="text-slate-400">Per Application</p>
                <div className="mt-4 text-xs text-slate-500">Optimized for each vessel type</div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-slate-800/50 rounded-2xl p-6 md:p-8 border border-slate-700 mb-10 md:mb-12">
            <h3 className="font-bold text-xl md:text-2xl text-slate-100 mb-6 md:mb-8 text-center">Detailed Specifications</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="text-left py-3 md:py-4 px-3 md:px-4 text-slate-300 font-medium">Specification</th>
                    <th className="text-center py-3 md:py-4 px-3 md:px-4 text-slate-300 font-medium">Recreational</th>
                    <th className="text-center py-3 md:py-4 px-3 md:px-4 text-slate-300 font-medium">Universal</th>
                    <th className="text-center py-3 md:py-4 px-3 md:px-4 text-slate-300 font-medium">Commercial</th>
                  </tr>
                </thead>
                <tbody className="text-slate-400">
                  <tr className="border-b border-slate-700/50">
                    <td className="py-3 md:py-4 px-3 md:px-4 font-medium">Weight Range</td>
                    <td className="py-3 md:py-4 px-3 md:px-4 text-center">5-50 lbs</td>
                    <td className="py-3 md:py-4 px-3 md:px-4 text-center">15-150 lbs</td>
                    <td className="py-3 md:py-4 px-3 md:px-4 text-center">50-500 lbs</td>
                  </tr>
                  <tr className="border-b border-slate-700/50">
                    <td className="py-3 md:py-4 px-3 md:px-4 font-medium">Holding Power</td>
                    <td className="py-3 md:py-4 px-3 md:px-4 text-center">Up to 750 lbs</td>
                    <td className="py-3 md:py-4 px-3 md:px-4 text-center">Up to 2,250 lbs</td>
                    <td className="py-3 md:py-4 px-3 md:px-4 text-center">Up to 7,500 lbs</td>
                  </tr>
                  <tr className="border-b border-slate-700/50">
                    <td className="py-3 md:py-4 px-3 md:px-4 font-medium">Chain Size</td>
                    <td className="py-3 md:py-4 px-3 md:px-4 text-center">3/16" - 3/8"</td>
                    <td className="py-3 md:py-4 px-3 md:px-4 text-center">1/4" - 5/8"</td>
                    <td className="py-3 md:py-4 px-3 md:px-4 text-center">3/8" - 1"</td>
                  </tr>
                  <tr>
                    <td className="py-3 md:py-4 px-3 md:px-4 font-medium">Warranty</td>
                    <td className="py-3 md:py-4 px-3 md:px-4 text-center text-teal-400">Lifetime</td>
                    <td className="py-3 md:py-4 px-3 md:px-4 text-center text-teal-400">Lifetime</td>
                    <td className="py-3 md:py-4 px-3 md:px-4 text-center text-teal-400">Lifetime</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="text-center">
            <Button size="sm" className="bg-teal-600 hover:bg-teal-500 text-white font-medium px-6 py-3 text-base md:px-10 md:py-4 md:text-lg group">
              Download Full Spec Sheet
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
