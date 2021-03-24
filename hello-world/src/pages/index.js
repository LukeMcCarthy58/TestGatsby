import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default function Home() {
  return (
    <div style={{ color: `grey` }}>
      <Link to="/contact/">Contact</Link>
      <Header headerText="Luke's Portfolio"></Header>
      <p>This is a paragraph</p>
      <img src="https://source.unsplash.com/random/400x200" alt="" />
    </div>
  );
}
