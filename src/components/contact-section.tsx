import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Create email content
    const subject = encodeURIComponent("Demande de contact - HBA Consulting")
    const body = encodeURIComponent(`
Bonjour,

Voici les informations de contact :

Nom: ${formData.name}
Email: ${formData.email}
Entreprise: ${formData.company || 'Non spécifiée'}

Message:
${formData.message}

Cordialement,
${formData.name}
    `.trim())
    
    // Open email client with pre-filled information
    const mailtoLink = `mailto:hba@hbaconseil.com?subject=${subject}&body=${body}`
    window.location.href = mailtoLink
  }

  return (
    <section id="contact" className="py-32 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20">
            <h2 className="text-4xl md:text-5xl font-light text-[#002961] mb-16">Contactez-nous</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-medium text-[#002961] mb-8">Parlons de votre projet</h3>
              <p className="text-gray-600 leading-relaxed mb-12">
                Notre équipe est à votre disposition pour échanger sur vos besoins en conseil et vous proposer des
                solutions adaptées à votre entreprise.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#13a0d3]/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-[#13a0d3]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-[#002961] mb-2">Email</h4>
                    <a
                      href="mailto:hba@hbaconseil.com"
                      className="text-gray-600 hover:text-[#13a0d3] transition-colors"
                    >
                      hba@hbaconseil.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-[#13a0d3]/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-[#13a0d3]" />
                  </div>
                  <div>
                    <h4 className="font-medium text-[#002961] mb-2">Localisation</h4>
                    <p className="text-gray-600">Casablanca, Maroc</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#002961] mb-2">
                    Nom complet *
                  </label>
                  <Input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Votre nom"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#002961] mb-2">
                    Email *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="votre@email.com"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-[#002961] mb-2">
                    Entreprise
                  </label>
                  <Input
                    id="company"
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Nom de votre entreprise"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#002961] mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Décrivez votre projet ou vos besoins..."
                    rows={5}
                    className="w-full"
                  />
                </div>

                <Button type="submit" className="w-full bg-[#13a0d3] hover:bg-[#002961] text-white">
                  Envoyer le message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
