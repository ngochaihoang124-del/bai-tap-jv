let danhSachSinhVien = ["Hoang Ngoc Hai", "Vo Tong", "Le Ngoc Khanh", "Ha Thu O"];

// 1. Hiển thị danh sách sinh viên 
function hienThiBang(danhSach = danhSachSinhVien) {
    let tbody = document.getElementById("studentTableBody");
    let targetHtml = "";
}

// 2.Thêm mới sinh viên
function xuLyThemMoi() {
    let inputEle = document.getElementById("studentNameInput");
    let tenMoi = inputEle.value.trim();

    if (tenMoi !== "") {
        danhSachSinhVien.push(tenMoi); 
        inputEle.value = "";           
        hienThiBang();                
    } else {
        alert("Vui lòng nhập tên sinh viên hợp lệ!");
    }
}

// 3.  Sửa thông tin sinh viên
function xuLySua(index) {
    let tenCu = danhSachSinhVien[index];
    let tenMoi = prompt(`Nhập tên mới cho sinh viên "${tenCu}":`, tenCu);

    if (tenMoi !== null && tenMoi.trim() !== "") {
        danhSachSinhVien[index] = tenMoi.trim(); 
        hienThiBang();                           
    }
}

// 4.  Xóa sinh viên khỏi hệ thống
function xuLyXoa(index) {
    let tenMuonXoa = danhSachSinhVien[index];
    let xacNhan = confirm(`Bạn có chắc chắn muốn xóa sinh viên "${tenMuonXoa}" không?`);

    if (xacNhan) {
        danhSachSinhVien.splice(index, 1); 
        hienThiBang();                     
    }
}

// 5.  Tìm kiếm gần đúng theo ký tự 
function xuLyTimKiem() {
    let tuKhoa = document.getElementById("searchInput").value.toLowerCase().trim();
    let mảngKetQua = danhSachSinhVien.filter(function (sinhVien) {
        return sinhVien.toLowerCase().includes(tuKhoa);
    });
    hienThiBang(mảngKetQua);
}

// 6.  Sắp xếp danh sách từ A-Z
function xuLySapXep() {
    danhSachSinhVien.sort(function (a, b) {
        return a.localeCompare(b); 
    });
    hienThiBang();
}

hienThiBang();
