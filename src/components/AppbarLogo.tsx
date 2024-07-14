import Link from "next/link";
import Image from "next/image";

const AppbarLogo = () => {
  return (
    <Link href="/">
      <Image
        src={"/finifi-logo.png"}
        alt="zodiac-logo"
        height={70}
        width={90}
        className="cursor-pointer"
      />
    </Link>
  );
};

export default AppbarLogo;
