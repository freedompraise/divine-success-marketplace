const Hero = () => {
  return (
    <div className="relative bg-ds-background min-h-[80vh] flex items-center">
      <div className="absolute inset-0 bg-gradient-to-r from-ds-primary/20 to-transparent" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold text-ds-primary mb-6">
            Divine Success Agro Veterinary
          </h1>
          <p className="text-xl md:text-2xl text-ds-secondary mb-8">
            Your trusted partner in comprehensive animal healthcare and agricultural solutions
          </p>
          <a
            href="#contact"
            className="bg-ds-accent text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-ds-primary transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;