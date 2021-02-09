!function() {
	function id(x) {
		return document.getElementById(x)
	}
	function q(x) {
		const c = document.querySelectorAll(x)
		if (c[1]) return c;
		return c[0]
	}
	HTMLElement.prototype.on = function(e, c, b) {
		e = e.split(" ")
		e.forEach(events=> {
			this.addEventListener(events, c, b)
		})
	}
	HTMLElement.prototype.off = function(event, callback) {
		e = e.split(" ")
		e.forEach(events=> {
			this.removeEventListener(events, callback)
		})
	}

	const editableBtn = q(".editor button[contenteditable]")
	const butttonStyle = editableBtn.style;
	/* Range Id */
	const cp = id("cp") // Color Picker for Background
	const bdr = id("bdr") //borderRadius
	const bdColor = id("_borderColor") // Border Color Picker
	const fs = id("_fs") // Font Size
	const fontColor = id("_fontColor") // Font Color
	const padddingX = id("_paddingX") // Padding X
	const padddingY = id("_paddingY") // Padding Y
	const bdWidth = id("bdWidthRange") // Border Width
	/* All select Element ID */
	const borderStyle = id("_borderStyle")
	const units = id("unit")

	/* All Text Id */
	const bgText = cp.previousElementSibling; // Color Text for Background
	const bdrText = bdr.previousElementSibling; // Color Text for Background
	const bdColorText = bdColor.previousElementSibling; // Border Color Text
	const bdWidthText = bdWidth.previousElementSibling; // Border width Text
	const fsText = fs.previousElementSibling; // Color Text for Background
	const fontColorText = fontColor.previousElementSibling; // Color Text for Background
	const padddingXText = padddingX.previousElementSibling; // Color Text for Background
	const padddingYText = padddingY.previousElementSibling; // Color Text for Background

	function unit() {
		return units.value
	}
	/* Input Text Function */
	function changeBg() {
		butttonStyle.background = this.value;
	}
	function changeFontSize() {
		butttonStyle.fontSize = this.value + unit();
	}
	function borderRadius() {
		butttonStyle.borderRadius = this.value + unit();
	}

	function _fontColor() {
		butttonStyle.color = this.value;
	}
	function _paddingY() {
		butttonStyle.paddingTop = this.value + unit();
		butttonStyle.paddingBottom = this.value + unit();
	}

	function _paddingX() {
		butttonStyle.paddingRight = this.value + unit();
		butttonStyle.paddingLeft = this.value + unit();
	}
	function _borderStyle() {
		butttonStyle.borderStyle = this.value;
	}
	function _borderColor() {
		butttonStyle.borderColor = this.value;
	}
	function _borderWidth() {
		butttonStyle.borderWidth = this.value + unit();
	}

	/* Input Range Function */
	function _bgText() {
		bgText.value = this.value;
		changeBg.apply(bgText);
	}
	function _bdrText() {
		bdrText.value = this.value;
		borderRadius.apply(bdrText);
	}
	function _fsText() {
		fsText.value = this.value;
		changeFontSize.apply(fsText);
	}
	function _fontColorText() {
		fontColorText.value = this.value;
		_fontColor.apply(fontColorText);
	}
	function _paddingYText() {
		padddingYText.value = this.value;
		_paddingY.apply(padddingYText);
	}
	function _paddingXText() {
		padddingXText.value = this.value;
		_paddingX.apply(padddingXText);
	}
	function _bdColorText() {
		bdColorText.value = this.value;
		_borderColor.apply(bdColor);
	}
	function _bdWidthText() {
		bdWidthText.value = this.value;
		_borderWidth.apply(bdWidth);
	}
	/* Select Element Event */
	borderStyle.on("change", _borderStyle)

	/* Input Range Event */
	padddingY.on("input", _paddingYText)
	padddingX.on("input", _paddingXText)
	fs.on("input", _fsText)
	bdr.on("input", _bdrText)
	bdWidth.on("input", _bdWidthText)

	/* Input Text Event */
	bgText.on("input", changeBg)
	bdrText.on("input", borderRadius)
	fsText.on("input", changeFontSize)
	fontColorText.on("input", _fontColor)
	padddingYText.on("input", _paddingY)
	padddingXText.on("input", _paddingX)
	bdColorText.on("input", _borderColor)
	bdWidthText.on("input", _borderWidth)

	/* Color Picker Events */
	fontColor.on("input", _fontColorText)
	cp.on("input", _bgText)
	bdColor.on("change", _bdColorText)

	/*Prevent From Scrolling */
	const allRanges = q("input[type=range");
	const oldOverflowValue = getComputedStyle(document.body)
	.getPropertyValue("overflow")
	allRanges.forEach(allRange=> {
		allRange.on("touchmove", function() {
			this.offsetParent.style.overflow = "hidden";
		});
		allRange.on("touchend", function() {
			this.offsetParent.style.overflow = oldOverflowValue;
		});
	});
}();