function download(fileUrl, fileName) {
    console.log('download');
    var a = document.createElement("a");
    a.href = fileUrl;
    a.setAttribute("download", fileName);
    a.click();
}


document.getElementById('download_tracker').onclick = function () {
    download('.assets/application/Trackify - tracker app.apk', 'Trackify - tracker app.apk');
}
document.getElementById('download_car').onclick = function () {
    download('.assets/application/Trackify - car app.apk', 'Trackify - car app.apk');
}
