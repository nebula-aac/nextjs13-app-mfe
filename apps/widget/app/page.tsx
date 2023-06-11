import Button from "@/components/button/button";
import RemoteFormComponent from "@/components/form/form";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <h1>Widget</h1>
      <Button />
      <p>Button below is in Widget app</p>
      <RemoteFormComponent />
      <p>Form is from Form app</p>
    </Fragment>
  )
}