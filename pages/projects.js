import Layout from "../components/Layout"
import Project from "../components/Project"

const Projects = () =>{
    return (
        <div>
            <h1 className="font-bold text-3xl tracking-tight antialiased
            underline decoration-dashed underline-offset-4">Projects</h1>
            <div className="grid grid-cols-1 pt-10 gap-5">
                <Project title={"Crypto Tracker 💎"} 
                    image={"https://i.imgur.com/aDoLptP.png"}
                    description={"An app to track digital coins prices build using Binance API."}
                    name={"crypto"}
                    link={"https://github.com/CyberNinjaH/crypto-tracker"}
                 />
                <Project title={"This Website 🚀"} image={"https://i.imgur.com/qpn5xXh.png"}
                    description={"My minimalistic and modern corner of the internet."}
                    name={"pwebsite"} />
            </div>
        </div>
    )
}
export default Projects