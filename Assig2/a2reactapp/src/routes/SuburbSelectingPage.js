import SuburbDropdown from '../components/SuburbDropdown';

export default function SuburbSelectingPage() {
    return (
        <>
            <div className="bg-white justify-content-center rounded border border-secondary-subtle p-3">
                <h2 className="fw-bold">Welcome!</h2>
                <p>Welcome to the SAPOL's MPDC location search tool, powered by a range of advanced filters that allow you to find the best and the latest locations to install mobile cameras!</p>
                <p>First thing first, let's start by choosing a suburb below:</p>
                <form method="post" action="/SuburbSelectingPage" className="d-flex justify-content-center align-middle gap-3">
                    <SuburbDropdown />
                    <Link to="/Dashboard" className="btn btn-primary">Start searching</Link>
                </form>
            </div>
        </>
    )
}