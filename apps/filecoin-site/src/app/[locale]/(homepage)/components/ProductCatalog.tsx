import type { Icon as PhosphorIcon } from '@phosphor-icons/react'
import { clsx } from 'clsx'

import { BaseLink } from '@filecoin-foundation/ui-filecoin/BaseLink'
import { Heading } from '@filecoin-foundation/ui-filecoin/Heading'
import { Icon } from '@filecoin-foundation/ui-filecoin/Icon'

export type Product = {
  label: string
  href: string
  icon: PhosphorIcon
  variant?: 'default' | 'muted'
}

export type ProductGroup = {
  title: string
  description: string
  products: Array<Product>
}

type ProductCatalogProps = {
  groups: Array<ProductGroup>
}

export function ProductCatalog({ groups }: ProductCatalogProps) {
  return (
    <div className="divide-y divide-(--color-border-muted) border-y border-(--color-border-muted)">
      {groups.map(({ title, description, products }) => (
        <section
          key={title}
          className="grid grid-cols-1 gap-6 py-10 md:grid-cols-12 md:gap-10"
        >
          <div className="space-y-2 md:col-span-4">
            <Heading tag="h3" variant="card-heading">
              {title}
            </Heading>
            <p className="text-(--color-paragraph-text)">{description}</p>
          </div>

          <ul className="flex flex-wrap gap-3 md:col-span-8">
            {products.map((product) => (
              <li key={product.label}>
                <ProductPill {...product} />
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  )
}

function ProductPill({ label, href, icon, variant = 'default' }: Product) {
  return (
    <BaseLink
      href={href}
      className={clsx(
        'focus:brand-outline inline-flex items-center gap-2.5 rounded-full border px-4 py-2.5 text-sm font-medium transition-colors',
        variant === 'default' &&
          'hover:border-brand-700 hover:text-brand-800 border-(--color-border-base) bg-(--color-card-background) text-(--color-text-base)',
        variant === 'muted' &&
          'border-dashed border-(--color-border-base) text-(--color-paragraph-text) hover:text-(--color-text-base)',
      )}
    >
      <span className="text-brand-700">
        <Icon component={icon} size={18} />
      </span>
      {label}
    </BaseLink>
  )
}
