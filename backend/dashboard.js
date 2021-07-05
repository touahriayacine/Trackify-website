function include(jsfiles) {
    var src = document.createElement("script");
    src.setAttribute("type", "text/javascript");
    src.setAttribute("src", jsfiles);
    document.getElementsByTagName("head")[0].appendChild(src);
}


include("../backend/dashboard/variables.js");
include("../backend/constant_id.js");
include("../backend/dashboard/search_bar.js");
include("../backend/firebase_configuration.js");
include("../backend/dashboard/log_out.js");
include("../backend/sha_256_hash.js");
include("../backend/dashboard/car_list.js");
include("../backend/dashboard/car_positions.js");
include("../backend/dashboard/select_car.js");
include("../backend/dashboard/select_position.js");
include("../backend/dashboard/car_details.js");
include("../backend/dashboard/add_car.js");
include("../backend/dashboard/delete_car.js");