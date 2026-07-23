import Image from "next/image";

const testimonials = [
    {
        id: 1,
        name: "Muhammad Abdullah",
        role: "Businessman",
        image: "/images/c1.webp",
        review:
            "The team provided exceptional tax consulting services. Their expertise made my business registration with SECP hassle-free. Highly recommend them for reliable and efficient support in Pakistan!",
    },
    {
        id: 2,
        name: "Arshad Ali",
        role: "Air Hostess",
        image: "/images/c2.webp",
        review:
            "I am extremely satisfied with the tax solutions provided. They guided me through the entire process, ensuring compliance and maximizing my savings. Truly professional service!",
    },
    {
        id: 3,
        name: "Shehzad Raza",
        role: "Company CEO",
        image: "/images/c3.webp",
        review:
            "Outstanding service and support during my company registration! The consultants were knowledgeable and responsive, making the entire process smooth and stress-free. Highly recommend their services!",
    },
];

const TestimonialCard = ({ testimonial }) => {
    return (
        <article className="relative rounded-2xl bg-white px-6 pb-6 pt-14 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-lg">
            {/* Client image */}
            <div className="absolute -top-9 left-1/2 -translate-x-1/2">
                <div className="relative h-16 w-16 overflow-hidden rounded-full border-4 border-[#F8F7F4] bg-white shadow-sm">
                    <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        sizes="64px"
                        className="object-cover"
                    />
                </div>
            </div>

            <div className="text-center">
                {/* Quote icon */}
                <span className="block text-4xl font-semibold leading-none text-[#D7A332]/35">
                    “
                </span>

                {/* Review */}
                <p className="mt-2 text-sm italic leading-6 text-gray-600">
                    {testimonial.review}
                </p>

                {/* Divider */}
                <div className="mx-auto mt-5 h-px w-10 bg-[#D7A332]" />

                {/* Client info */}
                <h3 className="mt-4 text-lg font-semibold text-[#061D3A]">
                    {testimonial.name}
                </h3>

                <p className="mt-1 text-sm font-medium text-[#D7A332]">
                    {testimonial.role}
                </p>
            </div>
        </article>
    );
};

const ReviewSection = () => {
    return (
        <section className="bg-[#F8F7F4] py-20">
            <div className="mx-auto w-11/12">
                {/* Section heading */}
                <div className="mx-auto max-w-3xl text-center">
                    <p className="text-sm font-semibold uppercase tracking-widest text-[#D7A332]">
                        Client Testimonials
                    </p>

                    <h2 className="mt-3 text-3xl font-semibold text-[#061D3A] md:text-4xl">
                        What Our Clients Say About Us
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-gray-600 md:text-base">
                        Real experiences from clients who trusted us with their tax and
                        business registration needs.
                    </p>
                </div>

                {/* Testimonial cards */}
                <div className="mt-16 grid gap-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-7">
                    {testimonials.map((testimonial) => (
                        <TestimonialCard
                            key={testimonial.id}
                            testimonial={testimonial}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ReviewSection;