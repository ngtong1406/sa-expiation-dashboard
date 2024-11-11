export default function TypeCodeRadio() {
    function clearChoice() {
        const choices = document.querySelectorAll('[name="typeCode"');

        choices.forEach(choice => {
            choice.checked = false;
        });

        document.querySelector('#clearChoice').style.display = 'none';
    }

    function revealButton() {
        const clearChoiceButton = document.querySelector('#clearChoice');

        if (clearChoiceButton.style.display === 'none') {
            document.querySelector('#clearChoice').style.display = 'block';
        }
    }

    return (
        <div id="typeCodeRadio" className="d-flex gap-3 bg-white rounded border border-secondary-subtle shadow-sm p-2 px-4">
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="typeCode" id="code1" value="F" onClick={revealButton} />
                <label className="form-check-label" htmlFor="code1">F</label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="typeCode" id="code2" value="I/section" onClick={revealButton} />
                <label className="form-check-label" htmlFor="code2">I/section</label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="typeCode" id="code3" value="M" onClick={revealButton} />
                <label className="form-check-label" htmlFor="code3">M</label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="typeCode" id="code4" value="Mid Block" onClick={revealButton} />
                <label className="form-check-label" htmlFor="code4">Mid Block</label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="typeCode" id="code5" value="P2P" onClick={revealButton} />
                <label className="form-check-label" htmlFor="code5">P2P</label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="typeCode" id="code6" value="PAC" onClick={revealButton} />
                <label className="form-check-label" htmlFor="code6">PAC</label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="typeCode" id="code7" value="Rail" onClick={revealButton} />
                <label className="form-check-label" htmlFor="code7">Rail</label>
            </div>
            <a id="clearChoice" onClick={clearChoice} className="link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover" href="#" style={{ display: 'none' }}>
                Clear choice
            </a>
        </div>
    )
}