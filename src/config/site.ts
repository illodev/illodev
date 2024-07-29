import { WhatsappIcon } from "@/components/icons/whatsapp-icon";
import { AtSignIcon, LinkedinIcon, LucideIcon } from "lucide-react";

export const site = {
    title: "Illodev - Developer, Designer & Sys Admin",
    description:
        "I'm a developer, designer and sys admin with over 3 years of experience. I can help you with your next project.",
    keywords: [
        "developer",
        "designer",
        "sys admin",
        "web development",
        "mobile development",
        "desktop development",
        "design",
        "ui/ux",
        "sys admin",
        "linux",
        "windows",
        "macos",
        "networking",
        "servers",
        "cloud",
        "aws"
    ]
};

type Contact = {
    href: string;
    value: string;
    title: string;
    description: string;
    icon: ((props: React.SVGProps<SVGSVGElement>) => JSX.Element) | LucideIcon;
};

export const contacts: Contact[] = [
    {
        href: "https://wa.me/+34698663608",
        value: "+34 698 663 608",
        title: "WhatsApp",
        description: "Contact me on WhatsApp, I'm available",
        icon: WhatsappIcon
    },
    {
        href: "https://www.linkedin.com/in/%C3%A1lvaro-j%C3%A1uregui-pinto-38b634160",
        value: "https://www.linkedin.com/in/%C3%A1lvaro-j%C3%A1uregui-pinto-38b634160",
        title: "LinkedIn",
        description: "Connect with me on LinkedIn, let's network",
        icon: LinkedinIcon
    },
    {
        href: "mailto:illodev@gmail.com",
        value: "illodev@gmail.com",
        title: "Email",
        description: "Send me an email, I'll respond as soon as possible",
        icon: AtSignIcon
    }
];

type FooterLink = {
    href: string;
    title: string;
    target?: "_blank";
};

export const footerLinks: {
    title: string;
    links: FooterLink[];
}[] = [
    {
        title: "Page",
        links: [
            { href: "#home", title: "Home" },
            { href: "#about", title: "About" },
            { href: "#languages", title: "Languages" },
            { href: "#experience", title: "Experience" },
            { href: "#work", title: "Work" }
        ]
    },
    {
        title: "Contact",
        links: contacts.map(({ href, title }) => ({
            href,
            title,
            target: "_blank"
        }))
    }
];
