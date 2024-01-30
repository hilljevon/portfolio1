import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description:
    "I'm Jevon Hill. Passionate Web Developer.",
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={'/public/Profilemage1.jpeg'}
              alt=""
              width={200}
              height={200}
              // sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I'm Jevon Hill. Passionate Web Developer
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              Welcome to my professional portfolio. I am Jevon Hill, a dedicated and passionate web developer. My academic journey began with a Bachelor's degree in Biology from the University of California, Irvine, which I completed in 2022.
              It was during my post-graduate phase that I discovered a fervent interest in programming – a field that I now consider my calling.
            </p>
            <p>
              Despite my non-traditional entry into the world of computer science, I am profoundly appreciative of the opportunity to engage in this dynamic and ever-evolving field. My enthusiasm for web development particularly intensified after encountering React.
              Initially, mastering React presented a significant challenge; however, its unique workflow and approach to web development solutions deeply resonated with me,
              enhancing my enjoyment and dedication to development.
            </p>
            <p>
              Looking ahead, my aspiration is to create innovative and impactful digital solutions that not only contribute positively to the world but also inspire fellow developers to view coding through a novel lens. The aspect of web development that excites me the most is the perpetual learning curve it offers.
              The necessity for continuous adaptation, self-reflection,
              and a blend of creativity with problem-solving makes this field particularly stimulating and rewarding.
            </p>
            <p>
              Beyond the realm of web development, I have a rich life filled with diverse interests. I am an avid weightlifter, an enthusiast for spending quality time with family and friends, a music creator, and a devoted reader.
              This blend of technical skill, continuous learning,
              and a balanced lifestyle shapes my approach as a web developer, driving me towards excellence in every project I undertake.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="#" icon={InstagramIcon} className="mt-4">
              Follow on Instagram
            </SocialLink>
            <SocialLink href="#" icon={GitHubIcon} className="mt-4">
              Follow on GitHub
            </SocialLink>
            <SocialLink href="#" icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:spencer@planetaria.tech"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              jevon623@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
