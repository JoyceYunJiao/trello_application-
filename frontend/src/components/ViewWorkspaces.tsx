
function ViewWorkspaces(props:any) {
    return (
        <div>
            {
                props.workspaces.map((workspace:any) => {
                    return (
                        <div>
                            <h2>{workspace.title}</h2>
                            <p>{workspace.description}</p>
                        </div>
                    );
                })
            }
        </div>
    )
}

export default ViewWorkspaces;