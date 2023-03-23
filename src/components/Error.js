
function Error ({characterFilter}) {
    return(
        <p characterFilter="error">{`Couldn't find characters that match with ${characterFilter}`}</p>
    )
}
export default Error;