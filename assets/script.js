document.getElementById("getUserInfo").addEventListener("click", function () {
    if (window.ZaloMiniApp) {
        window.ZaloMiniApp.getUserInfo({
            success: function (data) {
                document.getElementById("userInfo").innerText = 
                    `Tên: ${data.name} - UID: ${data.id}`;
            },
            fail: function (err) {
                console.error("Lỗi khi lấy thông tin người dùng: ", err);
            }
        });
    } else {
        alert("Zalo Mini App SDK chưa được tải.");
    }
});
