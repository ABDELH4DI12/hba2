import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin } from "lucide-react"
import { motion } from "framer-motion"

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
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-medium text-gray-500 mb-4 tracking-wide">Prenons contact</p>
          <h2 className="text-4xl md:text-5xl font-light text-[#002961]">Contactez-nous</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          <motion.div 
            className="bg-white p-12 rounded-lg"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-medium text-[#002961] mb-8">Informations de contact</h3>
            <p className="text-gray-600 leading-relaxed mb-12">
              Notre équipe est à votre disposition pour échanger sur vos besoins en conseil et vous proposer des
              solutions adaptées à votre entreprise.
            </p>

            <div className="space-y-6">
              <motion.div 
                className="flex items-center gap-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 rounded-full bg-[#13a0d3]/10 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-[#13a0d3]" />
                </div>
                <div>
                  <p className="font-medium text-[#002961]">Email</p>
                  <p className="text-gray-600">contact@hba-consulting.ma</p>
                </div>
              </motion.div>


              <motion.div 
                className="flex items-center gap-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 rounded-full bg-[#13a0d3]/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-[#13a0d3]" />
                </div>
                <div>
                  <p className="font-medium text-[#002961]">Adresse</p>
                  <p className="text-gray-600">Casablanca, Maroc</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            className="bg-white p-12 rounded-lg"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-medium text-[#002961] mb-8">Prenez rendez-vous</h3>
            <p className="text-gray-600 leading-relaxed mb-8">
              Remplissez ce formulaire et nous vous recontacterons dans les plus brefs délais.
            </p>

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
            </motion.div>
        </div>
      </div>
    </section>
  )
}
