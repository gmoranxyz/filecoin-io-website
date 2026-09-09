import { useTranslations } from 'next-intl'

import { Badge } from '@filecoin-foundation/ui-filecoin/Badge'
import { Button } from '@filecoin-foundation/ui-filecoin/Button'
import { ButtonRow } from '@filecoin-foundation/ui-filecoin/ButtonRow'
import { PageSection } from '@filecoin-foundation/ui-filecoin/PageSection'

import { PATHS } from '@/constants/paths'
import { FILECOIN_CLOUD_DOCS_URL } from '@/constants/siteMetadata'

export function HeroSection() {
  const t = useTranslations('/.hero')

  return (
    <PageSection backgroundVariant="transparentDark" paddingVariant="none">
      <header className="flex flex-col gap-10 py-25 md:py-30 lg:max-w-4xl">
        <div className="flex">
          <Badge variant="primary" textTransform="uppercase">
            {t('eyebrow')}
          </Badge>
        </div>

        <div className="flex flex-col gap-6">
          <h1 className="font-heading text-4xl/12 font-medium text-balance sm:text-6xl/18 sm:tracking-tight">
            {t('headlineStrong')}{' '}
            <span className="text-(--color-paragraph-text)">
              {t('headlineMuted')}
            </span>
          </h1>

          <p className="max-w-2xl text-balance text-(--color-paragraph-text-strong) md:text-xl/7">
            {t('description')}
          </p>
        </div>

        <ButtonRow
          buttons={[
            <Button href={FILECOIN_CLOUD_DOCS_URL} variant="primary">
              {t('cta.main')}
            </Button>,
            <Button href={PATHS.STORE_DATA_TALK_TO_EXPERT.path} variant="ghost">
              {t('cta.secondary')}
            </Button>,
          ]}
        />
      </header>
    </PageSection>
  )
}
