import Link from "next/link"

const links = [
    {
        path: '/',
        pathname: 'Home'
    },
    {
        path: '/',
        pathname: 'Encontrar Hotel'
    },
    {
        path: '/',
        pathname: 'Sobre nós'
    },
    {
        path: '/',
        pathname: 'Contate-nos'
    },
]

const Nav = ({containerStyles, listStyles}) => {
  return (
    <nav className={`${containerStyles}`}>
      <ul className={`${listStyles}`}>
        {links.map((link, index) => {
          return (
            <li key={index}>
              <Link href={link.path}>{link.pathname}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Nav