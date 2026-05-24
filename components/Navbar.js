import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/sobre", label: "Sobre" },
  { href: "/experiencia-academica", label: "Acadêmica" },
  { href: "/experiencia-profissional", label: "Profissional" },
  { href: "/projetos", label: "Projetos" },
];

export default function Navbar() {
  return (
    <header className="navbar">
      <Link className="brand" href="/">
        Currículo Marconi Andrade
      </Link>

      <nav>
        {links.map((link) => (
          <Link href={link.href} key={link.href}>
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
