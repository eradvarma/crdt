import React from 'react';

const SliderCard = ({ professor }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mx-2 my-4">
            <div className="h-64 overflow-hidden">
                {/* <img
                    src={professor.image}
                    alt={professor.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                /> */}
            </div>
            <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800">{professor.name}</h3>
                <p className="text-sm text-gray-600">{professor.designation}</p>
                <p className="text-xs text-gray-500 mt-2">{professor.department}</p>
            </div>
        </div>
    );
};

export default SliderCard;