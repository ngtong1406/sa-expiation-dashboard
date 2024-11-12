export default function ExpiationDatePicker() {
    return (
        <div className="d-flex justify-content-center align-items-bottom gap-3">
            <label htmlFor="startDate" className="form-label">From...</label>
            <input type="date" name="startDate" title="Date from..." className="form-control border border-secondary-subtle shadow-sm" />

            <label htmlFor="endDate" className="form-label">To...</label>
            <input type="date" name="endDate" title="Date to..." className="form-control border border-secondary-subtle shadow-sm" />
        </div>
    )
}