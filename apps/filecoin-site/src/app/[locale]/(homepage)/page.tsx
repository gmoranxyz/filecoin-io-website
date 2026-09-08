import Image from 'next/image'

import type { LocaleParams } from '@/i18n/types'

import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

import { StructuredDataScript } from '@filecoin-foundation/ui/StructuredDataScript'
import { Button } from '@filecoin-foundation/ui-filecoin/Button'
import { LogoSection } from '@filecoin-foundation/ui-filecoin/LogoSection/LogoSection'
import { PageSection } from '@filecoin-foundation/ui-filecoin/PageSection'
import { SectionContent } from '@filecoin-foundation/ui-filecoin/SectionContent'

import { PATHS } from '@/constants/paths'
import {
  FILECOIN_CLOUD_DOCS_URL,
  FILECOIN_CLOUD_URL,
} from '@/constants/siteMetadata'

import { graphicsData } from '@/data/graphicsData'
import { trustedByLogos } from '@/data/trustedByLogos'

import { createMetadata } from '@/utils/createMetadata'
import { getLocalePath } from '@/utils/getLocalePath'
import { getTranslatedMetadata } from '@/utils/getTranslatedMetadata'

import { GradientOverlay } from '@/components/GradientOverlay'
import { Navigation } from '@/components/Navigation/Navigation'

import { AudienceSelector } from './components/AudienceSelector'
import { HeroSection } from './components/HeroSection'
import { ProductCatalog } from './components/ProductCatalog'
import { ProductSpotlight } from './components/ProductSpotlight'
import { StatsRow } from './components/StatsRow'
import { UseCaseShowcase } from './components/UseCaseShowcase'
import { getAudiences } from './data/audiences'
import { getProductCatalog } from './data/productCatalog'
import {
  getSpotlightFeatures,
  getSpotlightSnippet,
} from './data/productSpotlight'
import { getProofStats } from './data/proofStats'
import { getUseCases } from './data/useCases'
import { generateStructuredData } from './utils/generateStructuredData'

type HomeProps = {
  params: Promise<LocaleParams>
}

export default async function Home({ params }: HomeProps) {
  await params

  const t = await getTranslations(PATHS.HOME.path)
  const metadata = await getTranslatedMetadata(PATHS.HOME.path)

  const proofStats = getProofStats(t)
  const useCases = getUseCases(t)
  const spotlightFeatures = getSpotlightFeatures(t)
  const spotlightSnippet = getSpotlightSnippet(t)
  const audiences = getAudiences(t)
  const productCatalog = getProductCatalog(t)

  return (
    <>
      <StructuredDataScript structuredData={generateStructuredData(metadata)} />

      {/* 1. Hero — intro, primary CTAs, customer logos */}
      <div className="relative isolate">
        <Navigation backgroundVariant="transparentDark" />
        <HeroSection />
        <Image
          fill
          priority
          sizes="100vw"
          src={graphicsData.earthFromDeepSpace.data}
          alt={graphicsData.earthFromDeepSpace.alt}
          className="absolute bottom-0 -z-10 h-full object-cover object-top"
        />
        <GradientOverlay />
      </div>

      <PageSection backgroundVariant="dark" paddingVariant="topNone">
        <LogoSection
          headingTag="h2"
          title={t('trustedBy.title')}
          logos={trustedByLogos}
          gradientVariant="dark"
        />
      </PageSection>

      {/* 2. Proof — a small number of simple, defensible figures */}
      <PageSection backgroundVariant="gray">
        <SectionContent
          headingTag="h2"
          title={t('proof.title')}
          description={t('proof.description')}
        >
          <StatsRow stats={proofStats} />
        </SectionContent>
      </PageSection>

      {/* 3. Real use cases — who built what, with which products */}
      <PageSection backgroundVariant="light">
        <SectionContent
          headingTag="h2"
          title={t('useCases.title')}
          description={t('useCases.description')}
          ctaPosition="inline"
          cta={
            <Button href={PATHS.CASE_STUDIES.path} variant="ghost">
              {t('useCases.cta')}
            </Button>
          }
        >
          <UseCaseShowcase useCases={useCases} />
        </SectionContent>
      </PageSection>

      {/* 4. Product spotlight — description + developer-friendly snippet */}
      <PageSection backgroundVariant="dark">
        <ProductSpotlight
          eyebrow={t('spotlight.eyebrow')}
          title={t('spotlight.title')}
          description={t('spotlight.description')}
          features={spotlightFeatures}
          snippet={spotlightSnippet}
          cta={{
            primary: {
              href: FILECOIN_CLOUD_DOCS_URL,
              label: t('spotlight.cta.main'),
            },
            secondary: {
              href: FILECOIN_CLOUD_URL,
              label: t('spotlight.cta.secondary'),
            },
          }}
        />
      </PageSection>

      {/* 5. Audiences — one path per ICP */}
      <PageSection backgroundVariant="light">
        <SectionContent
          headingTag="h2"
          title={t('audiences.title')}
          description={t('audiences.description')}
        >
          <AudienceSelector audiences={audiences} />
        </SectionContent>
      </PageSection>

      {/* 6. Full product list — core products vs. managed services */}
      <PageSection backgroundVariant="gray">
        <SectionContent
          headingTag="h2"
          title={t('catalog.title')}
          description={t('catalog.description')}
        >
          <ProductCatalog groups={productCatalog} />
        </SectionContent>
      </PageSection>

      {/* 7. Get started */}
      <PageSection backgroundVariant="dark">
        <SectionContent
          centerTitle
          headingTag="h2"
          title={t('getStarted.title')}
          description={t('getStarted.description')}
          ctaPosition="below-center"
          cta={[
            <Button href={FILECOIN_CLOUD_DOCS_URL} variant="primary">
              {t('getStarted.cta.main')}
            </Button>,
            <Button href={PATHS.STORE_DATA_TALK_TO_EXPERT.path} variant="ghost">
              {t('getStarted.cta.secondary')}
            </Button>,
          ]}
        />
      </PageSection>
    </>
  )
}

export async function generateMetadata(): Promise<Metadata> {
  const { title, description } = await getTranslatedMetadata(PATHS.HOME.path)

  return createMetadata({
    title: { absolute: title },
    description,
    path: await getLocalePath(PATHS.HOME.path),
    image: graphicsData.earthFromDeepSpace.data.src,
  })
}
