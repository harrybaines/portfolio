import { Testimonial } from '@/components/ui/testimonial'
import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc'
import Image, { ImageProps } from 'next/image'
import Link from 'next/link'
import React, { ReactNode } from 'react'
import { highlight } from 'sugar-high'

interface TableData {
  headers: string[];
  rows: string[][];
}

interface TableProps {
  data: TableData;
}

function Table({ data }: TableProps) {
  const headers = data.headers.map((header, index) => (
    <th key={index}>{header}</th>
  ))
  const rows = data.rows.map((row, index) => (
    <tr key={index}>
      {row.map((cell, cellIndex) => (
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

interface CustomLinkProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> {
  href: string;
  children: ReactNode;
}

function CustomLink(props: CustomLinkProps) {
  const { href, children, ...rest } = props

  console.log(href)

  if (href.startsWith('/') || href.startsWith('http')) {
    return (
      <Link href={href} {...rest}>
        {children}
      </Link>
    )
  }

  if (href.startsWith('#')) {
    return <a href={href} {...rest} />
  }

  return <a href={href} target="_blank" rel="noopener noreferrer" {...rest} />
}

interface RoundedImageProps extends Omit<ImageProps, 'alt'> {
  alt: string;
}

function RoundedImage(props: RoundedImageProps) {
  const { alt, ...rest } = props
  return <Image alt={alt} className="rounded-lg" {...rest} />
}

interface CodeProps {
  children: string;
  [key: string]: unknown;
}

function Code({ children, ...props }: CodeProps) {
  const codeHTML = highlight(children)
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
}

function slugify(str: string): string {
  return str
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w\-]+/g, '') // Remove all non-word characters except for -
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
}

interface HeadingProps {
  children: string;
}

function createHeading(level: 1 | 2 | 3 | 4 | 5 | 6) {
  const Heading = ({ children }: HeadingProps) => {
    const slug = slugify(children)
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

const components = {
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
  Testimonial,
}

interface CustomMDXProps extends Omit<MDXRemoteProps, 'components'> {
  components?: Record<string, React.ComponentType<unknown>>;
}

export function CustomMDX(props: CustomMDXProps) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  )
}