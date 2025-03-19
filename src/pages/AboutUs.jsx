import React from 'react';

function AboutUs() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-6">About Us</h1>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
        <p>
          Go Superfoods was founded to make superfoods more accessible and affordable for everyone.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Mission & Vision</h2>
        <h3 className="text-xl font-semibold mb-2">Mission</h3>
        <p>
          To positively impact global health by providing nutritious superfoods for everyone, every day.
        </p>
        <h3 className="text-xl font-semibold mt-4 mb-2">Vision</h3>
        <p>
          Empowering a healthier world, one superfood at a time.
        </p>
      </section>
    </div>
  );
}

export default AboutUs;
