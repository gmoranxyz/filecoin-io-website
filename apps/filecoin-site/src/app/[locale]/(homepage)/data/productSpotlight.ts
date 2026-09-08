import type { TranslationFunction } from '@/i18n/types'

import type { CodeLine } from '../components/CodeSnippet'

// PLACEHOLDER — illustrative snippet, not a verified working example.
// Signals "developer-friendly" per the wireframe; swap for the real quickstart
// once the unified developer journey (workstream 3) lands.
export function getSpotlightSnippet(t: TranslationFunction): Array<CodeLine> {
  return [
    [
      { text: 'import', tone: 'keyword' },
      { text: ' { Synapse } ', tone: 'plain' },
      { text: 'from', tone: 'keyword' },
      { text: " '@filoz/synapse-sdk'", tone: 'string' },
    ],
    [],
    [
      {
        text: `// ${t('spotlight.snippet.credentialsComment')}`,
        tone: 'comment',
      },
    ],
    [
      { text: 'const', tone: 'keyword' },
      { text: ' synapse = ', tone: 'plain' },
      { text: 'await', tone: 'keyword' },
      { text: ' Synapse.', tone: 'plain' },
      { text: 'create', tone: 'identifier' },
      { text: '({', tone: 'punctuation' },
    ],
    [
      { text: '  privateKey: ', tone: 'plain' },
      { text: 'process.env.FILECOIN_PRIVATE_KEY', tone: 'identifier' },
      { text: ',', tone: 'punctuation' },
    ],
    [
      { text: '  rpcURL: ', tone: 'plain' },
      { text: "'wss://api.node.glif.io/rpc/v1'", tone: 'string' },
      { text: ',', tone: 'punctuation' },
    ],
    [{ text: '})', tone: 'punctuation' }],
    [],
    [{ text: `// ${t('spotlight.snippet.uploadComment')}`, tone: 'comment' }],
    [
      { text: 'const', tone: 'keyword' },
      { text: ' { pieceCid } = ', tone: 'plain' },
      { text: 'await', tone: 'keyword' },
      { text: ' synapse.storage.', tone: 'plain' },
      { text: 'upload', tone: 'identifier' },
      { text: '(file)', tone: 'punctuation' },
    ],
    [],
    [{ text: `// ${t('spotlight.snippet.retrieveComment')}`, tone: 'comment' }],
    [
      { text: 'const', tone: 'keyword' },
      { text: ' bytes = ', tone: 'plain' },
      { text: 'await', tone: 'keyword' },
      { text: ' synapse.storage.', tone: 'plain' },
      { text: 'download', tone: 'identifier' },
      { text: '(pieceCid)', tone: 'punctuation' },
    ],
  ]
}

export type SpotlightFeature = {
  title: string
  description: string
}

export function getSpotlightFeatures(
  t: TranslationFunction,
): Array<SpotlightFeature> {
  return [
    {
      title: t('spotlight.features.warmStorage.title'),
      description: t('spotlight.features.warmStorage.description'),
    },
    {
      title: t('spotlight.features.retrieval.title'),
      description: t('spotlight.features.retrieval.description'),
    },
    {
      title: t('spotlight.features.payments.title'),
      description: t('spotlight.features.payments.description'),
    },
  ]
}
