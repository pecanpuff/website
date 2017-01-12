/**
 * Created by svadmin on 12/28/2016.
 */


$(document).ready(function(){
    $('#addButton').click(function () {
	    proUtils = new ProUtils();
        proUtils.addProduct("abc", "def");
	    editableTable();

    });
    $('#showTable').click(function () {
	    //proUtils = new ProUtils();
	    //var showAll = proUtils.getAllTheProducts();
	    /*var drawingTable = drawTable();
	    document.getElementById("main").innerHTML = drawingTable;*/
	    //var newTable =
	    editableTable();
	    //document.getElementById("main").innerHTML = newTable.html();
	    /*$('#main').show(function () {
		    editableTable();
	    })*/
    });
	/*function drawTable() {

	    console.log("Draw");
	    //create table
	    var table = ('<table>');
		//geting all product data from local storage
		var proUtils = new ProUtils();
		var showAll = proUtils.getAllTheProducts();

		for(var i =0;i<showAll.length;i++) {
		    var makeRows = "<tr ><td>" +showAll[i].id + "</td><td>" + showAll[i].name + "</td><td>" + showAll[i].label + "</td></tr>";
		   table += makeRows;
		   }
		table+= ("</table>");
		console.log("i am done with my table" + table);
			return table;
   }*/

	function editableTable (){
		$('#main').empty();
	    var newHTable = $('#main').append($('<table>'));
	    $('#main table').attr("id" ,"editableTable");
		//for Caption
		var caption = $('#editableTable').append($('<caption>'));
		$('#editableTable caption').attr("id" ,"tCaption");
		$('#editableTable caption').text("Editable Table using JQuery");
		
		//for Heading
		$('#editableTable').append('<thead>').children("thead")
							.append("<tr>").children("tr")
							.append("<th>Id</th><th>Name</th><th>Label</th><th>Save</th><th>Delete</th>");


		var proUtils = new ProUtils();
		var allProducts = proUtils.getAllTheProducts();

		for (var i = 0; i< allProducts.length; i++){

			$('#editableTable').append($('<tr>'));
			var lastTr ='#editableTable tr:last';
			$(lastTr).attr("id",allProducts[i].id);

			//td for id
			var lastTd ='#editableTable td:last';
			var tdId = allProducts[i].id+"_id";
			$(lastTr).append($('<td>'));
			tdId = allProducts[i].id+"_id";
			$(lastTd).attr("id",tdId);
			$(lastTd).text(allProducts[i].id);
			$(lastTd).click (function () {
				showProduct(this.id);
			})

			//input field for name
			$(lastTr).append($('<td>'));
			tdId = allProducts[i].id+"_name";
			$(lastTd).attr("id",tdId);
			//$(lastTd).text(allProducts[i].name);
			//$(lastTd).attr("contenteditable",true);

			$(lastTd).append($('<input>'));
			var InputId = allProducts[i].id+"_inputName";
			var lastInput = '#editableTable td:last input:last';
			$(lastInput).attr("id",InputId);
			$(lastInput).val(allProducts[i].name);
			$(lastTd).click (function () {
				showProduct(this.id);
			})

			//input field for label
			$(lastTr).append($('<td>'));
			tdId = allProducts[i].id+"_label";
			$(lastTd).attr("id",tdId);
			//$(lastTd).text(allProducts[i].label);

			$(lastTd).append($('<input>'));
			InputId = allProducts[i].id+"_inputLabel";
			lastInput = '#editableTable td:last input:last';
			$(lastInput).attr("id",InputId);
			$(lastInput).val(allProducts[i].label);
			$(lastTd).click (function () {
				showProduct(this.id);
			})

			//save button
			$(lastTr).append($('<td>'));
			tdId = allProducts[i].id+"_SaveTd";
			$(lastTd).attr("id",tdId);
			$(lastTd).append($('<button>'));
			var buttonId = allProducts[i].id+"_SaveButton";
			var lastButton = '#editableTable td:last button:last';
			$(lastButton).attr("id",buttonId);
			$(lastButton).text("Save");
			$(lastButton).click (function () {
				saveProduct(this.id);
			})

			//delete button
			$(lastTr).append($('<td>'));
			tdId = allProducts[i].id+"_DeleteTd";
			$( lastTd).attr("id",tdId);
			$(lastTd).append($('<button>'));
			buttonId = allProducts[i].id+"_DeleteButton";
			lastButton = '#editableTable td:last button:last';
			$(lastButton).attr("id",buttonId);
			$(lastButton).text("Delete");
			$(lastButton).click (function () {
				deleteProduct(this.id);
			})

		}

	}

	function showProduct(elementId) {
		// 1. Print the product id
		// 2. Get the product from the storage
		// 3. Print the name and label from the product you got in the step avove
		var theSplitArray = elementId.split("_");
		var productId = theSplitArray[0];
		console.log(productId);
		var proUtils = new ProUtils();
		var wholePrduct= proUtils.getProductWithId(productId);
		console.log("Id_ " + wholePrduct.id + " Name_ "+ wholePrduct.name +" label_ "+wholePrduct.label);
	}
	function saveProduct(elementId) {
		// 1. Print the product id
		var theSplitArray =elementId.split("_");
		var productId = theSplitArray[0];
		console.log(productId);
		//  get the modified value of name using jquery and the input field id
		//  print the modified name
		// Calculate the id of hte name...

		var inputNameId = "#"+productId + "_inputName";
		var inputLabelId = "#"+productId + "_inputLabel";
		console.log("Name: " + $(inputNameId).val());
		//  get the modified value of label using jquery and the input field id
		//  print the modified Label
		console.log("Label: " + $(inputLabelId).val());

		// create an object with attributes id, name and label
		// {id: "idstring", name: "the modified name", label = "modified label"}

		var theObject = {id:productId, name:$(inputNameId).val(), label:$(inputLabelId).val()};
		var proUtils = new ProUtils();
		proUtils.updateProduct(theObject);
		editableTable();

		// get the prodUtils
		// use prodUtils.save/update and sent the fucking object
		// refresh the table UI using newShowtable
	}
	function deleteProduct(elementId) {
		// 1. Print the product id
		// 2. Use the product Id and delete the product from the storage
		var theSplitArray = elementId.split("_");
		var productId  = theSplitArray[0];
		console.log(productId);
		var proUtils = new ProUtils();
		proUtils.deleteProductWithId(productId);
		editableTable();


	}
});
