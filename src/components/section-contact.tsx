"use client";

import { ContactCard } from "@/components/contact-card";
import { AbstractArt } from "@/components/layout/abstract-art";
import { Section } from "@/components/layout/section";
import { contacts } from "@/config/site";

export function SectionContact() {
    return (
        <Section id="contact" variant="gradient">
            <div className="container">
                <div className="flex flex-col md:items-center">
                    <span className="text-base tracking-tight text-current-600">
                        Contact
                    </span>
                    <h2 className="font-display mt-4 text-left text-2xl font-light leading-[1.125] md:text-center md:text-4xl lg:text-5xl">
                        Get in touch
                    </h2>
                    <p className="mx-auto mt-4 text-left leading-relaxed text-muted-foreground md:max-w-2xl md:text-center lg:mt-8">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Placeat iure ut, dignissimos, eos quasi provident
                        ea dolorum maiores quibusdam autem aspernatur officiis.
                    </p>
                </div>
                <div className="mt-8 grid items-center gap-6 lg:mt-16 lg:grid-cols-2">
                    <div className="grid gap-6">
                        {contacts.map((contact) => (
                            <ContactCard
                                key={contact.title}
                                contact={contact}
                            />
                        ))}
                    </div>
                    <div className="hidden items-center lg:flex">
                        <AbstractArt className="h-full w-full object-cover" />
                    </div>
                </div>
            </div>
        </Section>
    );
}
