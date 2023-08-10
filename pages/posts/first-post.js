import React from 'react'
import Link from "next/link"

function FirstPost() {
  return (
    <>
    <div>FirstPost</div>
    <h1 className="title">
     Read <Link href="/">this page!</Link>
    </h1>
    </>
  );
}

export default FirstPost