import Head from "next/head"
import React, { useState } from "react"

export const Favicon = () => {
  const [icon, setIcon] = useState<string>("")
  return <div>
    <Head>
      <link rel="icon" href={icon} />
    </Head>
    <svg style={{ display: "none" }} xmlns="http://www.w3.org/2000/svg" ref={(ref) => {
      ref && setIcon(`data:image/svg+xml,${ref.outerHTML}`)
    }}>
      <text y="32" font-size="32">🦤</text>
    </svg>
  </div>
}
