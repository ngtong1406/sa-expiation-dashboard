export default function TypeCodeRadio() {
    return (
        <div id="typeCodeRadio" className="d-flex gap-3 bg-white rounded border border-secondary-subtle shadow-sm p-2 px-4">
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="typeCode" id="code1" value="F" />
                <label class="form-check-label" for="code1">F</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="typeCode" id="code2" value="I/section" />
                <label class="form-check-label" for="code2">I/section</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="typeCode" id="code3" value="M" />
                <label class="form-check-label" for="code3">M</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="typeCode" id="code4" value="Mid Block" />
                <label class="form-check-label" for="code4">Mid Block</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="typeCode" id="code5" value="P2P" />
                <label class="form-check-label" for="code5">P2P</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="typeCode" id="code6" value="PAC" />
                <label class="form-check-label" for="code6">PAC</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="typeCode" id="code7" value="Rail" />
                <label class="form-check-label" for="code7">Rail</label>
            </div>
        </div>
    )
}