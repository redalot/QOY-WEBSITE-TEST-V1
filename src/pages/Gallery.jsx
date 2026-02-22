import { motion } from 'framer-motion';

const Gallery = () => {
  const images = [
    { src: 'gallery-1.jpg', title: 'Operation Alpha' },
    { src: 'gallery-2.jpg', title: 'Recon Patrol' },
    { src: 'gallery-3.jpg', title: 'Urban Combat' },
    { src: 'gallery-4.jpg', title: 'Night Ops' },
    { src: 'gallery-5.jpg', title: 'Tactical Insertion' },
    { src: 'gallery-6.jpg', title: 'Front Line Duties' },
    { src: 'gallery-7.png', title: 'Medal TV Capture' },
  ];

  return (
    <div className="bg-slate-900 text-white min-h-screen pb-20">
      <div className="bg-blue-900 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4">Unit Gallery</h1>
        <p className="text-xl text-blue-100 max-w-2xl mx-auto px-4">
          A visual record of our operations and training exercises.
        </p>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((img, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-xl shadow-2xl border-2 border-slate-800 hover:border-yellow-500 transition-all"
            >
              <img 
                src={img.src} 
                alt={img.title} 
                className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <h3 className="text-xl font-bold text-yellow-400">{img.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;