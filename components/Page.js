import Layout from './Layout'
import Header from './Header'
import Main from './Main'

export default ({ children }) => (
  <Layout>
    <Header />
    <Main>
      { children }
    </Main>
  </Layout>
)
