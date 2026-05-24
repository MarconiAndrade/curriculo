import { profile } from "@/lib/profile";

export default function Footer() {
  return (
    <footer className="footer">
      <p>Desenvolvido por {profile.name}.</p>
      <span>© {new Date().getFullYear()}</span>
    </footer>
  );
}
