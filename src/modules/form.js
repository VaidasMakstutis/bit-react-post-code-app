const form = () => {
    return ` <div class="form-group mb-2">
                <input type="text" class="form-control term" placeholder="Address">
             </div>
             <div class="form-group mx-sm-3 mb-2">
                <input type="text" class="form-control result" readonly>
             </div>
             <button type="submit" class="btn btn-primary mb-2">Ieskoti kodo</button>
             <button type="reset" class="btn btn-secondary mb-2 history">Paieskos istorija</button>
    `
}

export default form;