'use client'

import dynamic from "next/dynamic"
import { Fragment } from "react"

const RemoteForm = dynamic(
  async () => {
    try {
      // @ts-expect-error TODO: support types for importing MF
      const mod = await import('form/form');
      return mod;
    } catch (error) {
      console.error("Error occurred while importing 'form/form':", error);
      throw error;
    }
  },
  {
    ssr: false,
    suspense: true,
  }
);

export default function RemoteFormComponent() {
  return (
    <Fragment>
      <RemoteForm />
    </Fragment>
  );
}