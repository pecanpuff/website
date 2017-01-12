/**
 * Created by svadmin on 12/28/2016.
 */

function ProUtils() {
}

ProUtils.prototype = {
    constructor: ProUtils,
    generateProductId: function () {
        var max = 100000;
        var random = Math.floor(Math.random() * max);
        return random;
    },
    addProduct: function (name, label) {
        //var myProducts = proUtils.getAllTheProducts();
        var myProducts = this.getAllTheProducts();
        var newProduct = new Product();
        //newProduct.addProduct(name, label, proUtils);
        newProduct.addProduct(name, label, this);
        myProducts.push(newProduct);
        //proUtils.saveProducts(myProducts);
        this.saveProducts(myProducts);
    },
    getAllTheProducts: function () {
        var myProducts = localStorage.getItem("myProducts");
        if (myProducts == null){
            return [];
        }else {
            return JSON.parse(myProducts);
        }
    },
    
    
    saveProducts: function (productsToSave) {
        localStorage.setItem("myProducts", JSON.stringify(productsToSave));
    },
    getProductWithId: function (idToFind) {
        var allProducts = this.getAllTheProducts();
        for(var i =0 ; i< allProducts.length;i++){
            if(allProducts[i].id == idToFind) {
                return allProducts[i];
            }
        }
        return null;
    },
    deleteProductWithId: function (idToDelete) {
        var allProducts = this.getAllTheProducts();
        var indexToRemove = -1;
        for(var i =0 ; i< allProducts.length;i++){
            if(allProducts[i].id == idToDelete) {
                indexToRemove = i;
                break;
            }
        }
        if(indexToRemove >= 0){
            allProducts.splice(indexToRemove, 1);
            this.saveProducts(allProducts);
        }
    },
    updateProduct: function (productToUpdate) {
        var allProducts = this.getAllTheProducts();
        for(var i =0 ; i< allProducts.length;i++){
            if(allProducts[i].id == productToUpdate.id) {
                allProducts[i].name = productToUpdate.name;
                allProducts[i].label = productToUpdate.label;
                break;
            }
        }
        this.saveProducts(allProducts);
    }

}
