const Hero = () => {
  return (
    <div className="relative bg-ds-background min-h-[80vh] flex items-center">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1472396961693-142e6e269027"
          alt="Veterinary Care"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ds-primary/90 to-transparent" />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Divine Success Agro Veterinary
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Your trusted partner in comprehensive animal healthcare and agricultural solutions. Professional care for all your pets and livestock needs.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a
              href="#contact"
              className="bg-ds-accent text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-ds-primary transition-colors"
            >
              Get in Touch
            </a>
            <a
              href="#services"
              className="bg-white text-ds-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-ds-accent hover:text-white transition-colors"
            >
              Our Services
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;