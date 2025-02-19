

function PageTitles({current, setPage}) {
    return (<div id="navBar">
                <h3 className="navItem" id={current == 0 ? "true" : "false"} onClick={() => setPage(0)}>Home</h3>
                <h3 className="navItem" id={current == 1 ? "true" : "false"} onClick={() => setPage(1)}>Software Development</h3>
                <h3 className="navItem" id={current == 2 ? "true" : "false"} onClick={() => setPage(2)}>Game Development</h3>
                <h3 className="navItem" id={current == 3 ? "true" : "false"} onClick={() => setPage(3)}>Art</h3>
            </div>
    )
}

export default PageTitles