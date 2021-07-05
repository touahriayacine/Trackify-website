function include(jsfiles) {
    var src = document.createElement("script");
    src.setAttribute("type", "text/javascript");
    src.setAttribute("src", jsfiles);
    document.getElementsByTagName("head")[0].appendChild(src);
}



include("../backend/constant_id.js");
include("../backend/sha_256_hash.js");
include("../backend/firebase_configuration.js");
include("../backend/confirm_phone_number/variables.js");
include("../backend/confirm_phone_number/phone_number_auth.js");