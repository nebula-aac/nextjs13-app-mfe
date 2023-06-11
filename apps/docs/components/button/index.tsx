'use client'

import dynamic from "next/dynamic"
import { Fragment } from "react"

const WidgetButton = dynamic(
  async () => {
    try {
      // @ts-expect-error TODO: support types for importing MF
      const mod = await import('widget/button');
      return mod;
    } catch (error) {
      console.error("Error occurred while importing 'widget/button':", error);
      throw error;
    }
  },
  {
    ssr: false,
    suspense: true,
  }
);

export default function RemoteButton() {
  return (
    <Fragment>
      <WidgetButton />
    </Fragment>
  );
}