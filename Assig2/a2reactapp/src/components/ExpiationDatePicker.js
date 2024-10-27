export default function ExpiationDatePicker() {
    return (
        <div className="d-flex justify-content-center gap-3">
            <input type="date" name="startDate" title="Date from..." className="form-control border border-secondary shadow-sm" />
            <input type="date" name="endDate" title="To date..." className="form-control border border-secondary shadow-sm" />
        </div>
    )
}