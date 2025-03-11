"use client"

import Giscus from "@giscus/react";

export default function Comments() {
  return (
    <Giscus
      id="comments"
      repo="harrybaines/portfolio"
      repoId="R_kgDOMUFkAg"
      category="General"
      categoryId="DIC_kwDOMUFkAs4Cn2Uk"
      mapping="pathname"
      term="Welcome to @giscus/react component!"
      strict='0'
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme="dark"
      lang="en"
      loading="lazy"
    />
  )
}