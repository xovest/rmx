import { Link, Links, LiveReload, Meta, Outlet } from "remix";
import globalStylesUrl from '~/styles/global.css'

export const links = () => [{rel: 'stylesheet', href: globalStylesUrl}]

export const meta = () => {
  const description = 'Smooth blg with rmx'
  const keywords = 'rmx, rct, js'

  return {
    description,
    keywords,
  }
}

export default function App() {
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  )
}

function Document({ children, title }) {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        <title>{title ? title : 'Rmx Blg'}</title>
      </head>
      <body>
        {children}
        {process.env.NODE_ENV === 'development' ? <LiveReload /> : null}
      </body>
    </html>
  )
}

function Layout({ children}) {
  return (
    <>
      <nav className="navbar">
        <Link to='/' className="logo">
          Rmx
        </Link>

        <ul className="nav">
          <li>
            <Link to='/posts'>Posts</Link>
          </li>
        </ul>
      </nav>

      <div className="container">
        {children}
      </div>
    </>
  )
}

export function ErrorBoundary({ error }) {
  console.log(error);
  return (
    <Document>
      <Layout>
        <h1>Error bruh</h1>
        <p>{error.message}</p>
      </Layout>
    </Document>
  )
}