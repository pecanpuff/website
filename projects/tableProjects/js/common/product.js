/**
 * Created by svadmin on 12/28/2016.
 */
function Product() {
    this.name = "";
    this.label = "";
    this.id = "";
}

Product.prototype = {
    constructor: Product,
    addProduct: function (name, label, proUtils) {
        // Set name label and id for the product
        this.name = name;
        this.label = label;
        this.id = proUtils.generateProductId();
    },
}