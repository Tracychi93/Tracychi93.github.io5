# Tracychi93.github.io5
<!DOCTYPE html>
<html lang="en">

	<head>
		<meta charset="UTF-8">
		<title>Fancify Shamcify</title>

		<!-- link to your script file here -->
	<style>
	#textInput {
      		width: 1300px;
      		height: 100px;
      		font-size: 16px;
      		margin-bottom: 10px;
    	}
   	 .button {
      		margin-right: 10px;
    	}
    	fieldset {
      		border: 2px solid #333;
      		padding: 10px;
      		margin-bottom: 20px;
    	}
	</style>
	</head>

	<body>
		<h1>Fancify my Text</h1>
		<fieldset>
		 <legend>Text</legend>
		 <textarea id="textArea" name="Input Your Text Here" rows="4" cols="30">
		 </textarea>
		</fieldset>
		<form>
		<fieldset>
		 <legend>Fancify</legend>
		 <div>
		 <button type="button" id="biggerButton">Bigger!</button><br>
		 <input type="radio" id="fancyShmancy" name="fancify" value="FancyShmancy" 			 onchange="applyStyles()">
		 <label for="fancyShmancy">FancyShmancy</label><br>
		 <input id="boringBetty" type="radio" name="fancify" value="BoringBetty" 			 onchange="removeStyles()">
		 <label for="boringBetty">BoringBetty</label><br>
		 </div>
		</fieldset>
		</form>
		<button type="button" id="mooButton">Moo</button>
		<script src="fancifymytext.js">
  		</script>
	</body>
</html>
