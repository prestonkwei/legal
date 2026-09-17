type PolicyChildrenProps = {
  children: React.ReactNode
}

export const PolicyH2 = ({ children }: PolicyChildrenProps) => <h2 className='text-lg md:text-xl font-bold uppercase tracking-tight text-white mt-16 mb-5 first:mt-0'>{children}</h2>

export const PolicyH3 = ({ children }: PolicyChildrenProps) => <h3 className='text-base font-semibold text-white mt-9 mb-2.5'>{children}</h3>

export const PolicyP = ({ children }: PolicyChildrenProps) => <p className='font-source text-[0.975rem] md:text-base leading-[1.8] text-zinc-400 mb-5 break-words'>{children}</p>

export const PolicyUl = ({ children }: PolicyChildrenProps) => <ul className='font-source list-disc pl-5 mb-5 space-y-2.5 text-[0.975rem] md:text-base leading-[1.75] text-zinc-400 marker:text-zinc-700'>{children}</ul>

export const PolicyOl = ({ children }: PolicyChildrenProps) => <ol className='font-source list-decimal pl-5 mb-5 space-y-2.5 text-[0.975rem] md:text-base leading-[1.75] text-zinc-400 marker:text-zinc-700 marker:font-mono marker:text-sm'>{children}</ol>

export const PolicyLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} className='text-white underline decoration-zinc-700 underline-offset-4 hover:text-accent hover:decoration-accent transition-colors duration-150'>
    {children}
  </a>
)

export const PolicyEmail = ({ address }: { address: string }) => <PolicyLink href={`mailto:${address}`}>{address}</PolicyLink>

export const PolicyNotice = ({ children }: PolicyChildrenProps) => (
  <div className='border-l-2 border-accent bg-surface pl-5 pr-5 py-4 mb-12 font-source text-[0.8125rem] leading-[1.8] tracking-wide text-zinc-400'>{children}</div>
)

export const PolicyQuote = ({ children }: PolicyChildrenProps) => (
  <blockquote className='border border-edge bg-surface px-5 py-4 mb-5 font-source text-[0.9375rem] leading-[1.8] text-zinc-300 break-words'>{children}</blockquote>
)

export const PolicyDefList = ({ items }: { items: { term: string; definition: string }[] }) => (
  <dl className='mb-5 divide-y divide-edge border-y border-edge'>
    {items.map((item) => (
      <div key={item.term} className='py-4 sm:grid sm:grid-cols-[9rem_1fr] sm:gap-6'>
        <dt className='text-sm font-semibold text-white'>{item.term}</dt>
        <dd className='font-source text-[0.9375rem] leading-[1.7] text-zinc-400 mt-1.5 sm:mt-0'>{item.definition}</dd>
      </div>
    ))}
  </dl>
)

export const PolicyList = ({ items }: { items: string[] }) => (
  <ul className='mb-8 divide-y divide-edge border-y border-edge'>
    {items.map((item) => (
      <li key={item} className='py-3.5 font-mono text-sm text-white'>
        {item}
      </li>
    ))}
  </ul>
)
