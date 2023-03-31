const Footer = () => {
    return ( 
        <footer className="py-2 text-center text-zinc-300 dark:text-zinc-700">
            <span className="antialiased tracking-tight text-zinc-900 dark:text-zinc-100">Orban Robert</span> &copy; {new Date().getFullYear()}
        </footer>
    )
}
 
export default Footer;