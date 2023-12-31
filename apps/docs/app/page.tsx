import RemoteButton from "@/components/button";
import NavBar from "@/components/header";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <NavBar />
      <div>
        <h1>Docs</h1>
        <RemoteButton />
      </div>
    </Fragment>
  )
}