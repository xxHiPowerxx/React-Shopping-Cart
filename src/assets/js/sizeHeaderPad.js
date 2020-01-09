const $closest = (startingElem, targetClass) => {
  if (startingElem) {
    console.log("startingElem", startingElem);
    let thisTag = startingElem;
    while (!thisTag.className.includes(targetClass)) {
      // uppercase in HTML, lower in XML
      if (thisTag.tagName === "html") {
        break;
      }
      thisTag = thisTag.parentNode;
    }
    return thisTag;
  }
};
const sizeHeaderPad = (
  sizeHeaderPadTar,
  sizeHeaderPadParent,
  sizeHeaderPadRef
) => {
  if (sizeHeaderPadTar) {
    sizeHeaderPadParent =
      sizeHeaderPadParent ||
      $closest(sizeHeaderPadTar, "sizeHeaderPadParent") ||
      document.documentElement;
    sizeHeaderPadRef =
      sizeHeaderPadRef ||
      sizeHeaderPadParent.querySelectorAll(".sizeHeaderPadRef");
    // Only continue if we've found all three elements.

    if (sizeHeaderPadParent && sizeHeaderPadRef) {
      if (getComputedStyle(sizeHeaderPadRef).position === "fixed") {
        const sizeHeaderPadRefHeight = sizeHeaderPadRef.getBoundingClientRect()
          .height;
        sizeHeaderPadTar.style.paddingTop = sizeHeaderPadRefHeight + "px";
      }
    }
  }
};
export default sizeHeaderPad;
