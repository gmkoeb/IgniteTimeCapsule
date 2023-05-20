import { getUser } from '@/lib/auth'
import Image from 'next/image'
export function Profile() {
  const { name, avatarUrl } = getUser()
  return (
    <div className="flex items-center gap-3 text-left">
      <Image
        src={avatarUrl}
        width={40}
        height={40}
        alt="user avatar"
        className="h-10 w-10 rounded-full"
      />
      <p className="text-small max-w-[140px] leading-snug">
        {name}{' '}
        <a href="" className="block text-red-400 hover:text-red-300">
          Quero sair
        </a>
      </p>
    </div>
  )
}
