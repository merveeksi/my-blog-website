import Image from 'next/image'
import Link from 'next/link'
import profileImg from '@/public/images/logo.png'

const Logo = () => {
  return (
    <Link href="/">
    <div className="flex items-center gap-2 border-2 border-yellow-500 rounded-full p-1"
         style={{
           boxShadow: "0 0 20px rgba(234, 179, 8, 0.5), 0 0 40px rgba(234, 179, 8, 0.3)"
         }}>
        <Image src={profileImg} alt="logo" width={100} height={100} priority={true} className="w-30 h-30 mt-24 rounded-full" />
    </div>
</Link>
  );
}

export default Logo;