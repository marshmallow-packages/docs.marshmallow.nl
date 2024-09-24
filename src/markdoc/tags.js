import { Callout } from '@/components/Callout'
import { QuickLink, QuickLinks } from '@/components/QuickLinks'

const tags = {
  callout: {
    attributes: {
      title: { type: String },
      type: {
        type: String,
        default: 'note',
        matches: ['note', 'warning'],
        errorLevel: 'critical',
      },
    },
    render: Callout,
  },
  figure: {
    selfClosing: true,
    attributes: {
      src: { type: String },
      alt: { type: String },
      dark: { type: String },
      light: { type: String },
      caption: { type: String },
    },
    render: ({ src = '', alt = '', dark = '', light = '', caption }) => src ? (
      <figure>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} class="rounded-xl hidden dark:block"/>
        <figcaption>{caption}</figcaption>
      </figure>
    ) : (
      <figure>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={dark} alt={alt} class="rounded-xl hidden dark:block drop-shadow-lg shadow-slate-950 shadow-lg"/>
        <img src={light} alt={alt} class="rounded-xl dark:hidden drop-shadow-lg"/>
        <figcaption>{caption}</figcaption>
      </figure>
    ),
  },
  'quick-links': {
    render: QuickLinks,
  },
  'quick-link': {
    selfClosing: true,
    render: QuickLink,
    attributes: {
      title: { type: String },
      description: { type: String },
      icon: { type: String },
      href: { type: String },
    },
  },
}

export default tags
