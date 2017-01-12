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
	    editableTable();
    });

	function editableTable (){

		//emty the document
		var emtyDiv ="";
		document.getElementById("main").innerHTML = emtyDiv;

		//create a table
		var eTable = document.createElement("TABLE");
		eTable.setAttribute("id" ,"editableTable");
		document.getElementById("main").appendChild(eTable );

		//create the Caption
		caption = document.getElementById("editableTable").createCaption();
		eTable.appendChild(caption);
		var captionText = document.createTextNode("Editable Table using Javascript");
		caption.appendChild(captionText);
		document.getElementById("editableTable").appendChild(caption);
		caption.setAttribute("id","tCaption");

		//for Heading
		var thead = document.createElement("THEAD");
		var thRow = document.createElement("TR");
		document.getElementById("editableTable").appendChild(thead).appendChild(thRow);
		document.getElementsByTagName("TR");
		var cell1 = thRow.insertCell(0);
		var cell2 = thRow.insertCell(1);
		var cell3 = thRow.insertCell(2);
		var cell4 = thRow.insertCell(3);
		var cell5 = thRow.insertCell(4);
		cell1.innerHTML ="Id";
		cell2.innerHTML ="Name";
		cell3.innerHTML ="Label";
		cell4.innerHTML ="Save";
		cell5.innerHTML ="Delete";

		//for rows
		var proUtils = new ProUtils();
		var allProducts = proUtils.getAllTheProducts();
		var tbody = document.createElement("Tbody");
		document.getElementById("editableTable").appendChild(tbody);

		for (var i = 0; i< allProducts.length; i++){

			// /for row
			var tbRow = tbody.insertRow(0);
			tbRow.setAttribute("id",allProducts[i].id);

			//for td
			var tbCell1 = tbRow.insertCell(0);
			var tbCellId = allProducts[i].id;
			tbCell1.setAttribute("id",tbCellId+"_id");
			var idText = document.createTextNode(tbCellId);
			tbCell1.appendChild(idText);
			tbCell1.addEventListener("click",myShowIdFunction);

			var tbCell2 = tbRow.insertCell(1);
			tbCellId = allProducts[i].id;
			tbCell2.setAttribute("id",tbCellId+"_name");
			tbCell2.innerHTML =allProducts[i].name;
			tbCell2.contentEditable = true;
			tbCell2.addEventListener("click",myShowIdFunction);

			var tbCell3 = tbRow.insertCell(2);
			tbCell3.setAttribute("id",tbCellId+"_label");
			tbCell3.innerHTML =allProducts[i].label;
			tbCell3.contentEditable = true;
			tbCell3.addEventListener("click",myShowIdFunction);

			var tbCell4 = tbRow.insertCell(3);
			tbCell4.setAttribute("id",tbCellId+"_saveTd");
			var button1 = document.createElement("BUTTON");
			document.getElementById(tbCellId+"_saveTd").appendChild(button1);
			var bText = document.createTextNode("Save");
			button1.appendChild(bText);
			//document.getElementsByTagName("BUTTON")[0].setAttribute("id",tbCellId+"_saveButton");
			button1.setAttribute("id",tbCellId+"_saveButton");
			button1.addEventListener("click",mySaveFunction);

			var tbCell5 = tbRow.insertCell(4);
			tbCell5.setAttribute("id",tbCellId+"_deleteTd");
			var button2 = document.createElement("BUTTON");
			document.getElementById(tbCellId+"_deleteTd").appendChild(button2);
			bText = document.createTextNode("Delete");
			button2.appendChild(bText);
			//document.getElementsByTagName("BUTTON")[1].setAttribute("id",tbCellId+"_deleteButton");
			button2.setAttribute("id",tbCellId+"_deleteButton");
			button2.addEventListener("click",myDeleteFunction);

			//myShowIdFunction
			function myShowIdFunction() {
				showProduct(this.id);
			}
			//mySaveFunction
			function mySaveFunction() {
				saveProduct(this.id);
			}
			//myDeleteFunction
			function myDeleteFunction() {
				deleteProduct(this.id);
			}
		}

	}

	function showProduct(elementId) {
		// 1. Print the product id
		// 2. Get the product from the storage
		// 3. Print the name and label from the product you got in the step avove
		var theSplitArray = elementId.split("_");
		var productId = theSplitArray[0];
		//console.log(productId);
		var proUtils = new ProUtils();
		var wholePrduct= proUtils.getProductWithId(productId);
		//console.log("Id_ " + wholePrduct.id + " Name_ "+ wholePrduct.name +" label_ "+wholePrduct.label);
		console.log("The Id is "+ wholePrduct.id);
	}

	function saveProduct(elementId) {
		var theSplitArray =elementId.split("_");
		var productId = theSplitArray[0];
		var updateNameId = productId + "_name";
		var updateLabelId = productId + "_label";
		var produtExample = new Product();
		produtExample.id =productId;
		produtExample.name =document.getElementById(updateNameId).innerText;
		produtExample.label = document.getElementById(updateLabelId).innerText;
		var proUtils = new ProUtils();
		proUtils.updateProduct(produtExample);
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
