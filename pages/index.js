import Head from 'next/head'
import Link from 'next/link'

import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Date from '../components/date'

export default function Home ({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{ siteTitle }</title>
      </Head>

      <section className={ utilStyles.headingMd }>
        <p>Self-taught programmer motivated to take on the world!</p>
        <p>One problem at a time.</p>
      </section>

      <section className={ `${ utilStyles.headingMd } ${ utilStyles.padding1px }` } >
        <h2 className={ utilStyles.headingLg }>Blog</h2>
        <ul className={ utilStyles.list }>
          { allPostsData.map(({ id, title, date }) => (
            <li key={ id } className={ utilStyles.listItem }>
              <Link href={ `/posts/${ id }` }>{ title }</Link>
              <div>
                <small className={ utilStyles.lightText }>
                  <Date dateString={ date } />
                </small>
              </div>
            </li>
          )) }
        </ul>
      </section>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const allPostsData = getSortedPostsData()

  return {
    props: {
      allPostsData
    }
  }
}
