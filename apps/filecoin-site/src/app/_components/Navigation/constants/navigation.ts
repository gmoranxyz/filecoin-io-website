import type { TranslationFunction } from '@/i18n/types'

import type {
  ExpandedNavItem,
  NavItem,
  NavigationMenuItem,
} from '@filecoin-foundation/ui-filecoin/Navigation/types'

import { PATHS } from '@/constants/paths'
import {
  FILECOIN_DOCS_URL,
  FILECOIN_DOCS_URLS,
  FILECOIN_FOUNDATION_URLS,
  FILECOIN_URLS,
} from '@/constants/siteMetadata'

import { pickNavItem } from '../utils/pickNavItem'

import { PRODUCTS, type ProductKey } from '@/(homepage)/data/products'

type FooterNavigationItem = { title: string; items: Array<NavItem> }
type NavigationMenuGroup = NavigationMenuItem['items'][number]

// The homepage's root namespace, reused here for `products.*` labels and
// `catalog.groups.*.title` so the Products menu can never drift from the
// homepage catalog section (design review, round 1, item 7).
type HomeTranslationFunction = TranslationFunction

function getBlockExplorerItems(t: TranslationFunction): Array<ExpandedNavItem> {
  return [
    {
      label: 'Beryx',
      description: t('descriptions.beryx'),
      href: 'https://beryx.io/',
    },
    {
      label: 'Blockscout (FEVM)',
      description: t('descriptions.blockscout'),
      href: 'https://www.blockscout.com/',
    },
    {
      label: 'Filfox',
      description: t('descriptions.filfox'),
      href: 'https://filfox.info/',
    },
    {
      label: 'Filscan',
      description: t('descriptions.filscan'),
      href: 'https://filscan.io/en/',
    },
  ]
}

function getCommunityItems(t: TranslationFunction): Array<ExpandedNavItem> {
  return [
    {
      label: t('communityHub'),
      description: t('descriptions.communityHub'),
      href: PATHS.COMMUNITY_HUB.path,
    },
    {
      label: t('events'),
      description: t('descriptions.events'),
      href: FILECOIN_FOUNDATION_URLS.events.href,
    },
    {
      label: 'Orbit',
      description: t('descriptions.orbit'),
      href: FILECOIN_FOUNDATION_URLS.orbit.href,
    },
    {
      label: t('fipsGovernance'),
      description: t('descriptions.fipsGovernance'),
      href: FILECOIN_FOUNDATION_URLS.governance.href,
    },
  ]
}

function getNetworkMonitoringItems(
  t: TranslationFunction,
): Array<ExpandedNavItem> {
  return [
    {
      label: t('networkStatus'),
      description: t('descriptions.networkStatus'),
      href: 'https://status.filecoin.io/',
    },
    {
      label: t('networkHealth'),
      description: t('descriptions.networkHealth'),
      href: 'https://dashboard.starboard.ventures/',
    },
  ]
}

function getNetworkExploreItems(
  t: TranslationFunction,
): Array<ExpandedNavItem> {
  return [
    {
      label: t('learn'),
      description: t('descriptions.learn'),
      href: PATHS.LEARN.path,
    },
    {
      label: t('storeData'),
      description: t('descriptions.storeData'),
      href: PATHS.STORE_DATA.path,
    },
    {
      label: t('provideStorage'),
      description: t('descriptions.provideStorage'),
      href: PATHS.PROVIDE_STORAGE.path,
    },
  ]
}

function getDeveloperResourcesItems(
  t: TranslationFunction,
): Array<ExpandedNavItem> {
  return [
    {
      label: t('documentation'),
      description: t('descriptions.documentation'),
      href: FILECOIN_DOCS_URL,
    },
    {
      label: t('cookbook'),
      description: t('descriptions.cookbook'),
      href: FILECOIN_DOCS_URLS.builderCookbook,
    },
    {
      label: 'GitHub',
      description: t('descriptions.github'),
      href: FILECOIN_URLS.github.href,
    },
  ]
}

function getContributeItems(t: TranslationFunction): Array<ExpandedNavItem> {
  return [
    {
      label: t('grants'),
      description: t('descriptions.grants'),
      href: FILECOIN_FOUNDATION_URLS.grants.href,
    },
    {
      label: t('bugBounty'),
      description: t('descriptions.bugBounty'),
      href: FILECOIN_URLS.securityBugBounty.href,
    },
  ]
}

function productLink(
  key: ProductKey,
  t: TranslationFunction,
  tHome: HomeTranslationFunction,
): ExpandedNavItem {
  return {
    label: tHome(`products.${key}`),
    description: t(`descriptions.${key}`),
    href: PRODUCTS[key].href,
  }
}

// PLACEHOLDER — grouping mirrors the homepage catalog exactly (data/products.ts
// is the single source for hrefs), so the two surfaces cannot drift.
function getProductNavGroups(
  t: TranslationFunction,
  tHome: HomeTranslationFunction,
): Array<NavigationMenuGroup> {
  return [
    {
      title: tHome('catalog.groups.storage.title'),
      links: [
        productLink('warmStorage', t, tHome),
        productLink('archivalStorage', t, tHome),
        productLink('filecoinPin', t, tHome),
      ],
    },
    {
      title: tHome('catalog.groups.retrieval.title'),
      links: [
        productLink('retrieval', t, tHome),
        productLink('ipfsGateways', t, tHome),
      ],
    },
    {
      title: tHome('catalog.groups.payments.title'),
      links: [
        productLink('filecoinPay', t, tHome),
        productLink('usdfc', t, tHome),
      ],
    },
    {
      title: tHome('catalog.groups.developerTools.title'),
      links: [
        productLink('synapseSdk', t, tHome),
        productLink('smartContracts', t, tHome),
        productLink('documentation', t, tHome),
      ],
    },
    {
      title: tHome('catalog.groups.managedServices.title'),
      links: [
        productLink('filOne', t, tHome),
        productLink('akaveCloud', t, tHome),
        productLink('lighthouse', t, tHome),
        productLink('cidgravity', t, tHome),
        productLink('storacha', t, tHome),
      ],
    },
  ]
}

// PLACEHOLDER — Solutions has no destinations yet (Propaganda positioning
// work, workstream 1). Each link needs a unique href even though none are
// real yet: NavigationMenuPanel, MobileNavigation and DesktopNavigation all
// key their lists by href.
function getSolutionsNavGroups(
  t: TranslationFunction,
): Array<NavigationMenuGroup> {
  return [
    {
      title: t('sections.solutions'),
      links: [
        {
          label: t('solutionWeb3'),
          description: t('descriptions.solutionWeb3'),
          href: '#solutions-web3',
        },
        {
          label: t('solutionFinancialCompanies'),
          description: t('descriptions.solutionFinancialCompanies'),
          href: '#solutions-financial-companies',
        },
        {
          label: t('solutionAgents'),
          description: t('descriptions.solutionAgents'),
          href: '#solutions-agents',
        },
        {
          label: t('solutionStorage'),
          description: t('descriptions.solutionStorage'),
          href: '#solutions-storage',
        },
        {
          label: t('solutionVerification'),
          description: t('descriptions.solutionVerification'),
          href: '#solutions-verification',
        },
        {
          label: t('solutionIpIndustry'),
          description: t('descriptions.solutionIpIndustry'),
          href: '#solutions-ip-industry',
        },
      ],
    },
  ]
}

function getNetworkNavGroups(
  t: TranslationFunction,
): Array<NavigationMenuGroup> {
  return [
    { title: t('sections.explore'), links: getNetworkExploreItems(t) },
    {
      title: t('sections.tools'),
      links: [...getBlockExplorerItems(t), ...getNetworkMonitoringItems(t)],
    },
  ]
}

function getResourcesNavGroups(
  t: TranslationFunction,
): Array<NavigationMenuGroup> {
  return [
    {
      title: t('developers'),
      links: [...getDeveloperResourcesItems(t), ...getContributeItems(t)],
    },
    { title: t('community'), links: getCommunityItems(t) },
    {
      title: t('blog'),
      links: [
        {
          label: t('blog'),
          description: t('descriptions.blog'),
          href: PATHS.BLOG.path,
        },
      ],
    },
  ]
}

function dedupeByHref<Item extends NavItem>(items: Array<Item>): Array<Item> {
  const seen = new Set<string>()

  return items.filter(({ href }) => {
    if (seen.has(href)) {
      return false
    }
    seen.add(href)
    return true
  })
}

// Products, Solutions, Network, Resources — the four-way IA from design
// review (round 1, item 7). `/case-studies` has no home in this structure
// yet; it stays reachable from the homepage use-case section only.
export function getHeaderNavigationItems(
  t: TranslationFunction,
  tHome: HomeTranslationFunction,
): Array<NavigationMenuItem> {
  return [
    { label: t('products'), items: getProductNavGroups(t, tHome) },
    { label: t('solutions'), items: getSolutionsNavGroups(t) },
    { label: t('network'), items: getNetworkNavGroups(t) },
    { label: t('resources'), items: getResourcesNavGroups(t) },
  ]
}

export function getMobileNavigationItems(
  t: TranslationFunction,
  tHome: HomeTranslationFunction,
): Array<NavItem> {
  const allLinks = getHeaderNavigationItems(t, tHome).flatMap((item) =>
    item.items.flatMap((group) => group.links).map(pickNavItem),
  )

  return dedupeByHref(allLinks)
}

export function getFooterNavigationItems(
  t: TranslationFunction,
  tHome: HomeTranslationFunction,
): Array<FooterNavigationItem> {
  return getHeaderNavigationItems(t, tHome).map(({ label, items }) => ({
    title: label,
    items: dedupeByHref(items.flatMap((group) => group.links).map(pickNavItem)),
  }))
}

export function getFooterLegalItems(t: TranslationFunction): Array<NavItem> {
  return [
    {
      label: t('privacyPolicy'),
      href: FILECOIN_FOUNDATION_URLS.privacyPolicy.href,
    },
    {
      label: t('termsOfUse'),
      href: FILECOIN_FOUNDATION_URLS.termsOfUse.href,
    },
  ]
}
