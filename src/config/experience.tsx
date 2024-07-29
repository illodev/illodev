import { CodeIcon, ComputerIcon, ShieldIcon } from "lucide-react";

export const experience = [
    {
        title: "Full Stack Developer",
        icon: CodeIcon,
        company: "NIMIO CREACIÓN DIGITAL",
        location: "Málaga, Andalucía, España",
        from: "2021-04-26",
        to: "now",
        description: "Web development, design and sys admin.",
        responsibilities: [
            "Development of web applications.",
            "Design and implementation of APIs.",
            "UI/UX design.",
            "Development of serverless functions.",
            "Devops.",
            "Server administration."
        ]
    },
    {
        title: "Cybersecurity specialty",
        icon: ShieldIcon,
        company: "IES Campanillas",
        location: "Málaga, Andalucía, España",
        from: "2020-09-01",
        to: "2021-04-26",
        description:
            "Studies in cybersecurity. Ethical hacking, forensic analysis and secure software development",
        responsibilities: [
            "Ethical hacking.",
            "Forensic analysis.",
            "Secure software development."
        ]
    },
    {
        title: "System Administration",
        icon: ComputerIcon,
        company: "IES Miguel Romero Esteo",
        location: "Málaga, Andalucía, España",
        from: "2018-09-01",
        to: "2020-06-26",
        description: "Studies in system administration.",
        responsibilities: [
            "System administration.",
            "Network administration.",
            "Server administration.",
            "Virtualization.",
            "Dockers and containers."
        ]
    }
] as const;
