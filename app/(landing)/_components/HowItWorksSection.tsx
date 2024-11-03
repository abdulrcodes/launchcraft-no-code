import React from "react";

const HowItWorksSection = () => (
  <section id="how-it-works" className="py-12 bg-white text-gray-700">
    <h2 className="text-2xl md:text-4xl font-bold text-center mb-8">
      How It Works
    </h2>
    <div className="grid gap-8 md:grid-cols-3 px-4 md:px-16">
      <div className="p-4 text-center">
        <div className="bg-blue-100 p-4 rounded-full mb-4 mx-auto w-16 h-16 flex items-center justify-center">
          <span className="text-blue-500 font-semibold text-2xl">1</span>
        </div>
        <h3 className="text-lg font-semibold">Choose a Template</h3>
        <p className="mt-2">Select from a variety of professional templates.</p>
      </div>
      <div className="p-4 text-center">
        <div className="bg-blue-100 p-4 rounded-full mb-4 mx-auto w-16 h-16 flex items-center justify-center">
          <span className="text-blue-500 font-semibold text-2xl">2</span>
        </div>
        <h3 className="text-lg font-semibold">Customize Your Page</h3>
        <p className="mt-2">Use the drag-and-drop editor to make it yours.</p>
      </div>
      <div className="p-4 text-center">
        <div className="bg-blue-100 p-4 rounded-full mb-4 mx-auto w-16 h-16 flex items-center justify-center">
          <span className="text-blue-500 font-semibold text-2xl">3</span>
        </div>
        <h3 className="text-lg font-semibold">Launch with Ease</h3>
        <p className="mt-2">Publish and share your page with just one click.</p>
      </div>
    </div>
  </section>
);

export default HowItWorksSection;