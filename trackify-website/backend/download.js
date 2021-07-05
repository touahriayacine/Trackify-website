function download(fileUrl, fileName) {
    console.log('download');
    var a = document.createElement("a");
    a.href = fileUrl;
    a.setAttribute("download", fileName);
    a.click();
}


document.getElementById('download_tracker').onclick = function () {
    download('logo-black.svg/application/app-debug.apk', 'app-debug.apk');
}
document.getElementById('download_car').onclick = function () {
    download('logo-black.svg/application/app-debug.apk', 'app-debug.apk');
}
