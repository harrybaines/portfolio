import { MDXRemote } from 'next-mdx-remote/rsc'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { highlight } from 'sugar-high'

// Add custom styles for syntax highlighting
const syntaxHighlightingStyles = `
  code .string { color: var(--color-green); }
  code .keyword { color: var(--color-red); }
  code .function { color: var(--color-blue); }
  code .number { color: var(--color-purple); }
  code .comment { color: var(--color-text-muted); }
  code .operator { color: var(--color-orange); }
  code .punctuation { color: var(--color-text-muted); }
  code .property { color: var(--color-yellow); }
  code .variable { color: var(--color-aqua); }
`

function Table({ data }: { data: any }) {
  let headers = data.headers.map((header: any, index: number) => (
    <th key={index}>{header}</th>
  ))
  let rows = data.rows.map((row: any, index: number) => (
    <tr key={index}>
      {row.map((cell: any, cellIndex: number) => (
        <td key={cellIndex}>{cell}</td>
      ))}
    </tr>
  ))

  return (
    <table>
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  )
}

function CustomLink(props: any) {
  let href = props.href

  if (href.startsWith('/')) {
    return (
      <Link href={href} className="text-primary hover:text-green border-b border-dashed border-muted/20 hover:border-green transition-colors" {...props}>
        {props.children}
      </Link>
    )
  }

  if (href.startsWith('#')) {
    return <a {...props} className="text-primary hover:text-green border-b border-dashed border-muted/20 hover:border-green transition-colors" />
  }

  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className="text-primary hover:text-green border-b border-dashed border-muted/20 hover:border-green transition-colors"
      {...props}
    />
  )
}

function RoundedImage(props: any) {
  return <Image alt={props.alt} className="rounded-lg" {...props} />
}

function Code({ children, ...props }: { children: any }) {
  let codeHTML = highlight(children)
  return (
    <>
      <style>{syntaxHighlightingStyles}</style>
      <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
    </>
  )
}

function slugify(str: string) {
  return str
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w\-]+/g, '') // Remove all non-word characters except for -
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
}

function createHeading(level: number) {
  const Heading = ({ children }: { children: any }) => {
    let slug = slugify(children)
    return React.createElement(
      `h${level}`,
      { id: slug },
      [
        React.createElement('a', {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: 'anchor',
        }),
      ],
      children
    )
  }

  Heading.displayName = `Heading${level}`

  return Heading
}

let components = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  Image: RoundedImage,
  a: CustomLink,
  code: Code,
  Table,
}

export function CustomMDX(props: any) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  )
}