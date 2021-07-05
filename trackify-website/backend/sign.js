function include(jsfiles) {
    var src = document.createElement("script");
    src.setAttribute("type", "text/javascript");
    src.setAttribute("src", jsfiles);
    document.getElementsByTagName("head")[0].appendChild(src);
}

include('../backend/constant_id.js');
include('../backend/firebase_configuration.js');
include('../backend/sha_256_hash.js');
include('../backend/sign/input_update.js');
include('../backend/sign/sign_in.js');
include('../backend/sign/sign_up.js');
include('../backend/sign/variables.js');