// Draggable utility: supports mouse and touch, avoids global handler overrides
function makeDraggable(target) {
    if (typeof target === 'string') target = document.getElementById(target);
    if (!target) return;

    target.style.position = target.style.position || 'absolute';
    target.style.touchAction = 'none';

    let startX = 0, startY = 0;
    let baseLeft = 0, baseTop = 0;

    function onPointerDown(e) {
        e.preventDefault();
        const p = e.touches ? e.touches[0] : e;
        startX = p.clientX;
        startY = p.clientY;
        baseLeft = target.offsetLeft;
        baseTop = target.offsetTop;

        document.addEventListener('mousemove', onPointerMove);
        document.addEventListener('mouseup', onPointerUp);
        document.addEventListener('touchmove', onPointerMove, {passive: false});
        document.addEventListener('touchend', onPointerUp);
    }

    function onPointerMove(e) {
        e.preventDefault();
        const p = e.touches ? e.touches[0] : e;
        const dx = p.clientX - startX;
        const dy = p.clientY - startY;
        target.style.left = (baseLeft + dx) + 'px';
        target.style.top = (baseTop + dy) + 'px';
    }

    function onPointerUp() {
        document.removeEventListener('mousemove', onPointerMove);
        document.removeEventListener('mouseup', onPointerUp);
        document.removeEventListener('touchmove', onPointerMove);
        document.removeEventListener('touchend', onPointerUp);
    }

    target.addEventListener('mousedown', onPointerDown);
    target.addEventListener('touchstart', onPointerDown, {passive: false});
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => makeDraggable('movingdiv'));
} else {
    makeDraggable('movingdiv');
}