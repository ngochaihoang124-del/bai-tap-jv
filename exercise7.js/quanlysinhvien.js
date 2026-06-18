// 1. Khởi tạo mảng lưu trữ danh sách tên sinh viên (Dữ liệu gốc)
let danhSachSinhVien = ["Hoang Ngoc Hai", "Vo Tong", "Le Ngoc Khanh", "Ha Thu O"];

// Hàm hiển thị danh sách sinh viên lên bảng HTML
function hienThiBang(danhSach = danhSachSinhVien) {
    let tbody = document.getElementById("studentTableBody");
    let targetHtml = "";

    // Duyệt qua mảng và xây dựng chuỗi các thẻ <tr>
    for (let i = 0; i < danhSach.length; i++) {
        targetHtml += `
            <tr>
                <td>${i + 1}</td>
                <td>${danhSach[i]}</td>
                <td>
                    <button class="btn-edit" onclick="xuLySua(${i})">Sửa</button>
                    <button class="btn-delete" onclick="xuLyXoa(${i})">Xóa</button>
                </td>
            </tr>
        `;
    }

    // Đổ toàn bộ mã HTML vừa tạo vào trong bảng
    tbody.innerHTML = targetHtml;

    // Cập nhật lại số lượng sinh viên thực tế
    document.getElementById("totalStudents").innerText = `Tổng số: ${danhSach.length} sinh viên`;
}

// 2. Chức năng: Thêm mới sinh viên
function xuLyThemMoi() {
    let inputEle = document.getElementById("studentNameInput");
    let tenMoi = inputEle.value.trim();

    if (tenMoi !== "") {
        danhSachSinhVien.push(tenMoi); // Thêm vào mảng gốc
        inputEle.value = "";           // Xóa trắng ô nhập liệu
        hienThiBang();                 // Vẽ lại bảng mới
    } else {
        alert("Vui lòng nhập tên sinh viên hợp lệ!");
    }
}

// 3. Chức năng: Sửa thông tin sinh viên
function xuLySua(index) {
    let tenCu = danhSachSinhVien[index];
    let tenMoi = prompt(`Nhập tên mới cho sinh viên "${tenCu}":`, tenCu);

    if (tenMoi !== null && tenMoi.trim() !== "") {
        danhSachSinhVien[index] = tenMoi.trim(); // Cập nhật mảng
        hienThiBang();                           // Vẽ lại bảng
    }
}

// 4. Chức năng: Xóa sinh viên khỏi hệ thống
function xuLyXoa(index) {
    let tenMuonXoa = danhSachSinhVien[index];
    let xacNhan = confirm(`Bạn có chắc chắn muốn xóa sinh viên "${tenMuonXoa}" không?`);

    if (xacNhan) {
        danhSachSinhVien.splice(index, 1); // Xóa phần tử khỏi mảng
        hienThiBang();                     // Vẽ lại bảng
    }
}

// 5. Chức năng: Tìm kiếm gần đúng theo ký tự gõ vào ô Input
function xuLyTimKiem() {
    let tuKhoa = document.getElementById("searchInput").value.toLowerCase().trim();

    // Lọc ra các sinh viên có chứa từ khóa tìm kiếm
    let mảngKetQua = danhSachSinhVien.filter(function (sinhVien) {
        return sinhVien.toLowerCase().includes(tuKhoa);
    });

    // Chỉ hiển thị các kết quả tìm thấy ra màn hình
    hienThiBang(mảngKetQua);
}

// 6. Chức năng: Sắp xếp danh sách từ A-Z
function xuLySapXep() {
    danhSachSinhVien.sort(function (a, b) {
        return a.localeCompare(b); // Hỗ trợ sắp xếp chuỗi có dấu tiếng Việt chuẩn
    });
    hienThiBang(); // Cập nhật lại bảng sau sắp xếp
}

// Tự động kích hoạt hiển thị dữ liệu ngay khi vừa tải xong trang web
hienThiBang();