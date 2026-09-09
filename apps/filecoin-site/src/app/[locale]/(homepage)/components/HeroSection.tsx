import { useTranslations } from 'next-intl'

import { Announcement } from '@filecoin-foundation/ui-filecoin/Announcement'
import { Button } from '@filecoin-foundation/ui-filecoin/Button'
import { PageHeader } from '@filecoin-foundation/ui-filecoin/PageHeader'
import { PageSection } from '@filecoin-foundation/ui-filecoin/PageSection'

import { PATHS } from '@/constants/paths'
import { FILECOIN_CLOUD_DOCS_URL } from '@/constants/siteMetadata'

export function HeroSection() {
  const t = useTranslations('/.hero')

  return (
    <PageSection backgroundVariant="transparentDark" paddingVariant="none">
      <div className="flex flex-col gap-10 py-25 md:py-30 lg:max-w-4xl">
        <Announcement
          href={`${PATHS.BLOG.path}/Solstice-Towards-a-Filecoin-Service-Economy`}
        >
          {t('announcement')}
        </Announcement>

        <PageHeader
          title={t('headline')}
          description={t('description')}
          variant="highContrast"
          cta={[
            <Button href={FILECOIN_CLOUD_DOCS_URL} variant="primary">
              {t('cta.main')}
            </Button>,
            <Button href={PATHS.STORE_DATA_TALK_TO_EXPERT.path} variant="ghost">
              {t('cta.secondary')}
            </Button>,
          ]}
        />
      </div>
    </PageSection>
  )
}
