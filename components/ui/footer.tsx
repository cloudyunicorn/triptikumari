import { Mail, Phone, Linkedin } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Tripti Kumari</h3>
            <p className="text-gray-400">
              Senior Social Media & Digital Marketing Professional
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4" />
                <span>+91 7044217703</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4" />
                <span>goyaltripti3096@gmail.com</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
            <div className="flex gap-3">
              <Button variant="outline" size="icon" className="border-gray-700 hover:border-gray-600">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="border-gray-700 hover:border-gray-600">
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Tripti Kumari. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}