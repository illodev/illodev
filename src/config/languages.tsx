import { AwsIcon } from "@/components/icons/aws-icon";
import { DockerIcon } from "@/components/icons/docker-icon";
import { FigmaIcon } from "@/components/icons/figma-icon";
import { GitIcon } from "@/components/icons/git-icon";
import { GitlabIcon } from "@/components/icons/gitlab-icon";
import { LinuxIcon } from "@/components/icons/linux-icon";
import { MysqlIcon } from "@/components/icons/mysql-icon";
import { NextJsIcon } from "@/components/icons/nextjs-icon";
import { NginxIcon } from "@/components/icons/nginx-icon";
import { PostgresqlIcon } from "@/components/icons/postgresql-icon";
import { ReactIcon } from "@/components/icons/react-icon";
import { RedisIcon } from "@/components/icons/redis-icon";
import { S3Icon } from "@/components/icons/s3-icon";
import { SqsIcon } from "@/components/icons/sqs-icon";
import { SymfonyIcon } from "@/components/icons/symfony-icon";
import { TailwindCssIcon } from "@/components/icons/tailwindcss-icon";
import { TypescriptIcon } from "@/components/icons/typescript-icon";

type Language = {
    name: string;
    description: string;
    icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
    color: string;
};

export const languages: Record<string, Language> = {
    nextjs: {
        name: "Next.js",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        icon: NextJsIcon,
        color: "bg-gray-400/10 border-gray-500/20 text-gray-500"
    },
    react: {
        name: "React",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        icon: ReactIcon,
        color: "bg-cyan-400/10 border-cyan-500/20 text-cyan-500"
    },
    symfony: {
        name: "Symfony",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        icon: SymfonyIcon,
        color: "bg-pink-400/10 border-pink-500/20 text-pink-500"
    },
    tailwindcss: {
        name: "Tailwind CSS",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        icon: TailwindCssIcon,
        color: "bg-blue-400/10 border-blue-500/20 text-blue-500"
    },
    figma: {
        name: "Figma",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        icon: FigmaIcon,
        color: "bg-purple-400/10 border-purple-500/20 text-purple-500"
    },
    linux: {
        name: "Linux",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        icon: LinuxIcon,
        color: "bg-orange-400/10 border-orange-500/20 text-orange-500"
    },
    docker: {
        name: "Docker",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        icon: DockerIcon,
        color: "bg-blue-400/10 border-blue-500/20 text-blue-500"
    },
    git: {
        name: "Git",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        icon: GitIcon,
        color: "bg-red-400/10 border-red-500/20 text-red-500"
    },
    nginx: {
        name: "Nginx",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        icon: NginxIcon,
        color: "bg-green-400/10 border-green-500/20 text-green-500"
    },
    mysql: {
        name: "MySQL",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        icon: MysqlIcon,
        color: "bg-cyan-400/10 border-cyan-500/20 text-cyan-500"
    },
    postgresql: {
        name: "PostgreSQL",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        icon: PostgresqlIcon,
        color: "bg-blue-400/10 border-blue-500/20 text-blue-500"
    },
    redis: {
        name: "Redis",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        icon: RedisIcon,
        color: "bg-red-400/10 border-red-400/20 text-red-500"
    },
    typescript: {
        name: "TypeScript",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        icon: TypescriptIcon,
        color: "bg-blue-400/10 border-blue-500/20 text-blue-500"
    },
    gitlab: {
        name: "GitLab",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        icon: GitlabIcon,
        color: "bg-orange-400/10 border-orange-500/20 text-orange-500"
    },
    aws: {
        name: "AWS",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        icon: AwsIcon,
        color: "bg-green-400/10 border-green-500/20 text-green-500"
    },
    s3: {
        name: "AWS S3 / MinIO",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        icon: S3Icon,
        color: "bg-green-400/10 border-green-500/20 text-green-500"
    },
    sqs: {
        name: "SQS / RabbitMQ",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        icon: SqsIcon,
        color: "bg-orange-400/10 border-orange-500/20 text-orange-500"
    }
} as const;
