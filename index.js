var mousePos = [];
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
document.onmousemove = (event) => {
  //   console.log(mousePos);
  if (event.pageX == null && event.clientX != null) {
    eventDoc = (event.target && event.target.ownerDocument) || document;
    doc = eventDoc.documentElement;
    body = eventDoc.body;

    event.pageX =
      event.clientX +
      ((doc && doc.scrollLeft) || (body && body.scrollLeft) || 0) -
      ((doc && doc.clientLeft) || (body && body.clientLeft) || 0);
    event.pageY =
      event.clientY +
      ((doc && doc.scrollTop) || (body && body.scrollTop) || 0) -
      ((doc && doc.clientTop) || (body && body.clientTop) || 0);
  }
  if (mousePos.length > 20) {
    mousePos.shift();
  }

  mousePos.push({
    x: event.pageX,
    y: event.pageY,
  });

  gsap.to(".star", {
    x: (index) => {
      return (
        mousePos[(index + 1) * 4 - 1]?.x + generateRandomNumber(-20, 20) ?? -300
      );
    },
    y: (index) =>
      mousePos[(index + 1) * 4 - 1]?.y + generateRandomNumber(-20, 20) ?? -300,
  });
};
