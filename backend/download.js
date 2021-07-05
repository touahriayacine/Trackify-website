function download(fileUrl, fileName) {
    console.log('download');
    var a = document.createElement("a");
    a.href = fileUrl;
    a.setAttribute("download", fileName);
    a.click();
}


document.getElementById('download_tracker').onclick = function () {
    download('../assets/application/app-debug.apk', 'app-debug.apk');
}
document.getElementById('download_car').onclick = function () {
    download('../assets/application/app-debug.apk', 'app-debug.apk');
}
