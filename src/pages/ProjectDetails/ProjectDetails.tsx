import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, CheckCircle, Download } from 'lucide-react';

// Use your clean alias (Assuming constants is in your src/components folder):
import { projects } from '@/src/constants';
import SEO from '@/src/components/SEO';

export const ProjectDetails = () => {
  const { id } = useParams();

  // Search the FULL `projects` array. 
  const project = projects.find((p) => String(p.id) === String(id));

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 text-center">
        <SEO title="Project Not Found" description="The project you are looking for does not exist." />
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Project Not Found</h2>
        <p className="text-gray-500 mb-8 max-w-md">
          The project with ID "{id}" does not exist, or the URL might be incorrect.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 hover:bg-opacity-90 transition-all duration-300 text-sm font-bold uppercase tracking-widest shadow-lg"
        >
          <ArrowLeft className="w-4 h-4" /> Return to Home
        </Link>
      </div>
    );
  }

  const hasFeatures = !!project.features?.length;
  const listItems = (hasFeatures ? project.features : project.services) ?? [];
  const listTitle = hasFeatures ? 'Features' : 'Scope of Services';

  return (
    <section className="min-h-screen bg-white py-24 px-6 lg:px-10">
      <SEO title={project.title} description={project.description || `${project.title} detailed information.`} image={project.image} />
      <div className="max-w-7xl mx-auto">

        <Link
          to="/projects"
          className="inline-flex items-center gap-2 mb-10 text-gray-500 hover:text-primary transition-colors font-semibold uppercase tracking-widest text-sm group"
        >
          <ArrowLeft className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </Link>

        {/* --- 1. Main Project Info Section --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-24">
          <div className="space-y-6">
            <div className="w-full h-[400px] md:h-[500px] lg:h-[700px] rounded-lg overflow-hidden shadow-2xl relative group">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>

          <div className="space-y-8 lg:sticky lg:top-24">
            <div>
              <div className="flex items-center gap-2 text-sm font-bold tracking-widest text-primary uppercase mb-4 opacity-80">
                <MapPin className="w-4 h-4" />
                {project.location}
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight mb-6">
                {project.title}
              </h1>
              <div className="w-20 h-1.5 bg-primary"></div>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed whitespace-pre-line">
              {project.description}
            </p>

            <div className="grid grid-cols-2 gap-x-6 gap-y-8 pt-10 border-t border-gray-100 mt-8">
              {project.status && (
                <div>
                  <span className="flex items-center gap-2 text-xs text-gray-400 uppercase tracking-widest mb-2 font-semibold">
                    <CheckCircle className="w-4 h-4" /> Status
                  </span>
                  <span className="font-bold text-lg text-primary capitalize">{project.status}</span>
                </div>
              )}

              {project.type && (
                <div>
                  <span className="flex items-center gap-2 text-xs text-gray-400 uppercase tracking-widest mb-2 font-semibold">
                    <MapPin className="w-4 h-4" /> Project Type
                  </span>
                  <span className="font-bold text-lg text-primary capitalize">{project.type}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* --- 2. Project at a Glance & Features --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-24">
          {/* LEFT COLUMN: PROJECT AT A GLANCE */}
          <div>
            <h2 className="bg-primary text-white text-xl md:text-2xl font-bold uppercase tracking-widest py-4 px-6 mb-8">
              Project at a Glance
            </h2>
            <div className="space-y-4 text-gray-700">
              {project.title && (
                <div className="grid grid-cols-[140px_auto] md:grid-cols-[180px_auto] gap-4">
                  <span className="font-semibold text-primary">Project Name :</span>
                  <span>{project.title}</span>
                </div>
              )}
              {project.client && (
                <div className="grid grid-cols-[140px_auto] md:grid-cols-[180px_auto] gap-4">
                  <span className="font-semibold text-primary">Client :</span>
                  <span>{project.client}</span>
                </div>
              )}
              {project.location && (
                <div className="grid grid-cols-[140px_auto] md:grid-cols-[180px_auto] gap-4">
                  <span className="font-semibold text-primary">Address :</span>
                  <span>{project.location}</span>
                </div>
              )}
              {project.landArea && (
                <div className="grid grid-cols-[140px_auto] md:grid-cols-[180px_auto] gap-4">
                  <span className="font-semibold text-primary">Land Area :</span>
                  <span>{project.landArea}</span>
                </div>
              )}
              {project.type && (
                <div className="grid grid-cols-[140px_auto] md:grid-cols-[180px_auto] gap-4">
                  <span className="font-semibold text-primary">Building Type :</span>
                  <span className="capitalize">{project.type}</span>
                </div>
              )}
              {project.facing && (
                <div className="grid grid-cols-[140px_auto] md:grid-cols-[180px_auto] gap-4">
                  <span className="font-semibold text-primary">Facing :</span>
                  <span>{project.facing}</span>
                </div>
              )}
              {project.buildingHeight && (
                <div className="grid grid-cols-[140px_auto] md:grid-cols-[180px_auto] gap-4">
                  <span className="font-semibold text-primary">Building Height :</span>
                  <span>{project.buildingHeight}</span>
                </div>
              )}
              {project.unitsPerFloor && (
                <div className="grid grid-cols-[140px_auto] md:grid-cols-[180px_auto] gap-4">
                  <span className="font-semibold text-primary">Units Per floor :</span>
                  <span>{project.unitsPerFloor}</span>
                </div>
              )}
              {project.totalUnits && (
                <div className="grid grid-cols-[140px_auto] md:grid-cols-[180px_auto] gap-4">
                  <span className="font-semibold text-primary">Total Units :</span>
                  <span>{project.totalUnits}</span>
                </div>
              )}
              {project.apartmentSizes && (
                <div className="grid grid-cols-[140px_auto] md:grid-cols-[180px_auto] gap-4 items-start">
                  <span className="font-semibold text-primary">Apartment Sizes :</span>
                  <span className="whitespace-pre-line">{project.apartmentSizes.replace(/\\n/g, '\n')}</span>
                </div>
              )}
              {project.parkings && (
                <div className="grid grid-cols-[140px_auto] md:grid-cols-[180px_auto] gap-4">
                  <span className="font-semibold text-primary">Parkings :</span>
                  <span>{project.parkings}</span>
                </div>
              )}
              {project.consultant && (
                <div className="grid grid-cols-[140px_auto] md:grid-cols-[180px_auto] gap-4">
                  <span className="font-semibold text-primary">Consultant :</span>
                  <span>{project.consultant}</span>
                </div>
              )}
            </div>
          </div>

          {/* RIGHT COLUMN: FEATURES (or scope of services for consultancy projects) */}
          {listItems.length > 0 && (
            <div>
              <h2 className="bg-primary text-white text-xl md:text-2xl font-bold uppercase tracking-widest py-4 px-6 mb-8">
                {listTitle}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 text-gray-700 font-semibold">
                <ul className="space-y-3">
                  {listItems.slice(0, Math.ceil(listItems.length / 2)).map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <ul className="space-y-3 md:mt-0 mt-3">
                  {listItems.slice(Math.ceil(listItems.length / 2)).map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* --- 3. NEW ADDITIONAL IMAGES (GALLERY) SECTION --- */}
        {project.additionalImages && project.additionalImages.length > 0 && (
          <div className="mb-24">
            <h2 className="bg-primary text-white text-xl md:text-2xl font-bold uppercase tracking-widest py-4 px-6 mb-8">
              Project Gallery
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {project.additionalImages.map((imgUrl, index) => (
                <div
                  key={index}
                  className="w-full h-[250px] md:h-[300px] rounded-lg overflow-hidden shadow-lg group relative"
                >
                  <img
                    src={imgUrl}
                    alt={`${project.title} - View ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* --- 4. PDF VIEWER SECTION --- */}
        {project.pdfUrl && (
          <div>
            {/* Green Download Button */}
            <div className="flex justify-start mb-4">
              <a
                href={project.pdfUrl}
                download={`${project.title}_Brochure.pdf`} // Suggests a filename when downloading
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#00a651] hover:bg-[#008f45] transition-colors text-white px-6 py-2.5 rounded-md flex items-center gap-2 font-bold shadow-md"
              >
                Download PDF <Download className="w-5 h-5" />
              </a>
            </div>

            {/* PDF Iframe Viewer */}
            <div className="w-full h-[600px] md:h-[800px] border-2 border-primary/20 rounded-md overflow-hidden shadow-lg bg-gray-100 flex items-center justify-center">
              <iframe
                src={`${project.pdfUrl}#view=FitH`} // FitH makes it zoom to fit width automatically
                className="w-full h-full"
                title={`${project.title} PDF Document`}
              />
            </div>
          </div>
        )}

      </div>
    </section>
  );
};