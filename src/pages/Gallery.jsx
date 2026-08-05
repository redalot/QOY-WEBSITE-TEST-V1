import { useState } from 'react';
import { motion } from 'framer-motion';
import { Maximize2 } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import Lightbox from '../components/Lightbox';
import { galleryImages as IMAGES } from '../data/media';

const Gallery = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="min-h-screen bg-tac-950 pb-24 text-white">
      <PageHeader
        eyebrow="Field Imagery"
        title="Unit Gallery"
        subtitle="A visual record of our operations and training exercises."
        meta={`${IMAGES.length} Records`}
      />

      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {IMAGES.map((img, index) => (
            <motion.div
              key={img.file}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: (index % 3) * 0.08 }}
              viewport={{ once: true }}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(index)}
                aria-label={`View ${img.title} full size`}
                className="tac-bracket group relative block w-full overflow-hidden border border-white/10 text-left transition-colors hover:border-qoy-yellow/50"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-tac-950/50 opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                  <Maximize2 className="text-qoy-yellow" size={28} />
                </span>
                <span className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 bg-gradient-to-t from-tac-950 via-tac-950/80 to-transparent px-5 pb-4 pt-12">
                  <span className="font-display text-lg uppercase tracking-wide text-white">
                    {img.title}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-qoy-yellow/70">
                    {String(index + 1).padStart(3, '0')}
                  </span>
                </span>
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {openIndex !== null && (
        <Lightbox
          images={IMAGES}
          index={openIndex}
          onClose={() => setOpenIndex(null)}
          onNavigate={setOpenIndex}
        />
      )}
    </div>
  );
};

export default Gallery;
