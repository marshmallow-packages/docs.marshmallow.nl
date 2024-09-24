import Link from 'next/link'

import { Icon } from '@/components/Icon'

export function QuickLinks({ children }) {
  return (
    <div className="grid grid-cols-1 gap-6 my-12 not-prose sm:grid-cols-2">
      {children}
    </div>
  )
}

export function QuickLink({ title, description, href }) {
  return (
    <div className="relative border group rounded-xl border-slate-200 dark:border-slate-800">
      <div className="absolute -inset-px rounded-xl border-2 border-transparent opacity-0 [background:linear-gradient(var(--quick-links-hover-bg,theme(colors.sky.50)),var(--quick-links-hover-bg,theme(colors.sky.50)))_padding-box,linear-gradient(to_top,theme(colors.red.400),theme(colors.cyan.400),theme(colors.sky.500))_border-box] group-hover:opacity-100 dark:[--quick-links-hover-bg:theme(colors.slate.800)]" />
      <div className="relative p-6 overflow-hidden rounded-xl">
        <h2 className="text-base  font-display text-slate-900 dark:text-white">
          <Link href={href}>
            <span className="absolute -inset-px rounded-xl" />
            {title}
          </Link>
        </h2>
        <p className="mt-1 text-sm text-slate-700 dark:text-slate-400">
          {description}
        </p>
      </div>
    </div>
  )
}
