import FadeInSection from "./FadeInSection";

export default function ContactForm() {
    return (
        <FadeInSection>
            <section className="p-6" id="contact">
                <h2 className="text-gray-50 dark:text-gray-300 text-lg font-bold mb-5 text-center">Stay Connected</h2>
                <form className="flex flex-col gap-3">
                    <input
                        type="text"
                        placeholder="Name"
                        className="border rounded-md p-2 text-sm focus:ring focus:ring-red-400"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="border rounded-md p-2 text-sm focus:ring focus:ring-red-400"
                    />
                    <input
                        type="tel"
                        placeholder="Phone"
                        className="border rounded-md p-2 text-sm focus:ring focus:ring-red-400"
                    />
                    <button
                        type="submit"
                        className="bg-red-500 text-white py-2 rounded-md font-semibold hover:bg-red-600"
                    >
                        Submit
                    </button>
                </form>
            </section>
        </FadeInSection>
    );
}
