export type StatItem = {
  value: string
  label: string
  description: string
}

type StatsRowProps = {
  stats: Array<StatItem>
}

export function StatsRow({ stats }: StatsRowProps) {
  return (
    <dl className="grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-4">
      {stats.map(({ value, label, description }) => (
        <div
          key={label}
          className="flex flex-col gap-3 border-t border-(--color-border-muted) pt-6"
        >
          <dt className="order-2 text-lg font-medium text-(--color-text-base)">
            {label}
          </dt>
          <dd className="font-heading text-brand-700 order-1 text-4xl/10 font-medium tracking-tight sm:text-5xl/15">
            {value}
          </dd>
          <dd className="order-3 text-sm text-(--color-paragraph-text)">
            {description}
          </dd>
        </div>
      ))}
    </dl>
  )
}
