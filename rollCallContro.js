var app = angular.module('myApp', []);
    app.controller('myCtrl', function ($scope) {
        $scope.listStudentsL = [
            {
                code: "HTC101",
                name: "Nguyễn Văn Nam",
                position: "Trưởng phòng",
                envelope: "namnnv@thanhcong.vn",
                avatar: "../assets/images/avatar1.jpg",
                phone: "01694590533"

            },
            {
                code: "HTC102",
                name: "Tống Đức Thắng",
                position: "Phó phòng",
                envelope: "thangtd@thanhcong.vn",
                avatar: "../assets/images/avatar2.jpg",
                phone: "0169459832"

            },
            {
                code: "HTC103",
                name: "Nguyễn Văn Đại",
                position: "NV",
                envelope: "daind@thanhcong.vn",
                avatar: "../assets/images/avatar3.jpg",
                phone: "0904594588"

            },
            {
                code: "HTC104",
                name: "Trần Kim Tín",
                position: "NV",
                envelope: "tintk@thanhcong.vn",
                avatar: "../assets/images/no-profile-photo.png",
                phone: "0915478932"

            },
            {
                code: "HTC105",
                name: "Nguyễn Quốc Thế",
                position: "NV",
                envelope: "thend@thanhcong.vn",
                avatar: "../assets/images/avatar2.jpg",
                phone: "01635222610"

            },
            {
                code: "HTC106",
                name: "Nguyễn Công Dũng",
                position: "NV",
                envelope: "dungnd@thanhcong.vn",
                avatar: "../assets/images/avatar2.jpg",
                phone: "090679355"

            },
            {
                code: "HTC107",
                name: "Lê Đình Dũng",
                position: "Bảo vệ",
                envelope: "dungld@thanhcong.vn",
                avatar: "../assets/images/avatar1.jpg",
                phone: "090679355"

            },
            {
                code: "HTC108",
                name: "Phạm Chí Công",
                position: "NV",
                envelope: "congpc@thanhcong.vn",
                avatar: "../assets/images/avatar2.jpg",
                phone: "090679355"

            },
            {
                code: "HTC109",
                name: "Ngễn Thị Vân Anh",
                position: "NV",
                envelope: "congpc@thanhcong.vn",
                avatar: "../assets/images/avatar2.jpg",
                phone: "090679355"

            },
            {
                code: "HTC110",
                name: "Nguyễn Văn Quyết",
                position: "bảo vệ",
                envelope: "congpc@thanhcong.vn",
                avatar: "../assets/images/no-profile-photo.png",
                phone: "090679355"

            },
            {
                code: "HTC111",
                name: "trống",
                position: "bảo vệ",
                envelope: "congpc@thanhcong.vn",
                avatar: "../assets/images/no-profile-photo.png",
                phone: "090679355"

            },
            {
                code: "HTC112",
                name: "Nguyễn Văn Quyết2",
                position: "bảo vệ",
                envelope: "congpc@thanhcong.vn",
                avatar: "../assets/images/no-profile-photo.png",
                phone: "090679355"

            }
        ];
        $scope.listStudentsR = [
            {
                code: "HTC101",
                name: "Nguyễn Văn Nam",
                position: "Trưởng phòng",
                envelope: "namnnv@thanhcong.vn",
                avatar: "../assets/images/avatar1.jpg",
                phone: "01694590533"

            },
            {
                code: "HTC102",
                name: "Tống Đức Thắng",
                position: "Phó phòng",
                envelope: "thangtd@thanhcong.vn",
                avatar: "../assets/images/avatar2.jpg",
                phone: "0169459832"

            },
            {
                code: "HTC103",
                name: "Nguyễn Văn Đại",
                position: "NV",
                envelope: "daind@thanhcong.vn",
                avatar: "../assets/images/avatar3.jpg",
                phone: "0904594588"

            },
            {
                code: "HTC104",
                name: "Trần Kim Tín",
                position: "NV",
                envelope: "tintk@thanhcong.vn",
                avatar: "../assets/images/no-profile-photo.png",
                phone: "0915478932"

            },
            {
                code: "HTC105",
                name: "Nguyễn Quốc Thế",
                position: "NV",
                envelope: "thend@thanhcong.vn",
                avatar: "../assets/images/avatar2.jpg",
                phone: "01635222610"

            },
            {
                code: "HTC106",
                name: "Nguyễn Công Dũng",
                position: "NV",
                envelope: "dungnd@thanhcong.vn",
                avatar: "../assets/images/avatar2.jpg",
                phone: "090679355"

            },
            {
                code: "HTC107",
                name: "Lê Đình Dũng",
                position: "Bảo vệ",
                envelope: "dungld@thanhcong.vn",
                avatar: "../assets/images/avatar1.jpg",
                phone: "090679355"

            },
            {
                code: "HTC108",
                name: "Phạm Chí Công",
                position: "NV",
                envelope: "congpc@thanhcong.vn",
                avatar: "../assets/images/avatar2.jpg",
                phone: "090679355"

            },
            {
                code: "HTC109",
                name: "Ngễn Thị Vân Anh",
                position: "NV",
                envelope: "congpc@thanhcong.vn",
                avatar: "../assets/images/avatar2.jpg",
                phone: "090679355"

            },
            {
                code: "HTC110",
                name: "Nguyễn Văn Quyết",
                position: "bảo vệ",
                envelope: "congpc@thanhcong.vn",
                avatar: "../assets/images/no-profile-photo.png",
                phone: "090679355"

            }
        ];
        $scope.doiMau=function($index){
            //var id=event.target.id
            var id='#sv'+$index;
            console.log(id);
            var myEl = angular.element( document.querySelector(id) );
            myEl.addClass('red');
        }
    });
