function mouseClickHandler()
	{
	var eventX = event.clientX;
	var eventY = event.clientY - 57; // 57 = TOOLBAR HEIGHT

	// ADDING THE SCROLLING VALUES (IF ANY)
	var left = window.scrollX;
	var top = window.scrollY;
	eventX = eventX + left;
	eventY = eventY + top;

	// CHECKING WHICH TOOL IS BEEN USED
	if (selectedTool==SELECTED_TOOL_EYE1)
		{
		// CHECKING IF ALL THE DATA POINTS FOR THE EYE 1 ARE SELECTED.
		// IF SO, IT MEANS THAT THE USER WANTS TO SELECT ANOTHER DATA POINTS.
		// IN THAT CASE, THE EYE 1 DATA POINTS ARE DELETED.
		if(eye1_X1!=null && eye1_X2!=null)
			{
			eye1_X1 = null;
			eye1_Y1 = null;
			eye1_X2 = null;
			eye1_Y2 = null;
			}

		// CHECKING IF THE FIRST DATA POINT FOR THE EYE 1 IS EMPTY,
		// IF SO, SETS THE X AND Y VALUES IN THE FIRST DATA POINT.
		if (eye1_X1==null)
			{
			eye1_X1 = eventX;
			eye1_Y1 = eventY;
			}

		// CHECKING IF THE SECOND DATA POINT FOR THE EYE 1 IS EMPTY,
		// IF SO, SETS THE X AND Y VALUES IN THE SECOND DATA POINT.
		else if(eye1_X2==null)
			{
			// SETTING THE SELECTION
			eye1_X2 = eventX;
			eye1_Y2 = eventY;

			// DRAWING THE SELECTION
			drawEllipse(eye1_X1,eye1_Y1,eye1_X2,eye1_Y2,STRING_EYE);

			// CLEARING BUTTON SELECTION AND MOUSE CURSOR TYPE
			clearButtonsSelection();
			selectedTool = null;
			document.getElementById("myCanvas").style.cursor = "default";
			}
		}
	else if (selectedTool==SELECTED_TOOL_EYE2)
		{
		// CHECKING IF ALL THE DATA POINTS FOR THE EYE 2 ARE SELECTED.
		// IF SO, IT MEANS THAT THE USER WANTS TO SELECT ANOTHER DATA POINTS.
		// IN THAT CASE, THE EYE 2 DATA POINTS ARE DELETED.
		if(eye2_X1!=null && eye2_X2!=null)
			{
			eye2_X1 = null;
			eye2_Y1 = null;
			eye2_X2 = null;
			eye2_Y2 = null;
			}

		// CHECKING IF THE FIRST DATA POINT FOR THE EYE 2 IS EMPTY,
		// IF SO, SETS THE X AND Y VALUES IN THE FIRST DATA POINT.
		if (eye2_X1==null)
			{
			eye2_X1 = eventX;
			eye2_Y1 = eventY;
			}

		// CHECKING IF THE SECOND DATA POINT FOR THE EYE 2 IS EMPTY,
		// IF SO, SETS THE X AND Y VALUES IN THE SECOND DATA POINT.
		else if(eye2_X2==null)
			{
			// SETTING THE SELECTION
			eye2_X2 = eventX;
			eye2_Y2 = eventY;

			// DRAWING THE SELECTION
			drawEllipse(eye2_X1,eye2_Y1,eye2_X2,eye2_Y2,STRING_EYE);

			// CLEARING BUTTON SELECTION AND MOUSE CURSOR TYPE
			clearButtonsSelection();
			selectedTool = null;
			document.getElementById("myCanvas").style.cursor = "default";
			}
		}
	else if (selectedTool==SELECTED_TOOL_MOUTH)
		{
		// CHECKING IF ALL THE DATA POINTS FOR THE MOUTH ARE SELECTED.
		// IF SO, IT MEANS THAT THE USER WANTS TO SELECT ANOTHER DATA POINTS.
		// IN THAT CASE, THE MOUTH DATA POINTS ARE DELETED.
		if(mouth_X1!=null && mouth_X2!=null)
			{
			mouth_X1 = null;
			mouth_Y1 = null;
			mouth_X2 = null;
			mouth_Y2 = null;
			}

		// CHECKING IF THE FIRST DATA POINT FOR THE MOUTH IS EMPTY,
		// IF SO, SETS THE X AND Y VALUES IN THE FIRST DATA POINT.
		if (mouth_X1==null)
			{
			mouth_X1 = eventX;
			mouth_Y1 = eventY;
			}

		// CHECKING IF THE SECOND DATA POINT FOR THE MOUTH IS EMPTY,
		// IF SO, SETS THE X AND Y VALUES IN THE SECOND DATA POINT.
		else if(mouth_X2==null)
			{
			// SETTING THE SELECTION
			mouth_X2 = eventX;
			mouth_Y2 = eventY;

			// DRAWING THE SELECTION
			drawEllipse(mouth_X1,mouth_Y1,mouth_X2,mouth_Y2,STRING_MOUTH);

			// CLEARING BUTTON SELECTION AND MOUSE CURSOR TYPE
			clearButtonsSelection();
			selectedTool = null;
			document.getElementById("myCanvas").style.cursor = "default";
			}
		}
	}

function mouseMoveHandler()
	{
	var eventX = event.clientX;
	var eventY = event.clientY - 57; // 57 = TOOLBAR HEIGHT

	// ADDING THE SCROLLING VALUES (IF ANY)
	var left = window.scrollX;
	var top = window.scrollY;
	eventX = eventX + left;
	eventY = eventY + top;

	if (selectedTool!=null)
		{
		// SETTING THE CURSOR TYPE FOR A PRECISION TASK
		document.getElementById("myCanvas").style.cursor = "crosshair";

		// CHECKING WHICH TOOL IS BEEN USED
		if (selectedTool==SELECTED_TOOL_EYE1)
			{
			// CHECKING IF THE FIRST DATA POINT FOR THE EYE 1 IS EMPTY
			if (eye1_X1!=null)
				{
				// IF THE FIRST DATA POINT EXISTS BUT THE SECOND DOES NOT, THE SELECTION WILL BE DRAWN
				if(eye1_X1!=null && eye1_X2==null)
					{
					// RELOADING THE IMAGE
					reloadImage(false);

					// DRAWING THE SELECTION
					drawEllipse(eye1_X1,eye1_Y1,eventX,eventY,STRING_EYE);
					}
				}
			}
		else if (selectedTool==SELECTED_TOOL_EYE2)
			{
			// CHECKING IF THE FIRST DATA POINT FOR THE EYE 2 IS EMPTY
			if (eye2_X1!=null)
				{
				// IF THE FIRST DATA POINT EXISTS BUT THE SECOND DOES NOT, THE SELECTION WILL BE DRAWN
				if(eye2_X1!=null && eye2_X2==null)
					{
					// RELOADING THE IMAGE
					reloadImage(false);

					// DRAWING THE SELECTION
					drawEllipse(eye2_X1,eye2_Y1,eventX,eventY,STRING_EYE);
					}
				}
			}
		else if (selectedTool==SELECTED_TOOL_MOUTH)
			{
			// CHECKING IF THE FIRST DATA POINT FOR THE MOUTH IS EMPTY
			if (mouth_X1!=null)
				{
				// IF THE FIRST DATA POINT EXISTS BUT THE SECOND DOES NOT, THE SELECTION WILL BE DRAWN
				if(mouth_X1!=null && mouth_X2==null)
					{
					// RELOADING THE IMAGE
					reloadImage(false);

					// DRAWING THE SELECTION
					drawEllipse(mouth_X1,mouth_Y1,eventX,eventY,STRING_MOUTH);
					}
				}
			}
		}
		else
		{
		// SETTING THE DEFAULT CURSOR TYPE
		document.getElementById("myCanvas").style.cursor = "default";
		}
	}

function mouseOverHandler(event)
	{
	var eventX = event.clientX;
	var eventY = event.clientY - 57; // 57 = TOOLBAR HEIGHT

	// SETTING WHICH CURSOR TYPE WILL BE USED WHEN THE MOUSE IF OVER THE CANVAS
	if (selectedTool!=null)
		{
		document.getElementById("myCanvas").style.cursor = "crosshair";
		}
		else
		{
		document.getElementById("myCanvas").style.cursor = "default";
		}
	}

function setTool(mySelectedTool)
	{
	if (selectedImg==true)
		{
		// CLEARING ANY PREVIOUS ANIMATION (IF ANY)
		animateClear();

		// SETTING THE SELECTED TOOL
		selectedTool = mySelectedTool;

		// CLEARING THE BUTTONS SELECTION
		clearButtonsSelection();

		// SELECTING THE SELECTED TOOL
		if (mySelectedTool==SELECTED_TOOL_EYE1)
			{
			document.getElementById("buttonEye1").classList.add("menubar_button_eye1_selected");
			document.getElementById("buttonEye1").classList.remove("menubar_button_eye1_enabled");
			}
		else if (mySelectedTool==SELECTED_TOOL_EYE2)
			{
			document.getElementById("buttonEye2").classList.add("menubar_button_eye2_selected");
			document.getElementById("buttonEye2").classList.remove("menubar_button_eye2_enabled");
			}
		else if (mySelectedTool==SELECTED_TOOL_MOUTH)
			{
			document.getElementById("buttonMouth").classList.add("menubar_button_mouth_selected");
			document.getElementById("buttonMouth").classList.remove("menubar_button_mouth_enabled");
			}

		// RELOADING THE IMAGE
		reloadImage(false);
		}
	}

function clearButtonsSelection()
	{
	document.getElementById("buttonEye1").classList.add("menubar_button_eye1_enabled");
	document.getElementById("buttonEye1").classList.remove("menubar_button_eye1_selected");
	document.getElementById("buttonEye2").classList.add("menubar_button_eye2_enabled");
	document.getElementById("buttonEye2").classList.remove("menubar_button_eye2_selected");
	document.getElementById("buttonMouth").classList.add("menubar_button_mouth_enabled");
	document.getElementById("buttonMouth").classList.remove("menubar_button_mouth_selected");
	}

function animate()
	{
	var cctxResult = document.getElementById("myCanvasResult").getContext("2d");

	if (canvasAnimationFrame==1)
		{
		// DRAWING CHANGES ON FRAME 1
		if (eye1_X1!=null && eye1_X2!=null){cctxResult.drawImage(document.getElementById("myCanvas1").getContext("2d").canvas, eye1_X1, eye1_Y1, eye1_width, eye1_height)}
		if (eye2_X1!=null && eye2_X2!=null){cctxResult.drawImage(document.getElementById("myCanvas5").getContext("2d").canvas, eye2_X1, eye2_Y1, eye2_width, eye2_height)}
		if (mouth_X1!=null && mouth_X2!=null){cctxResult.drawImage(document.getElementById("myCanvas9").getContext("2d").canvas, mouth_X1, mouth_Y1, mouth_width, mouth_height)}
		canvasAnimationFrame = 2;
		}
	else if (canvasAnimationFrame==2)
		{
		// DRAWING CHANGES ON FRAME 2
		if (eye1_X1!=null && eye1_X2!=null){cctxResult.drawImage(document.getElementById("myCanvas2").getContext("2d").canvas, eye1_X1, eye1_Y1, eye1_width, eye1_height)}
		if (eye2_X1!=null && eye2_X2!=null){cctxResult.drawImage(document.getElementById("myCanvas6").getContext("2d").canvas, eye2_X1, eye2_Y1, eye2_width, eye2_height)}
		if (mouth_X1!=null && mouth_X2!=null){cctxResult.drawImage(document.getElementById("myCanvas10").getContext("2d").canvas, mouth_X1, mouth_Y1, mouth_width, mouth_height)}
		canvasAnimationFrame = 3;
		}
	else if (canvasAnimationFrame==3)
		{
		// DRAWING CHANGES ON FRAME 3
		if (eye1_X1!=null && eye1_X2!=null){cctxResult.drawImage(document.getElementById("myCanvas3").getContext("2d").canvas, eye1_X1, eye1_Y1, eye1_width, eye1_height)}
		if (eye2_X1!=null && eye2_X2!=null){cctxResult.drawImage(document.getElementById("myCanvas7").getContext("2d").canvas, eye2_X1, eye2_Y1, eye2_width, eye2_height)}
		if (mouth_X1!=null && mouth_X2!=null){cctxResult.drawImage(document.getElementById("myCanvas11").getContext("2d").canvas, mouth_X1, mouth_Y1, mouth_width, mouth_height)}
		canvasAnimationFrame = 4;
		}
	else if (canvasAnimationFrame==4)
		{
		// DRAWING CHANGES ON FRAME 4
		if (eye1_X1!=null && eye1_X2!=null){cctxResult.drawImage(document.getElementById("myCanvas4").getContext("2d").canvas, eye1_X1, eye1_Y1, eye1_width, eye1_height)}
		if (eye2_X1!=null && eye2_X2!=null){cctxResult.drawImage(document.getElementById("myCanvas8").getContext("2d").canvas, eye2_X1, eye2_Y1, eye2_width, eye2_height)}
		if (mouth_X1!=null && mouth_X2!=null){cctxResult.drawImage(document.getElementById("myCanvas12").getContext("2d").canvas, mouth_X1, mouth_Y1, mouth_width, mouth_height)}
		canvasAnimationFrame = 5;
		}
	else if (canvasAnimationFrame==5)
		{
		// DRAWING CHANGES ON FRAME 5
		if (eye1_X1!=null && eye1_X2!=null){cctxResult.drawImage(document.getElementById("myCanvas3").getContext("2d").canvas, eye1_X1, eye1_Y1, eye1_width, eye1_height)}
		if (eye2_X1!=null && eye2_X2!=null){cctxResult.drawImage(document.getElementById("myCanvas7").getContext("2d").canvas, eye2_X1, eye2_Y1, eye2_width, eye2_height)}
		if (mouth_X1!=null && mouth_X2!=null){cctxResult.drawImage(document.getElementById("myCanvas11").getContext("2d").canvas, mouth_X1, mouth_Y1, mouth_width, mouth_height)}
		canvasAnimationFrame = 6;
		}
	else if (canvasAnimationFrame==6)
		{
		// DRAWING CHANGES ON FRAME 6
		if (eye1_X1!=null && eye1_X2!=null){cctxResult.drawImage(document.getElementById("myCanvas2").getContext("2d").canvas, eye1_X1, eye1_Y1, eye1_width, eye1_height)}
		if (eye2_X1!=null && eye2_X2!=null){cctxResult.drawImage(document.getElementById("myCanvas6").getContext("2d").canvas, eye2_X1, eye2_Y1, eye2_width, eye2_height)}
		if (mouth_X1!=null && mouth_X2!=null){cctxResult.drawImage(document.getElementById("myCanvas10").getContext("2d").canvas, mouth_X1, mouth_Y1, mouth_width, mouth_height)}
		canvasAnimationFrame = 1;
		}
	}

function animateClear()
	{
	// CLEARING ANY PREVIOUS ANIMATION (IF ANY)
	try
		{
		clearInterval(canvasAnimation);
		}
		catch(err)
		{
		}

	// CLEARING THE FRAME INDEX FOR THE ANIMATION
	canvasAnimationFrame = 1;

	// CLEARING CANVAS
	document.getElementById("myCanvasResult").getContext("2d").clearRect(0, 0, document.getElementById("myCanvasResult").width, document.getElementById("myCanvasResult").height);
	document.getElementById("myCanvasResult").width = 1;
	document.getElementById("myCanvasResult").height = 1;
	}

function loadImage(myImageFile)
	{
	// GETTING THE CONTEXT
	canvasContext = document.getElementById("myCanvas").getContext("2d");

	// LOADING THE IMAGE
	myImage.src = myImageFile;
	}

function reloadImage(exportingProcess)
	{
	// GETTING THE WINDOW SIZE
	var w = window, d = document, e = d.documentElement, g = d.getElementsByTagName("body")[0], x = w.innerWidth || e.clientWidth || g.clientWidth, y = w.innerHeight|| e.clientHeight|| g.clientHeight;

	// GETTING THE IMAGE SIZE
	var height = myImage.height;
	var width = myImage.width;

	if (selectedTAL==false)
		{
		// GETTING THE MAX IMAGE SIZE POSSIBLE - 500PX MAX POSSIBLE BECAUSE OF PERFORMANCE ISSUES
		var maxHeight = 550 - 57; // 57 = TOOLBAR HEIGHT
		var ratio = null;

		// RESIZING THE IMAGE IF THE HEIGHT IS LARGER THAN 500PX
		if (height>maxHeight)
			{
			ratio = maxHeight / height;
			width = width * ratio;
			height = height * ratio;
			}
		}

	// RESIZING THE CANVAS CONTAINER
	document.getElementById("myCanvas").width = width;
	document.getElementById("myCanvas").height = height;
	document.getElementById("myCanvasRAW").width = width;
	document.getElementById("myCanvasRAW").height = height;

	// DRAWING THE IMAGE
	document.getElementById("myCanvas").getContext("2d").drawImage(myImage, 0, 0, width, height);
	document.getElementById("myCanvasRAW").getContext("2d").drawImage(myImage, 0, 0, width, height);

	// ONLY WILL DRAW THE SELECTION IF THE EXPORTING PROCESS IS NOT RUNNING
	if (exportingProcess==false)
		{
		// DRAWING THE EYE 1 SELECTION (IF ANY)
		if (eye1_X2!=null)
			{
			drawEllipse(eye1_X1,eye1_Y1,eye1_X2,eye1_Y2,STRING_EYE);
			}

		// DRAWING THE EYE 2 SELECTION (IF ANY)
		if (eye2_X2!=null)
			{
			drawEllipse(eye2_X1,eye2_Y1,eye2_X2,eye2_Y2,STRING_EYE);
			}

		// DRAWING THE MOUTH SELECTION (IF ANY)
		if (mouth_X2!=null)
			{
			drawEllipse(mouth_X1,mouth_Y1,mouth_X2,mouth_Y2,STRING_MOUTH);
			}
		}
	}

function drawEllipse(x1, y1, x2, y2, labelText)
	{
	var radiusX = (x2 - x1) * 0.5;		// RADIUS FOR X BASED ON INPUT
	var radiusY = (y2 - y1) * 0.5;		// RADIUS FOR Y BASED ON INPUT
	var centerX = x1 + radiusX;			// CALC CENTER
	var centerY = y1 + radiusY;			// CALC CENTER
	var step = 0.01;					// RESOLUTION OF ELLIPSE
	var a = step;						// COUNTER
	var pi2 = Math.PI * 2 - step;		// END ANGLE

	/// START A NEW PATH
	canvasContext.beginPath();

	/// SET START POINT AT ANGLE 0
	canvasContext.moveTo(centerX + radiusX * Math.cos(0),centerY + radiusY * Math.sin(0));

	/// CREATE THE ELLIPSE
	for(; a < pi2; a += step)
		{
		canvasContext.lineTo(centerX + radiusX * Math.cos(a),centerY + radiusY * Math.sin(a));
		}

	/// CLOSE IT AND STROKE IT FOR DEMO
	canvasContext.closePath();
	canvasContext.strokeStyle = "#7CFC00";
	canvasContext.stroke();

	// MIDDLE LINE DRAWING
	canvasContext.beginPath();
	canvasContext.moveTo(x1, y2 - ((y2-y1) * 0.5));
	canvasContext.lineTo(x2, y2 - ((y2-y1) * 0.5));
	canvasContext.strokeStyle = "#7CFC00";
	canvasContext.stroke();

	// DRAWING LABEL
	canvasContext.font = "12px Arial";
	canvasContext.fillStyle = "#7CFC00";
	canvasContext.fillText(labelText, x2 - ((x2-x1) *0.5) - (canvasContext.measureText(labelText).width / 2),y2 + 15);
	}

function clipImageForSelection(tempCanvasContext,tempEye_width,tempEye_height)
	{
	var x1 = 0;
	var x2 = tempEye_width;
	var y1 = 0;
	var y2 = tempEye_height;

	tempCanvasContext.save();

	var radiusX = (x2 - x1) * 0.5;		// RADIUS FOR X BASED ON INPUT
	var radiusY = (y2 - y1) * 0.5;		// RADIUS FOR Y BASED ON INPUT
	var centerX = x1 + radiusX;			// CALC CENTER
	var centerY = y1 + radiusY;			// CALC CENTER
	var step = 0.01;					// RESOLUTION OF ELLIPSE
	var a = step;						// COUNTER
	var pi2 = Math.PI * 2 - step;		// END ANGLE

	// START A NEW PATH
	tempCanvasContext.beginPath();

	// SET START POINT AT ANGLE 0
	tempCanvasContext.moveTo(centerX + radiusX * Math.cos(0),centerY + radiusY * Math.sin(0));

	// CREATE THE ELLIPSE
	for(; a < pi2; a += step)
		{
		tempCanvasContext.lineTo(centerX + radiusX * Math.cos(a),centerY + radiusY * Math.sin(a));
		}
	tempCanvasContext.closePath();

	// CLIPPING
	tempCanvasContext.clip();
	}

function getEyeScreenshot(myTempContext, myTempEye_X1, myTempEye_Y1, myTempEye_width, myTempEye_height, resizing)
	{
	if (myTempEye_X1!=null)
		{
		// CLIPPING THE IMAGE TO THE EYE SHAPE
		clipImageForSelection(myTempContext, myTempEye_width, myTempEye_height);

		// DRAWING EYE INTO THE CANVAS
		myTempContext.drawImage(document.getElementById("myCanvasRAW").getContext("2d").canvas, myTempEye_X1, myTempEye_Y1, myTempEye_width, myTempEye_height, 0, 0, myTempEye_width, myTempEye_height);

		// DRAWING EYE BEEN CLOSED
		for (var i = 0; i < resizing; i++)
			{
			myTempContext.drawImage(document.getElementById("myCanvasRAW").getContext("2d").canvas, myTempEye_X1, myTempEye_Y1, myTempEye_width, myTempEye_height, 0, i, myTempEye_width, myTempEye_height-(i+i));
			}
		}
	}

function getMouthScreenshot(myTempContext, myTempMouth_X1, myTempMouth_Y1, myTempMouth_width, myTempMouth_height, resizing)
	{
	if (myTempMouth_X1!=null)
		{
		// CLIPPING THE IMAGE TO THE MOUTH SHAPE
		clipImageForSelection(myTempContext, myTempMouth_width, myTempMouth_height);

		// DRAWING MOUTH INTO THE CANVAS
		myTempContext.drawImage(document.getElementById("myCanvasRAW").getContext("2d").canvas, myTempMouth_X1, myTempMouth_Y1, myTempMouth_width / 4, myTempMouth_height, 0, 0, myTempMouth_width / 4, myTempMouth_height);

		// DRAWING EYE BEEN CLOSED
		for (var i = 0; i < resizing; i++)
			{
			myTempContext.drawImage(document.getElementById("myCanvasRAW").getContext("2d").canvas, myTempMouth_X1, myTempMouth_Y1, myTempMouth_width / 4, myTempMouth_height, 0, i, myTempMouth_width / 4, myTempMouth_height-(i+i));
			}
		}
	}

function generateDataForAnimation()
	{
	// ------------------------------------------------------------------------------------------------
	// INITIAL PROCESS - SETTING THE BASE DATA
	// ------------------------------------------------------------------------------------------------

	// SETTING THE INITIAL FRAME FOR THE ANIMATION
	canvasAnimationFrame = 1;

	// ------------------------------------------------------------------------------------------------
	// PROCESS 1 - EYES - SETTING THE DATA
	// ------------------------------------------------------------------------------------------------

	// GETTING THE EYE 1 SIZE
	eye1_width = eye1_X2 - eye1_X1;
	eye1_height = eye1_Y2 - eye1_Y1;

	// GETTING THE EYE 2 SIZE
	eye2_width = eye2_X2 - eye2_X1;
	eye2_height = eye2_Y2 - eye2_Y1;

	// GETTING THE MOUTH SIZE
	mouth_width = mouth_X2 - mouth_X1;
	mouth_height = mouth_Y2 - mouth_Y1;

	// RESIZING THE EYE CANVAS
	document.getElementById("myCanvas1").width = eye1_width;
	document.getElementById("myCanvas1").height = eye1_height;
	document.getElementById("myCanvas2").width = eye1_width;
	document.getElementById("myCanvas2").height = eye1_height;
	document.getElementById("myCanvas3").width = eye1_width;
	document.getElementById("myCanvas3").height = eye1_height;
	document.getElementById("myCanvas4").width = eye1_width;
	document.getElementById("myCanvas4").height = eye1_height;
	document.getElementById("myCanvas5").width = eye2_width;
	document.getElementById("myCanvas5").height = eye2_height;
	document.getElementById("myCanvas6").width = eye2_width;
	document.getElementById("myCanvas6").height = eye2_height;
	document.getElementById("myCanvas7").width = eye2_width;
	document.getElementById("myCanvas7").height = eye2_height;
	document.getElementById("myCanvas8").width = eye2_width;
	document.getElementById("myCanvas8").height = eye2_height;
	document.getElementById("myCanvas9").width = mouth_width;
	document.getElementById("myCanvas9").height = mouth_height;
	document.getElementById("myCanvas10").width = mouth_width;
	document.getElementById("myCanvas10").height = mouth_height;
	document.getElementById("myCanvas11").width = mouth_width;
	document.getElementById("myCanvas11").height = mouth_height;
	document.getElementById("myCanvas12").width = mouth_width;
	document.getElementById("myCanvas12").height = mouth_height;
	document.getElementById("myCanvasGIF").width = document.getElementById("myCanvas").width;
	document.getElementById("myCanvasGIF").height = document.getElementById("myCanvas").height;
	document.getElementById("myCanvasResult").width = document.getElementById("myCanvas").width;
	document.getElementById("myCanvasResult").height = document.getElementById("myCanvas").height;

	// GETTING ALL THE CONTEXTS
	cctx1 = document.getElementById("myCanvas1").getContext("2d");
	cctx2 = document.getElementById("myCanvas2").getContext("2d");
	cctx3 = document.getElementById("myCanvas3").getContext("2d");
	cctx4 = document.getElementById("myCanvas4").getContext("2d");
	cctx5 = document.getElementById("myCanvas5").getContext("2d");
	cctx6 = document.getElementById("myCanvas6").getContext("2d");
	cctx7 = document.getElementById("myCanvas7").getContext("2d");
	cctx8 = document.getElementById("myCanvas8").getContext("2d");
	cctx9 = document.getElementById("myCanvas9").getContext("2d");
	cctx10 = document.getElementById("myCanvas10").getContext("2d");
	cctx11 = document.getElementById("myCanvas11").getContext("2d");
	cctx12 = document.getElementById("myCanvas12").getContext("2d");
	cctxGIF = document.getElementById("myCanvasGIF").getContext("2d");

	// ------------------------------------------------------------------------------------------------
	// PROCESS 2 - EYE 1 - TAKING 4 SCREENSHOTS OF THE EYE BEEN CLOSED
	// ------------------------------------------------------------------------------------------------

	getEyeScreenshot(cctx1, eye1_X1, eye1_Y1, eye1_width, eye1_height, 0);
	getEyeScreenshot(cctx2, eye1_X1, eye1_Y1, eye1_width, eye1_height, 2);
	getEyeScreenshot(cctx3, eye1_X1, eye1_Y1, eye1_width, eye1_height, 4);
	getEyeScreenshot(cctx4, eye1_X1, eye1_Y1, eye1_width, eye1_height, 6);

	// ------------------------------------------------------------------------------------------------
	// PROCESS 3 - EYE 2 - TAKING 4 SCREENSHOTS OF THE EYE BEEN CLOSED
	// ------------------------------------------------------------------------------------------------

	getEyeScreenshot(cctx5, eye2_X1, eye2_Y1, eye2_width, eye2_height, 0);
	getEyeScreenshot(cctx6, eye2_X1, eye2_Y1, eye2_width, eye2_height, 2);
	getEyeScreenshot(cctx7, eye2_X1, eye2_Y1, eye2_width, eye2_height, 4);
	getEyeScreenshot(cctx8, eye2_X1, eye2_Y1, eye2_width, eye2_height, 6);

	// ------------------------------------------------------------------------------------------------
	// PROCESS 5 - MOUTH - TAKING 4 SCREENSHOTS OF THE MOUTH SMILING
	// ------------------------------------------------------------------------------------------------

	/*
	getMouthScreenshot(cctx9, mouth_X1, mouth_Y1, mouth_width, mouth_height, 0);
	getMouthScreenshot(cctx10, mouth_X1, mouth_Y1, mouth_width, mouth_height, 2);
	getMouthScreenshot(cctx11, mouth_X1, mouth_Y1, mouth_width, mouth_height, 4);
	getMouthScreenshot(cctx12, mouth_X1, mouth_Y1, mouth_width, mouth_height, 6);
	*/
	}