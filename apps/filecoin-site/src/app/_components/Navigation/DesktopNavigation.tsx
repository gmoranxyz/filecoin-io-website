'use client'

import { useTranslations } from 'next-intl'

import { getHeaderNavigationItems } from './constants/navigation'
import { NavigationLanguageToggle } from './NavigationLanguageToggle'
import { NavigationMenu } from './NavigationMenu'

export function DesktopNavigation() {
  const t = useTranslations('navigation')
  const tHome = useTranslations('/')

  return (
    <div className="flex w-full items-center justify-between gap-4">
      <ul aria-label="Main navigation menu" className="flex items-center gap-6">
        {getHeaderNavigationItems(t, tHome).map((item) => (
          <NavigationMenu key={item.label} {...item} />
        ))}
      </ul>
      <NavigationLanguageToggle />
    </div>
  )
}
