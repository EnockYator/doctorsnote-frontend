import FadeInSection from "./FadeInSection";
import Accordion from "./Accordion";

export default function Honors() {
    return (
        <FadeInSection>
            <section className="p-6">
                <h2 className="text-gray-50 dark:text-gray-300 text-lg font-bold mb-5 text-center">Honors & Awards</h2>
                <div className="bg-gray-50 rounded-lg shadow p-4">
                    <Accordion title="Best Actor Award" content="Received at the National Film Festival." />
                    <Accordion title="Outstanding Performance" content="Recognized for a standout theatre role." />
                    <Accordion title="Critics' Choice" content="Praised for a dramatic role showcasing depth." />
                    <Accordion title="Audience Favorite" content="Voted by fans as a memorable comedic role." />
                </div>
            </section>
        </FadeInSection>
    );
}
