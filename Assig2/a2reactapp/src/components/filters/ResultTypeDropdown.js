export default function ResultTypeDropdown() {
    return (
        <>
            <select name="resultType" className="form-control border border-secondary-subtle shadow-sm" required>
                <option value="">Choose a result type...</option>
                <option value="expiationList">Relevant offences</option>
                <option value="expiationStats">Expiation stats</option>
            </select>
        </>
    )
}