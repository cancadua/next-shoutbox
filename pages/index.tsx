import type { ReactElement } from 'react'

import Layout from "../components/layout";

const Page = () => {
  return (
      <>Hej</>
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