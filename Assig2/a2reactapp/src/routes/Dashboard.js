function Dashboard() {
    return (
        <div className="container mt-4 mb-4">
            <div className="d-flex justify-content-center align-items-center">
                <select id="suburbList" className="form-control border border-secondary-subtle shadow-sm" style={{ width: "25%" }}>
                    <option value="" selected>All Suburbs...</option>
                </select>
            </div>
        </div>
    );
}

export default Dashboard;