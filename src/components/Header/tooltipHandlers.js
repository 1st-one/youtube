export const focus = e => {
    if (!e.target.dataset.tooltip) return;

    let anchorEl = e.target.closest('[data-tooltip]');
    let header = e.target.closest('header');

    let coords1 = anchorEl.getBoundingClientRect();
    let coords2 = header.getBoundingClientRect();
    
    let tip = document.createElement('div');
    tip.classList.add('tip')
   
    tip.innerText = e.target.dataset.tooltip;
    document.body.append(tip);

    tip.style.top = coords2.top + coords2.height + 'px';
    tip.style.left = coords1.left + coords1.width / 2 - tip.offsetWidth / 2 + 'px';
};

export const remover = (e) => {
    if (!e.target.closest('[data-tooltip]')) return;
    let elems = document.querySelectorAll('.tip');
    for (let elem of elems) {
        elem.remove()
    }

    console.log(1);

}