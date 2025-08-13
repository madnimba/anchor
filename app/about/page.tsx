import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Clock, Target, Mail, Phone, MapPin, Send, CheckCircle, Award, Users, Globe, Wrench } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />

      {/* About Hero */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <Badge className="bg-teal-500/20 text-teal-400 border-teal-500/30 px-6 py-3 text-lg">Our Story</Badge>
            <h1 className="font-bold text-5xl md:text-6xl text-slate-100 max-w-5xl mx-auto leading-tight">
              Built on Stability, Dependability, and Perfect Timing
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed max-w-4xl mx-auto">
              For over two decades, Anchorio has been the trusted name in marine anchoring solutions, combining
              traditional craftsmanship with cutting-edge engineering to create anchors that never let you down.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-400 mb-2">20+</div>
                <div className="text-slate-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-400 mb-2">1000+</div>
                <div className="text-slate-400">Vessels Equipped</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-400 mb-2">50+</div>
                <div className="text-slate-400">Countries Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-400 mb-2">99.9%</div>
                <div className="text-slate-400">Reliability Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Story - Enhanced */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <div className="space-y-6">
                <h2 className="font-bold text-4xl md:text-5xl text-slate-100">Why Anchorio Exists</h2>
                <p className="text-lg text-slate-300 leading-relaxed">
                  Born from a simple belief: every vessel deserves an anchor that won't let them down. We started
                  Anchorio because we understood that in the unpredictable world of maritime operations, reliability
                  isn't just important—it's everything.
                </p>
                <p className="text-lg text-slate-300 leading-relaxed">
                  Our founders, seasoned maritime professionals, experienced firsthand the frustration of anchors that
                  failed when they were needed most. This drove us to create something better: anchors that embody the
                  core values of stability, dependability, and perfect timing.
                </p>

                <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                  <h3 className="font-bold text-lg text-slate-100 mb-4">Our Founding Principles</h3>
                  <p className="text-slate-300 leading-relaxed">
                    Every Anchorio anchor reflects our founder's personality traits: unwavering stability in crisis
                    situations, dependable performance when others fail, and the perfect timing to hold when it matters
                    most. These aren't just product features—they're the DNA of our company culture.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-br from-teal-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <Target className="w-10 h-10 text-teal-400" />
                  </div>
                  <h3 className="font-bold text-xl text-slate-100 mb-3">Stability</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Unwavering performance in all conditions, from calm harbors to hurricane-force storms
                  </p>
                </div>
                <div className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-br from-teal-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-10 h-10 text-teal-400" />
                  </div>
                  <h3 className="font-bold text-xl text-slate-100 mb-3">Dependability</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Trusted by professionals worldwide who stake their reputation on our performance
                  </p>
                </div>
                <div className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-br from-teal-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    <Clock className="w-10 h-10 text-teal-400" />
                  </div>
                  <h3 className="font-bold text-xl text-slate-100 mb-3">Perfect Timing</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Ready when you need it most, with quick-set technology and instant holding power
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-slate-800/50 rounded-2xl p-8 backdrop-blur-sm border border-slate-700">
                <img
                  src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=500&fit=crop&crop=center"
                  alt="Anchorio Manufacturing Process and Heritage"
                  className="w-full h-96 object-cover rounded-xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-teal-500 to-blue-500 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-2xl">
                  Since 2002
                </div>
                <div className="absolute -top-6 -left-6 bg-slate-900/90 text-teal-400 px-6 py-3 rounded-xl font-medium border border-slate-700">
                  Maritime Heritage
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Identity Strip - Enhanced */}
      <section className="py-24 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="font-bold text-4xl md:text-5xl text-slate-100 mb-6">Our Visual Identity</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Every element of our brand reflects our commitment to maritime excellence and the values that drive us
              forward
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Logo */}
            <Card className="bg-slate-900 border-slate-700 text-center hover:border-teal-500/50 transition-all duration-300 group">
              <CardContent className="p-10">
                <div className="w-24 h-24 mx-auto mb-8 group-hover:scale-110 transition-transform">
                  <img src="/images/anchorio-logo.png" alt="Anchorio Logo" className="w-full h-full object-contain" />
                </div>
                <h3 className="font-bold text-2xl text-slate-100 mb-4">Brand Logo</h3>
                <p className="text-slate-400 leading-relaxed mb-4">
                  The shield represents protection and strength, while the anchor symbolizes our core mission: keeping
                  you steady in every storm
                </p>
                <div className="text-sm text-slate-500">"STEADY IN EVERY STORM" - Our brand promise</div>
              </CardContent>
            </Card>

            {/* Colors */}
            <Card className="bg-slate-900 border-slate-700 text-center hover:border-teal-500/50 transition-all duration-300 group">
              <CardContent className="p-10">
                <div className="flex justify-center space-x-3 mb-8">
                  <div className="space-y-2">
                    <div className="w-12 h-12 bg-slate-800 rounded-xl border-2 border-slate-600 group-hover:scale-110 transition-transform"></div>
                    <div className="text-xs text-slate-500">Navy</div>
                  </div>
                  <div className="space-y-2">
                    <div className="w-12 h-12 bg-slate-600 rounded-xl group-hover:scale-110 transition-transform"></div>
                    <div className="text-xs text-slate-500">Silver</div>
                  </div>
                  <div className="space-y-2">
                    <div className="w-12 h-12 bg-teal-500 rounded-xl group-hover:scale-110 transition-transform"></div>
                    <div className="text-xs text-slate-500">Ocean</div>
                  </div>
                </div>
                <h3 className="font-bold text-2xl text-slate-100 mb-4">Color Palette</h3>
                <p className="text-slate-400 leading-relaxed mb-4">
                  Navy blue for trust and stability, silver for premium quality, and ocean teal for maritime heritage
                </p>
                <div className="text-sm text-slate-500">Inspired by the depths of the ocean</div>
              </CardContent>
            </Card>

            {/* Typography & Tagline */}
            <Card className="bg-slate-900 border-slate-700 text-center hover:border-teal-500/50 transition-all duration-300 group">
              <CardContent className="p-10">
                <div className="w-24 h-24 bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform border border-slate-600">
                  <span className="text-4xl font-bold text-teal-400">"</span>
                </div>
                <h3 className="font-bold text-2xl text-slate-100 mb-4">Brand Voice</h3>
                <p className="text-slate-400 leading-relaxed mb-4">
                  Bold, confident typography paired with our signature tagline that promises reliability when it matters
                  most
                </p>
                <div className="text-lg font-bold text-teal-400 italic">"Steady in Every Storm"</div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 bg-slate-900/50 rounded-2xl p-8 border border-slate-700">
            <h3 className="font-bold text-2xl text-slate-100 mb-8 text-center">Complete Brand System</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <Award className="w-12 h-12 text-teal-400 mx-auto mb-4" />
                <h4 className="font-bold text-slate-100 mb-2">Premium Quality</h4>
                <p className="text-sm text-slate-400">Every element reflects our commitment to excellence</p>
              </div>
              <div>
                <Users className="w-12 h-12 text-teal-400 mx-auto mb-4" />
                <h4 className="font-bold text-slate-100 mb-2">Trust & Reliability</h4>
                <p className="text-sm text-slate-400">Built on decades of maritime expertise</p>
              </div>
              <div>
                <Globe className="w-12 h-12 text-teal-400 mx-auto mb-4" />
                <h4 className="font-bold text-slate-100 mb-2">Global Recognition</h4>
                <p className="text-sm text-slate-400">Recognized worldwide for superior performance</p>
              </div>
              <div>
                <Wrench className="w-12 h-12 text-teal-400 mx-auto mb-4" />
                <h4 className="font-bold text-slate-100 mb-2">Engineering Excellence</h4>
                <p className="text-sm text-slate-400">Precision craftsmanship in every anchor</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form - Enhanced */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="font-bold text-4xl md:text-5xl text-slate-100 mb-6">Get in Touch</h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Ready to discuss your anchoring needs? We're here to help you find the perfect solution for your vessel
              and operational requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info - Enhanced */}
            <div className="space-y-10">
              <div>
                <h3 className="font-bold text-3xl text-slate-100 mb-8">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 group">
                    <div className="w-14 h-14 bg-teal-500/20 rounded-xl flex items-center justify-center group-hover:bg-teal-500/30 transition-colors">
                      <Mail className="w-7 h-7 text-teal-400" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-100 text-lg mb-1">Email</p>
                      <p className="text-slate-400">info@anchorio.com</p>
                      <p className="text-sm text-slate-500">Response within 24 hours</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 group">
                    <div className="w-14 h-14 bg-teal-500/20 rounded-xl flex items-center justify-center group-hover:bg-teal-500/30 transition-colors">
                      <Phone className="w-7 h-7 text-teal-400" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-100 text-lg mb-1">Phone</p>
                      <p className="text-slate-400">+1 (555) 123-4567</p>
                      <p className="text-sm text-slate-500">24/7 emergency support available</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 group">
                    <div className="w-14 h-14 bg-teal-500/20 rounded-xl flex items-center justify-center group-hover:bg-teal-500/30 transition-colors">
                      <MapPin className="w-7 h-7 text-teal-400" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-100 text-lg mb-1">Headquarters</p>
                      <p className="text-slate-400">Maritime District, Harbor City</p>
                      <p className="text-sm text-slate-500">Global shipping available</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
                <h4 className="font-bold text-xl text-slate-100 mb-6">Business Hours</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-slate-700/50">
                    <span className="text-slate-300 font-medium">Monday - Friday</span>
                    <span className="text-slate-400">8:00 AM - 6:00 PM EST</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-700/50">
                    <span className="text-slate-300 font-medium">Saturday</span>
                    <span className="text-slate-400">9:00 AM - 4:00 PM EST</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-slate-700/50">
                    <span className="text-slate-300 font-medium">Sunday</span>
                    <span className="text-slate-400">Closed</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-slate-300 font-medium">Emergency Support</span>
                    <span className="text-teal-400 font-medium">24/7 Available</span>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-teal-500/10 rounded-lg border border-teal-500/20">
                  <p className="text-sm text-teal-400 font-medium mb-1">Quick Response Guarantee</p>
                  <p className="text-xs text-slate-400">All inquiries answered within 4 business hours</p>
                </div>
              </div>
            </div>

            {/* Contact Form - Enhanced */}
            <Card className="bg-slate-800 border-slate-700 hover:border-teal-500/30 transition-all duration-300">
              <CardHeader className="pb-6">
                <CardTitle className="font-bold text-2xl text-slate-100">Send us a Message</CardTitle>
                <p className="text-slate-400">Tell us about your anchoring needs and we'll provide expert guidance</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Full Name *</label>
                    <Input
                      placeholder="Your full name"
                      className="bg-slate-700 border-slate-600 text-slate-100 placeholder:text-slate-400 h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Email Address *</label>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      className="bg-slate-700 border-slate-600 text-slate-100 placeholder:text-slate-400 h-12"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Phone Number</label>
                    <Input
                      placeholder="+1 (555) 123-4567"
                      className="bg-slate-700 border-slate-600 text-slate-100 placeholder:text-slate-400 h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300">Inquiry Type *</label>
                    <Select>
                      <SelectTrigger className="bg-slate-700 border-slate-600 text-slate-100 h-12">
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-700 border-slate-600">
                        <SelectItem value="fleet">Fleet Purchase</SelectItem>
                        <SelectItem value="individual">Individual Purchase</SelectItem>
                        <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                        <SelectItem value="support">Technical Support</SelectItem>
                        <SelectItem value="warranty">Warranty Claim</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Vessel Information</label>
                  <Input
                    placeholder="Vessel type, size, and intended use"
                    className="bg-slate-700 border-slate-600 text-slate-100 placeholder:text-slate-400 h-12"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300">Message *</label>
                  <Textarea
                    placeholder="Tell us about your anchoring needs, operational requirements, or any questions you have..."
                    rows={5}
                    className="bg-slate-700 border-slate-600 text-slate-100 placeholder:text-slate-400 resize-none"
                  />
                </div>

                <div className="flex items-start space-x-3">
                  <input type="checkbox" className="mt-1 w-4 h-4 text-teal-500 bg-slate-700 border-slate-600 rounded" />
                  <label className="text-sm text-slate-400">
                    I agree to receive communications from Anchorio regarding my inquiry and related marine products.
                  </label>
                </div>

                <Button className="w-full bg-teal-600 hover:bg-teal-500 text-white font-medium py-4 text-lg group">
                  Send Message
                  <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>

                <p className="text-xs text-slate-500 text-center">
                  * Required fields. We respect your privacy and will never share your information.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
