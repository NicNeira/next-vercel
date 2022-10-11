import { CSSProperties, PropsWithChildren } from "react";

import { useRouter } from "next/router"

import Link from "next/link"

// Definimos el typo del objeto style, el cual sera CSSProperties esto nos indicara y restringira solo a las propiedades que puede tener css
const style: CSSProperties = {
    color: '#0070f3',
    textDecoration: 'underline',
}

// interface para definir los types de los props text, href
interface Props {
  text: string;
  href: string;
}

// Agregamos el codigo React.FC<PropsWithChildren<Props>> para no tener ningun error con ts
export const ActiveLink: React.FC<PropsWithChildren<Props>> = ({text, href}) => {

const {asPath} = useRouter();

  return (
    <Link href={href}>
      {/* Modificamos el codigo para que nos reconozca undefined en vez de null */}
        <a style={asPath === href ? style : undefined}>{text}</a>
    </Link>
  )
}
