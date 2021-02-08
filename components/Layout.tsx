import Head from 'next/head'

const Layout = ({ children }: { children: JSX.Element }) => (
    <>
        <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="flex justify-center">
            <div className="sxl:w-277.5">{children}</div>
        </main>
    </>
)

export default Layout
