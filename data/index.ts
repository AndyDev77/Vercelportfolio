export const navItems = [
  { name: "Propos", link: "#about" },
  { name: "Projets", link: "#projects" },
  { name: "Témoignages", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title:
      "Je donne la priorité à la collaboration avec les clients, en favorisant une communication ouverte. ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Je suis flexible sur les fuseaux horaires",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Technologies",
    description: "J'essaie constamment de m'améliorer",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Passionné de technologie et de développement.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Actuellement en train de construire une bibliothèque d'animation JS",
    description: "Information",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Vous souhaitez lancer un projet ensemble ?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Yoom - Application de vidéoconférence",
    des: "Simplifiez votre expérience de la vidéoconférence avec Yoom. Connectez-vous en toute transparence avec vos collègues et vos amis.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://github.com/adrianhajdin/zoom-clone",
  },
  {
    id: 2,
    title: "AI Image SaaS - Application Canva",
    des: "Un vrai logiciel en tant que service avec des fonctions d'intelligence artificielle et un système de paiement et de crédit utilisant les dernières technologies.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://github.com/adrianhajdin/ai_saas_app",
  },
  {
    id: 3,
    title: "Site web 3D animé Apple Iphone",
    des: "Recréation du site web de l'Apple iPhone 15 Pro, en combinant des animations GSAP et des effets 3D Three.js.",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://github.com/adrianhajdin/iphone",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborer avec Andy a été un véritable plaisir. Son professionnalisme, sa rapidité et sa volonté de fournir des résultats exceptionnels ont été évidents tout au long de notre projet. L'enthousiasme d'Adrian pour toutes les facettes du développement est vraiment remarquable. Si vous souhaitez améliorer votre site web et votre marque, Andy est le partenaire idéal.",
    name: "Michel Clarion",
    title: "Rucher des Hauldres",
  },
  {
    quote:
      "Collaborer avec Andy a été un véritable plaisir. Son professionnalisme, sa rapidité et sa volonté de fournir des résultats exceptionnels ont été évidents tout au long de notre projet.",
    name: "Thomas Delangle",
    title: "Monteur vidéo",
  },
  {
    quote:
      "Collaborer avec Andy a été un véritable plaisir. Son professionnalisme, sa rapidité et sa volonté de fournir des résultats exceptionnels ont été évidents tout au long de notre projet.",
    name: "Fatima Jaiel",
    title: "Usine-Ecole 4.0",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Ingénieur Frontend stagiaire",
    desc: "Aide au développement d'une plateforme web utilisant React.js, améliorant l'interactivité.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Développement d'applications mobiles - JSM Tech",
    desc: "Conception et développement d'une application mobile pour les plateformes iOS et Android à l'aide de React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Projet de développement d'applications en freelance",
    desc: "A dirigé le développement d'une application mobile pour un client, du concept initial au déploiement sur les magasins d'applications.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Développeur Frontend",
    desc: "Développement et maintenance de fonctionnalités orientées vers l'utilisateur à l'aide de technologies frontales modernes.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
