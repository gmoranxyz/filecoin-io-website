import type { TranslationFunction } from '@/i18n/types'

import type {
  ExpandedNavItem,
  NavItem,
  NavigationMenuItem,
} from '@filecoin-foundation/ui-filecoin/Navigation/types'

import { PATHS } from '@/constants/paths'
import {
  FIL_ONE_URL,
  FILECOIN_CLOUD_DOCS_URL,
  FILECOIN_CLOUD_URL,
  FILECOIN_DOCS_URL,
  FILECOIN_DOCS_URLS,
  FILECOIN_FOUNDATION_URLS,
  FILECOIN_URLS,
} from '@/constants/siteMetadata'

import { pickNavItem } from '../utils/pickNavItem'

type FooterNavigationItem = { title: string; items: Array<NavItem> }

// Header follows the site IA (Products, Resources, Company). Pages the IA
// lists but that don't exist yet (Solutions, Agents, Cold Storage, IPFS,
// Pricing, Careers) are left out until they are built. Links whose
// destination is still undecided use a unique inert hash so list keys stay
// distinct.
const PLACEHOLDER_HREFS = {
  cli: '#resources-cli',
  support: '#resources-support',
  about: '#company-about',
}

function getBlockExplorerItems(): Array<ExpandedNavItem> {
  return [
    { label: 'Beryx', href: 'https://beryx.io/' },
    { label: 'Blockscout (FEVM)', href: 'https://www.blockscout.com/' },
    { label: 'Filfox', href: 'https://filfox.info/' },
    { label: 'Filscan', href: 'https://filscan.io/en/' },
  ]
}

function getCommunityItems(t: TranslationFunction): Array<ExpandedNavItem> {
  return [
    {
      label: t('communityHub'),
      description: t('descriptions.communityHub'),
      href: PATHS.COMMUNITY_HUB.path,
    },
    { label: t('events'), href: FILECOIN_FOUNDATION_URLS.events.href },
    { label: 'Orbit', href: FILECOIN_FOUNDATION_URLS.orbit.href },
    {
      label: t('fipsGovernance'),
      href: FILECOIN_FOUNDATION_URLS.governance.href,
    },
  ]
}

function getNetworkMonitoringItems(
  t: TranslationFunction,
): Array<ExpandedNavItem> {
  return [
    { label: t('networkStatus'), href: 'https://status.filecoin.io/' },
    {
      label: t('networkHealth'),
      href: 'https://dashboard.starboard.ventures/',
    },
  ]
}

function getProductItems(t: TranslationFunction): Array<ExpandedNavItem> {
  return [
    {
      label: t('storeData'),
      description: t('descriptions.storeData'),
      href: PATHS.STORE_DATA.path,
    },
    {
      label: t('filecoinCloud'),
      description: t('descriptions.filecoinCloud'),
      href: FILECOIN_CLOUD_URL,
    },
    {
      label: t('filOne'),
      description: t('descriptions.filOne'),
      href: FIL_ONE_URL,
    },
    {
      label: t('provideStorage'),
      description: t('descriptions.provideStorage'),
      href: PATHS.PROVIDE_STORAGE.path,
    },
  ]
}

function getToolItems(t: TranslationFunction): Array<ExpandedNavItem> {
  return [
    {
      label: t('sdk'),
      description: t('descriptions.sdk'),
      href: FILECOIN_CLOUD_DOCS_URL,
    },
    {
      label: t('cli'),
      description: t('descriptions.cli'),
      href: PLACEHOLDER_HREFS.cli,
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
    { label: t('cookbook'), href: FILECOIN_DOCS_URLS.builderCookbook },
    { label: 'GitHub', href: FILECOIN_URLS.github.href },
  ]
}

function getExploreItems(t: TranslationFunction): Array<ExpandedNavItem> {
  return [
    {
      label: t('developerDocs'),
      description: t('descriptions.documentation'),
      href: FILECOIN_DOCS_URL,
    },
    {
      label: t('caseStudies'),
      description: t('descriptions.caseStudies'),
      href: PATHS.CASE_STUDIES.path,
    },
    {
      label: t('support'),
      description: t('descriptions.support'),
      href: PLACEHOLDER_HREFS.support,
    },
  ]
}

function getCompanyItems(t: TranslationFunction): Array<ExpandedNavItem> {
  return [
    {
      label: t('about'),
      description: t('descriptions.about'),
      href: PLACEHOLDER_HREFS.about,
    },
    {
      label: t('communityHub'),
      description: t('descriptions.communityHub'),
      href: PATHS.COMMUNITY_HUB.path,
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
    { label: t('bugBounty'), href: FILECOIN_URLS.securityBugBounty.href },
  ]
}

// Every internal page, so mobile and footer keep them reachable even where
// the header IA does not list them (Learn, Build on Filecoin, Blog).
function getInternalNavigationItems(t: TranslationFunction): Array<NavItem> {
  return [
    { label: t('storeData'), href: PATHS.STORE_DATA.path },
    { label: t('provideStorage'), href: PATHS.PROVIDE_STORAGE.path },
    { label: t('caseStudies'), href: PATHS.CASE_STUDIES.path },
    { label: t('learn'), href: PATHS.LEARN.path },
    { label: t('buildOnFilecoin'), href: PATHS.BUILD_ON_FILECOIN.path },
    { label: t('communityHub'), href: PATHS.COMMUNITY_HUB.path },
    { label: t('blog'), href: PATHS.BLOG.path },
  ]
}

export function getMobileNavigationItems(t: TranslationFunction) {
  return getInternalNavigationItems(t)
}

export function getHeaderNavigationItems(
  t: TranslationFunction,
): Array<NavItem | NavigationMenuItem> {
  return [
    {
      label: t('sections.products'),
      items: [{ title: t('sections.products'), links: getProductItems(t) }],
    },
    {
      label: t('sections.resources'),
      items: [
        { title: t('sections.tools'), links: getToolItems(t) },
        { title: t('sections.explore'), links: getExploreItems(t) },
      ],
      compactLinks: [
        {
          title: t('sections.network'),
          links: [...getNetworkMonitoringItems(t), ...getBlockExplorerItems()],
        },
      ],
    },
    {
      label: t('sections.company'),
      items: [{ title: t('sections.company'), links: getCompanyItems(t) }],
    },
  ]
}

export function getFooterNavigationItems(
  t: TranslationFunction,
): Array<FooterNavigationItem> {
  return [
    {
      title: t('sections.navigation'),
      items: getInternalNavigationItems(t).filter(
        ({ href }) => href !== PATHS.COMMUNITY_HUB.path,
      ),
    },
    {
      title: t('sections.resources'),
      items: [
        ...getDeveloperResourcesItems(t).map(pickNavItem),
        ...getContributeItems(t).map(pickNavItem),
        { label: t('brandKit'), href: 'https://hub.fil.org/design' },
        ...getNetworkMonitoringItems(t).map(pickNavItem),
      ],
    },
    {
      title: t('sections.blockExplorers'),
      items: getBlockExplorerItems().map(pickNavItem),
    },
    {
      title: t('sections.community'),
      items: getCommunityItems(t).map(pickNavItem),
    },
  ]
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
