var appID = "5cf4b474";
var appKey = "66836b98a3ddcc0bb880f0712214b52a";
var mcDonaldsURL = "https://api.nutritionix.com/v1_1/search/mcdonalds?resutls=0:20&fields-item_name,brand_name,item_id,nf_calories&appId=" + appID + "&appKey=" + appKey;

$.ajax({
    url: mcDonaldsURL,
    success: function (data) {
        console.log(data);
        var foodItem = data.hits[0];
        var name = foodItem.fields.item_name;
        var cals = foodItem.fields.nf_calories;
        $("body").append("<h2>This " + name + " has " + cals + "calories!!</h2>");
    }
});