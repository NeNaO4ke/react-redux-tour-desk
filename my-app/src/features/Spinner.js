export const Spinner = () => {
    return (
        <div className="w-100 d-flex justify-content-center">
            <div className="spinner-border" style={{height: '200px', width: '200px'}} role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}
