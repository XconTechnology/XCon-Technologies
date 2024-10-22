import Image from 'next/image';
import Link from 'next/link';
import logo from "../../public/assets/img_placeholder/Light Logo.png";

const LogoDark = () => {
  return (
    <Link href='/'>
      <Image src={logo} alt='AIMass' width='220' height='24' />
    </Link>
  );
};

export default LogoDark;
