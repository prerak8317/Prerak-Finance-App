import React from "react";

function Content({ title, intro, sections }) {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
        {title}
      </h2>

      <p className="text-gray-700 mb-6">{intro}</p>

      {sections.map((section, index) => (
        <div key={index} className="mb-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            {section.heading}
          </h3>

          {section.points && (
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              {section.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          )}

          {section.text && <p className="text-gray-700 mt-2">{section.text}</p>}
        </div>
      ))}
    </div>
  );
}

export default Content;
