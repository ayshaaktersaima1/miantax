const MapSection = () => {
    return (
        <section className="w-full overflow-hidden pb-16 md:pb-20">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4042.96106824823!2d74.3178938860387!3d31.559532143491264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919055297d70fa3%3A0xd4be528e128fd257!2sMIAN%20TAX%20ASSOCIATES%20PVT.%20LTD!5e0!3m2!1sen!2sbd!4v1784450083856!5m2!1sen!2sbd"
                title="Mian Tax Associates location"
                loading="lazy"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
                className="h-96 w-full border-0"
            />
        </section>
    );
};

export default MapSection;