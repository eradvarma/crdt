import React from 'react';

const SliderCard = ({ professor }) => {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mx-2 my-4">
            <div className="h-64 overflow-hidden">
                <img
                    src={professor.image}
                    alt={professor.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                />
            </div>
            <div className="p-4 text-center">
                <p className="text-sm text-bold text-gray-800">{professor.name}</p>
                <p className="text-[12px] text-gray-600">{professor.designation}</p>
                {/* <p className="text-xs text-gray-500 mt-2">{professor.department}</p> */}
            </div>
        </div>
    );
};

export default SliderCard;