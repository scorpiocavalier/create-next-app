import Head from 'next/head'

import Layout from '../../components/layout'
import utilStyles from '../../styles/utils.module.css'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Date from '../../components/date'

export default function Post ({ postData }) {
  const { title, date, contentHtml } = postData

  return (
    <Layout>
      <Head>
        <title>{ title }</title>
      </Head>
      <article>
        <h1 className={ utilStyles.headingXl }>{ title }</h1>
        <div className={ utilStyles.lightText }>
          <Date dateString={ date } />
        </div>
        <div dangerouslySetInnerHTML={ { __html: contentHtml } } />
      </article>
    </Layout>
  )
}

export const getStaticPaths = async () => {
  const paths = getAllPostIds()

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id)

  return {
    props: {
      postData
    }
  }
}
