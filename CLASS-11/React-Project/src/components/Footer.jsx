function Footer(){
    const links = ["Privacy", "Terms"]
    const myName = "Mubassir"
    
    return (
        <section className="flex mx-auto bg-red-500 text-white p-5 flex items-center justify-between">
        <h2>Logo</h2>
        <div>
            <h3>Footer Links</h3>
            <a>Home</a>
            <a>{myName}</a>
            <a>Product</a>
        </div>
        <div>
            <h3>Footer Links</h3>
            {links.map((link,index) => (
                <a key={index}>{link}</a>
            ))}
        </div>
        </section>
    )
}

export default Footer;