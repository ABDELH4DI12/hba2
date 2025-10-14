import { ChevronRight, Home } from "lucide-react"
import { Link, useLocation } from "react-router-dom"

interface BreadcrumbItem {
  label: string
  path: string
}

export function Breadcrumb() {
  const location = useLocation()
  
  const getBreadcrumbs = (): BreadcrumbItem[] => {
    const path = location.pathname
    const breadcrumbs: BreadcrumbItem[] = [
      { label: "Accueil", path: "/" }
    ]
    
    if (path === "/contact") {
      breadcrumbs.push({ label: "Contact", path: "/contact" })
    } else if (path === "/interventions-medias") {
      breadcrumbs.push({ label: "Interventions Médias", path: "/interventions-medias" })
    }
    
    return breadcrumbs
  }

  const breadcrumbs = getBreadcrumbs()
  
  // Don't show breadcrumbs on homepage
  if (location.pathname === "/") {
    return null
  }

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      "item": `${window.location.origin}${item.path}`
    }))
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <nav aria-label="Breadcrumb" className="bg-gray-50 py-4">
        <div className="container mx-auto px-6 lg:px-12">
          <ol className="flex items-center space-x-2 text-sm">
            {breadcrumbs.map((item, index) => (
              <li key={item.path} className="flex items-center">
                {index > 0 && (
                  <ChevronRight className="w-4 h-4 text-gray-400 mx-2" />
                )}
                {index === 0 ? (
                  <Link
                    to={item.path}
                    className="flex items-center text-gray-600 hover:text-[#13a0d3] transition-colors"
                  >
                    <Home className="w-4 h-4 mr-1" />
                    {item.label}
                  </Link>
                ) : index === breadcrumbs.length - 1 ? (
                  <span className="text-gray-900 font-medium" aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    to={item.path}
                    className="text-gray-600 hover:text-[#13a0d3] transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  )
}
