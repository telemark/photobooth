import Layout from './Layout'
import Header from './Header'
import Main from './Main'

export default ({ username, children }) => (
  <Layout>
    <Header username={username} />
    <Main>
      { children }
    </Main>
  </Layout>
)
