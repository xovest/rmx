import { LiveReload, Outlet } from "remix";

export default function App() {
  return (
    <Document>
      <Outlet />
    </Document>
  )
}

function Document({ children, title }) {
  return (
    <html lang="en">
      <head>
        <title>{title ? title : 'Rmx Blg'}</title>
      </head>
      <body>
        {children}
        {process.env.NODE_ENV === 'development' ? <LiveReload /> : null}
      </body>
    </html>
  )
}