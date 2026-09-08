import type { TranslationFunction } from '@/i18n/types'

import { graphicsData } from '@/data/graphicsData'

import archiveRoom from '@/assets/images/archive-room.webp'

import type { UseCase } from '../components/UseCaseShowcase'

// PLACEHOLDER — headlines, product lists and quotes are illustrative.
// Logos are resolved client-side in UseCaseShowcase (SVG components cannot be
// passed from a server component to a client component).
// Quotes are NOT real attributions; every `[Name], [Title]` must be replaced
// with an approved quote before launch. Companies mirror the store-data page
// and the case-studies collection.
export function getUseCases(t: TranslationFunction): Array<UseCase> {
  return [
    {
      id: 'akave',
      name: 'Akave',
      headline: t('useCases.akave.headline'),
      products: [
        t('products.warmStorage'),
        t('products.filecoinPay'),
        t('products.synapseSdk'),
      ],
      quote: t('useCases.akave.quote'),
      attribution: t('useCases.akave.attribution'),
      href: 'https://akave.com/',
      image: graphicsData.dataCenterServerRow,
    },
    {
      id: 'cidgravity',
      name: 'CIDgravity',
      headline: t('useCases.cidgravity.headline'),
      products: [t('products.warmStorage'), t('products.filecoinPin')],
      quote: t('useCases.cidgravity.quote'),
      attribution: t('useCases.cidgravity.attribution'),
      href: 'https://www.cidgravity.com/',
      image: graphicsData.filecoinServerRack,
    },
    {
      id: 'starling-lab',
      name: 'Starling Lab',
      headline: t('useCases.starlingLab.headline'),
      products: [t('products.archivalStorage'), t('products.filecoinPin')],
      quote: t('useCases.starlingLab.quote'),
      attribution: t('useCases.starlingLab.attribution'),
      href: '/case-studies/starling-lab',
      image: { data: archiveRoom, alt: t('useCases.starlingLab.imageAlt') },
    },
    {
      id: 'flickr-foundation',
      name: 'Flickr Foundation',
      headline: t('useCases.flickrFoundation.headline'),
      products: [t('products.archivalStorage')],
      quote: t('useCases.flickrFoundation.quote'),
      attribution: t('useCases.flickrFoundation.attribution'),
      href: '/case-studies/flickr-foundation',
      image: graphicsData.digitalMediaConversionSetup,
    },
    {
      id: 'internet-archive',
      name: 'Internet Archive',
      headline: t('useCases.internetArchive.headline'),
      products: [t('products.archivalStorage'), t('products.retrieval')],
      quote: t('useCases.internetArchive.quote'),
      attribution: t('useCases.internetArchive.attribution'),
      href: '/case-studies/internet-archive',
      image: graphicsData.classicLibraryInterior,
    },
    {
      id: 'lighthouse',
      name: 'Lighthouse',
      headline: t('useCases.lighthouse.headline'),
      products: [
        t('products.warmStorage'),
        t('products.filecoinPay'),
        t('products.smartContracts'),
      ],
      quote: t('useCases.lighthouse.quote'),
      attribution: t('useCases.lighthouse.attribution'),
      href: 'https://www.lighthouse.storage/',
      image: graphicsData.filecoinStorageDevice,
    },
  ]
}
