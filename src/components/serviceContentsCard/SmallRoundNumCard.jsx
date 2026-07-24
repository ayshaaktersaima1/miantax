import React from 'react';

const SmallRoundNumCard = ({ items }) => {
    return (
        <div className="grid gap-4">
            {items.map((item, index) => (
                <div
                    key={item.title}
                    className="rounded-2xl border border-gray-200 bg-white p-5 transition duration-300 hover:border-[#D7A332] hover:shadow-md"
                >
                    <div className="flex items-center gap-3">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#061D3A] text-sm font-semibold text-[#D7A332]">
                            {index + 1}
                        </span>

                        <h3 className="text-lg font-semibold text-[#061D3A]">
                            {item.title}
                        </h3>
                    </div>

                    <p className="mt-4 text-base leading-7 text-[#243044]">
                        {item.description}
                    </p>
                </div>
            ))}
        </div>
    );
};

export default SmallRoundNumCard;

