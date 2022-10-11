import { ActiveLink } from "./ActiveLink";
import styles from "./Navbar.module.css";

const menuItems = [
  {
      text: 'Home',
      href: '/'
  },
  {
      text: 'About',
      href: '/about'
  },
  {
      text: 'Contact',
      href: '/contact'
  },
  {
      text: 'Pricing',
      href: '/pricing'
  },
];

export const Navbar = () => {
  return (
    <nav className={styles["menu-container"]}>
      {/* Nueva Forma */}
      {
        // Recorremos el arrelgo menuItems con el metodo map, desectructuramos los elementos dentro y por cada iteracion renderizamos el component ActiveLink
        // y como parametros enviamos los elementos desestructurados.
        // Importante agregar key cuando usamos un map de esta forma react sabe cual elemento esta iterando
        menuItems.map( ({text, href}) => (
          <ActiveLink key={href} text={text} href={href} />
        ))
      }

      {/* Primera Forma */}
      {/* <ActiveLink text='Home' href="/" />
      <ActiveLink text='About' href="/about" />
      <ActiveLink text='Contact' href="/contact" />
      <ActiveLink text='Pricing' href="/pricing" /> */}
    </nav>
  );
};
