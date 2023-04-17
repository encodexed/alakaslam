import Image from "next/image";

export default function Icon(props) {
	return (
      <Image src={props.src} alt='An Icon' width={48} height={48} />
	);
}
