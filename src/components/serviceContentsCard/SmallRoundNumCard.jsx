import React from 'react';

const SmallRoundNumCard = ({ items }) => {
    return (
        <div className="grid gap-4">
            {items.map((item, index) => (
                <div
                    key={item.title}
                    className="flex gap-4 rounded-2xl border border-gray-200 bg-white p-5 transition duration-300 hover:border-[#D7A332] hover:shadow-md"
                >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#061D3A] text-sm font-semibold text-[#D7A332]">
                        {index + 1}
                    </span>

                    <div>
                        <h3 className="text-lg font-semibold text-[#061D3A]">
                            {item.title}
                        </h3>

                        <p className="mt-2 text-sm leading-7 text-[#455468] md:text-base">
                            {item.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SmallRoundNumCard;