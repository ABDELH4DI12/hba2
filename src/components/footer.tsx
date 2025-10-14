import { Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-[#002961] text-white py-4">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left flex flex-col items-center md:items-start">
            <img 
              src="/assets/hbaLogo.png" 
              alt="HBA Logo" 
              className="h-8 w-auto mb-2"
            />
            <p className="text-xs text-white/60">© 2025 HBA Premium Consulting</p>
          </div>

          <a
            href="mailto:hba@hbaconseil.com"
            className="inline-flex items-center gap-2 text-[#13a0d3] hover:text-white transition-colors text-sm"
          >
            <Mail className="w-4 h-4" />
            hba@hbaconseil.com
          </a>
        </div>
      </div>
    </footer>
  )
}
