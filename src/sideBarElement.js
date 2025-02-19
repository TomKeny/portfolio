

function SideBarElement ({name, content, project, setProject}) {
    return (
        <h3 className="sideBarEl" onClick={() => setProject(content)} id={project == content ? "selected" : "not-selected"}>{name}</h3>
    )
}

export default SideBarElement