import React from 'react';

const projects = [
  { src: '/images/palena-krytina.jpg', label: 'Pálená krytina' },
  { src: '/images/betonova-krytina.jpg', label: 'Betonová krytina' },
  { src: '/images/asfaltove-pasy.jpg', label: 'Asfaltové pásy' },
  { src: '/images/pvc-pasy.jpg', label: 'PVC pásy' },
  { src: '/images/vapnocement.jpg', label: 'Vápnocement' },
  { src: '/images/kostel.jpg', label: 'Rekonstrukce kostela' },
];

export const Gallery = () => {
  return (
    <section id="reference" className="py-24 bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center">
          <h2 className="text-sm font-bold tracking-widest text-brand-red uppercase mb-3">Reference</h2>
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Ukázky naší práce
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Prohlédněte si výběr z našich nedávných realizací šikmých, plochých střech a tesařských prací. 
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {projects.map((project, idx) => (
            <div key={idx} className="group relative overflow-hidden aspect-[4/3] bg-gray-800">
              <img 
                src={project.src} 
                alt={project.label} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <span className="text-white font-medium text-lg">{project.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
