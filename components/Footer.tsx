import Link from "next/link";
import Image from "next/image";
import { FaInstagram, FaFacebook, FaLinkedin, FaYoutube, FaEnvelope } from 'react-icons/fa'

const columns = [
  {
    title: "Company",
    links: [
      { name: "About", path: "/about" },
      { name: "Blog", path: "/blog" },
      { name: "Contact", path: "/contact" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { name: "Business Intelligence", path: "/solutions/bi" },
      { name: "Automated Reporting", path: "/solutions/reporting" },
      { name: "Strategic Insights", path: "/solutions/insights" },
    ],
  },
  {
    title: "Industries",
    links: [
      { name: "Retail", path: "/industries/retail" },
      { name: "Logistics", path: "/industries/logistics" },
      { name: "Professional Services", path: "/industries/services" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Case Studies", path: "/resources/case-studies" },
      { name: "Guides", path: "/resources/guides" },
      { name: "FAQ", path: "/resources/faq" },
    ],
  },
  {
    title: "Contact",
    links: [
      { name: "Get in Touch", path: "/contact" },
      { name: "Support", path: "/support" },
    ],
  },
];

const socials = [
  { icon: FaInstagram, href: "#" },
  { icon: FaEnvelope, href: "#" },
  { icon: FaFacebook, href: "#" },
  { icon: FaYoutube, href: "#" },
  { icon: FaLinkedin, href: "#" },
];

const Footer = () => {
  return (
    <footer className="px-6 lg:px-8 max-w-7xl mx-auto py-12 border-t border-[#EDEDFC]">
      <div className="flex flex-col lg:flex-row lg:justify-between gap-10">
        <div>
          <Image src="/DsendaLogo.svg" alt="Dsenda Logo" width={80} height={80} />
          <div className="flex items-center gap-4 mt-6">
            {socials.map(({ icon: Icon, href }, i) => (
              <a
                key={i}
                href={href}
                className="w-6 h-10 grid place-items-center">
                <Icon className="w-6 h-6 text-black" />
              </a>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-9">
          {columns.map((column) => (
            <div key={column.title}>
              <p className="font-semibold text-sm">
                {column.title}
              </p>
              <ul className="mt-3 space-y-2">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.path}
                      className="text-sm transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;