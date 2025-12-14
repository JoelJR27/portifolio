import { GithubIcon, Linkedin, Mail } from 'lucide-react';

export default function SocialLinks() {
  const liStyles = 'flex items-center justify-center';
  const linkStyles =
    'group flex items-center gap-4 p-2 text-xl text-gray/70 hover:underline dark:text-white/70';
  const iconStyles = 'group-hover:text-primary';
  return (
    <ul className="mt-13 mb-4 flex flex-col gap-4 px-2">
      <li className={liStyles}>
        <a
          href="https://github.com/JoelJR27"
          target="_blank"
          rel="noopener noreferrer"
          className={linkStyles}
        >
          <GithubIcon className={iconStyles} />
          GitHub
        </a>
      </li>
      <li className={liStyles}>
        <a
          href="https://www.linkedin.com/in/joeljunior27"
          target="_blank"
          rel="noopener noreferrer"
          className={linkStyles}
        >
          <Linkedin className={iconStyles} />
          Linkedin
        </a>
      </li>
      <li className={liStyles}>
        <a
          href="mailto:devjoeljunior@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className={linkStyles}
        >
          <Mail className={iconStyles} />
          Email
        </a>
      </li>
    </ul>
  );
}
