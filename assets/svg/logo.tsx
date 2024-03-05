import Link from "next/link";

const Logo = () => {
  return (

    <Link href={'/'}>
      <svg
        height={'40px'}
        width={'40px'}
      >

        <path d="M40 .062v13.366l-9.539 9.54v7.008L20.43 40V23.577L33.345 10.67V6.718h-3.952L16.478 19.626H.062L10.087 9.6h7.008l9.54-9.539H40zM8.388 25.22H6.51L.062 31.667h8.326V40l6.447-6.447v-8.326H8.388v-.007z" fill="#FFF" fill-rule="nonzero"></path>
      </svg>
    </Link>
  );
};


export default Logo;