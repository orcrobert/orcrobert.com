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
                <Project title={"WBlock 🗝️"}
                    image={"https://i.imgur.com/CTHeTae.png"}
                    description={"Script that blocks access to unwanted websites."}
                    name={"wblock"}
                    link={"https://github.com/orcrobert/wblock"}
                />
                <Project title={"Gomoku 🎲"}
                    image={"https://github.com/orcrobert/gomoku/raw/main/gomokuwindow.png"}
                    description={"Gomoku game, with AI opponent."}
                    name={"gomoku"}
                    link={"https://github.com/orcrobert/gomoku"}
                />
                <Project title={"This Website 🚀"} image={"https://i.imgur.com/qpn5xXh.png"}
                    description={"My minimalistic and modern corner of the internet."}
                    name={"pwebsite"} 
                    link={"https://github.com/CyberNinjaH/portifolio-website"}/>
                <Project title={"Tic-Tac-Toe ⚔️"} image={"https://i.imgur.com/yABFvDA.png"} 
                    name={"xo"}
                    description={"A simple CLI game of X and 0."}
                    link={"https://github.com/CyberNinjaH/tic-tac-toe"}/>
                <Project title={"Keylogger 👾"} image={"https://i.imgur.com/qbqBmiV.png"} 
                    name={"keylog"}
                    description={"Keylogger that sends you email reports of what the other person is typing!"}
                    link={"https://github.com/CyberNinjaH/keylogger"}/>
                <Project title={"Snake Game 🐍"} image={"https://i.imgur.com/JQkDrLn.png"} 
                    name={"snake"}
                    description={"The classic snake game written in python."}
                    link={"https://github.com/CyberNinjaH/snake-game"}/>
                
            </div>
        </div>
    )
}
export default Projects