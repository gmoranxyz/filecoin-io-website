import type { TranslationFunction } from '@/i18n/types'

import {
  ArrowsClockwiseIcon,
  BracketsCurlyIcon,
  BookOpenIcon,
  CloudArrowUpIcon,
  CoinsIcon,
  CubeIcon,
  DatabaseIcon,
  GaugeIcon,
  HardDrivesIcon,
  LightningIcon,
  PushPinIcon,
  StackIcon,
} from '@phosphor-icons/react/dist/ssr'

import { PATHS } from '@/constants/paths'
import {
  FILECOIN_CLOUD_DOCS_URL,
  FILECOIN_CLOUD_URL,
  FILECOIN_DOCS_URL,
  FILECOIN_DOCS_URLS,
} from '@/constants/siteMetadata'

import type { ProductGroup } from '../components/ProductCatalog'

// PLACEHOLDER — the "full product list" from the wireframe. Grouping follows
// the brief's split between core Filecoin developer products and managed
// services built on Filecoin. All core-product hrefs point at filecoin.cloud
// surfaces until the /products/* pages exist (deliverable 1); the managed
// services reuse the store-data URLs.
export function getProductCatalog(t: TranslationFunction): Array<ProductGroup> {
  return [
    {
      title: t('catalog.groups.storage.title'),
      description: t('catalog.groups.storage.description'),
      products: [
        {
          label: t('products.warmStorage'),
          href: FILECOIN_CLOUD_URL,
          icon: LightningIcon,
        },
        {
          label: t('products.archivalStorage'),
          href: FILECOIN_DOCS_URLS.storageModel,
          icon: HardDrivesIcon,
        },
        {
          label: t('products.filecoinPin'),
          href: FILECOIN_CLOUD_DOCS_URL,
          icon: PushPinIcon,
        },
      ],
    },
    {
      title: t('catalog.groups.retrieval.title'),
      description: t('catalog.groups.retrieval.description'),
      products: [
        {
          label: t('products.retrieval'),
          href: FILECOIN_CLOUD_DOCS_URL,
          icon: GaugeIcon,
        },
        {
          label: t('products.ipfsGateways'),
          href: 'https://ipfs.tech/',
          icon: CubeIcon,
        },
      ],
    },
    {
      title: t('catalog.groups.payments.title'),
      description: t('catalog.groups.payments.description'),
      products: [
        {
          label: t('products.filecoinPay'),
          href: FILECOIN_CLOUD_DOCS_URL,
          icon: ArrowsClockwiseIcon,
        },
        {
          label: t('products.usdfc'),
          href: 'https://usdfc.net/',
          icon: CoinsIcon,
        },
      ],
    },
    {
      title: t('catalog.groups.developerTools.title'),
      description: t('catalog.groups.developerTools.description'),
      products: [
        {
          label: t('products.synapseSdk'),
          href: FILECOIN_CLOUD_DOCS_URL,
          icon: BracketsCurlyIcon,
        },
        {
          label: t('products.smartContracts'),
          href: FILECOIN_DOCS_URLS.filecoinVirtualMachine,
          icon: StackIcon,
        },
        {
          label: t('products.documentation'),
          href: FILECOIN_DOCS_URL,
          icon: BookOpenIcon,
        },
      ],
    },
    {
      title: t('catalog.groups.managedServices.title'),
      description: t('catalog.groups.managedServices.description'),
      products: [
        { label: 'Fil One', href: 'https://fil.one/', icon: CloudArrowUpIcon },
        {
          label: 'Akave Cloud',
          href: 'https://akave.com/',
          icon: DatabaseIcon,
        },
        {
          label: 'Lighthouse',
          href: 'https://www.lighthouse.storage/',
          icon: DatabaseIcon,
        },
        {
          label: 'CIDgravity',
          href: 'https://www.cidgravity.com/',
          icon: DatabaseIcon,
        },
        {
          label: 'Storacha',
          href: 'https://storacha.network/',
          icon: DatabaseIcon,
        },
        {
          label: t('catalog.viewAllProviders'),
          href: PATHS.STORE_DATA.path,
          icon: ArrowsClockwiseIcon,
          variant: 'muted',
        },
      ],
    },
  ]
}
