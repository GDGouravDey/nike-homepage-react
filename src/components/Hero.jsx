const HeroSection = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.
          YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.
        </p>

        <div className="hero-btn">
          <button>Shop now</button>
          <button className="secondary-btn">Category</button>
        </div>

        <div className="shopping">
          <p>Available On</p>
          <div className="brand-icons">
            <img src="/images/amazon.png" alt="Amazon Logo" />
            <img src="/images/flipkart.png" alt="Flipkart Logo" />
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src="/images/hero-image.png" alt="Shoe Image" />
      </div>
    </main>
  );
};

export default HeroSection;
