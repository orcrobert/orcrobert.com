import Layout from "../components/Layout"
import Project from "../components/Project"

const Projects = () =>{
    return (
        <div>
            <h1 className="font-bold text-3xl tracking-tight antialiased
            underline decoration-dashed underline-offset-4">Projects</h1>
            <div className="grid grid-cols-2 pt-10 gap-5">
                <Project title={"CodeSnipz"} />
                <Project title={"CubeSolver"} />
                <Project title={"Alabala"} />
                <Project title={"MamicutaTa"} />
            </div>
        </div>
    )
}
export default Projects