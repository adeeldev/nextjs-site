'use client'
import { Link } from '@/src/navigation'
import { useTranslations } from 'next-intl'
import { FC } from 'react'
import LangSwitcher from './LangSwitcher'
import ThemeSwitch from './ThemeSwitch'
import Image from 'next/image' // Import the Next.js Image component
import icupidLogo from '../../icons/icupid-logo.png' // Import the PNG logo

interface Props {
  locale: string
}

export const Header: FC<Props> = ({ locale }) => {
  const t = useTranslations('')
  return (
    <div className='mx-auto flex max-w-screen-2xl flex-row items-center justify-between p-5'>
      <Link lang={locale} href='/'>
        <div className='flex flex-row items-center'>
          <div className='mb-2 h-14 w-14'>
            <Image src={icupidLogo} alt='iCupid Logo' layout="responsive" width={56} height={56} /> {/* Use Next.js Image component */}
          </div>
          <strong className='mx-2 select-none'>iCupid</strong>
        </div>
      </Link>
      <div className='flex flex-row items-center gap-3'>
        <LangSwitcher />
      </div>
    </div>
  )
}
