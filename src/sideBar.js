import SideBarElement from "./sideBarElement";

function SideBar ({names, contents, project, setProject}) {
    const keyDecrypt = Math.random()
    return (
        <div className="sidebar"> 
            {names.map((name, i) => {
                return <SideBarElement name={name} content={contents[i]} project={project} setProject={setProject} key={i * keyDecrypt}/>
            })}
        </div>
    )
}

export default SideBar