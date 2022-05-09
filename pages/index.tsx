import type { ReactElement } from 'react'

import Layout from "../components/layout";
import MessagesPage from "./messagesPage";

const Page = () => {
  return (
      <MessagesPage/>
  )
}

Page.getLayout = function getLayout(page: ReactElement) {
  return (
      <Layout>
        {page}
      </Layout>
  )
}

export default Page;