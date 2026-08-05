import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';

const IMAGES = [
  { file: 'gallery-1.jpg', title: 'Operation Alpha', alt: 'Section advancing during a live operation' },
  { file: 'gallery-2.jpg', title: 'Recon Patrol', alt: 'Reconnaissance patrol observing a treeline' },
  { file: 'gallery-3.jpg', title: 'Urban Combat', alt: 'Urban clearance during FIBUA training' },
  { file: 'gallery-4.jpg', title: 'Night Ops', alt: 'Night insertion under NVGs' },
  { file: 'gallery-5.jpg', title: 'Tactical Insertion', alt: 'Helicopter insertion onto an objective' },
  { file: 'gallery-6.jpg', title: 'Front Line Duties', alt: 'Troopers holding a defensive position' },
  { file: 'gallery-7.png', title: 'Medal TV Capture', alt: 'Clip captured during a live operation' },
];

const Gallery = () => (
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
          <motion.figure
            key={img.file}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: (index % 3) * 0.08 }}
            viewport={{ once: true }}
            className="tac-bracket group relative overflow-hidden border border-white/10 transition-colors hover:border-qoy-yellow/50"
          >
            <img
              src={`${import.meta.env.BASE_URL}${img.file}`}
              alt={img.alt}
              loading="lazy"
              className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 bg-gradient-to-t from-tac-950 via-tac-950/80 to-transparent px-5 pb-4 pt-12">
              <span className="font-display text-lg uppercase tracking-wide text-white">
                {img.title}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-qoy-yellow/70">
                {String(index + 1).padStart(3, '0')}
              </span>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </div>
  </div>
);

export default Gallery;
