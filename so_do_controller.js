var app = angular.module('myApp', []);
    app.controller('myCtrl', function ($scope) {
        $scope.soluong=8;
        $scope.nghi=[];
        $scope.list = [
            {
                stt:1,
                code: "1651061101",
                name: "Nguyễn Văn Nam",
                
            },
            {
                stt:2,
                code: "1651061102",
                name: "Tống Đức Thắng",
                
            },
            {
                stt:3,
                code: "1651061103",
                name: "Nguyễn Văn Đại",
                
            },
            {
                stt:4,
                code: "1651061104",
                name: "Trần Kim Tín",
                
            },
            {
                stt:5,
                code: "1651061105",
                name: "Nguyễn Quốc Thế",
                
            },
            {
                stt:6,
                code: "1651061106",
                name: "Nguyễn Công Dũng",
                
            },
            {
                stt:7,
                code: "1651061107",
                name: "Lê Đình Dũng",
                
            },
            {
                stt:8,
                code: "1651061108",
                name: "Phạm Chí Công",
                
            },
            {
                stt:9,
                code: "1651061109",
                name: "Nguyễn Thị Vân Anh",
                
            },
            {
                stt:10,
                code: "1651061110",
                name: "Nguyễn Văn Quyết",
                
            },
            {
                stt:11,
                code: "NULL",
                name: "cho nay trong",
                
            },
            {
                stt:12,
                code: "1651061112",
                name: "Nguyễn Văn Quyết2",
                
            },
            {
                stt:13,
                code: "1651061201",
                name: "Nguyễn Văn Nam",
                
            },
            {
                stt:14,
                code: "1651061202",
                name: "Tống Đức Thắng",
                
            },
            {
                stt:15,
                code: "1651061203",
                name: "Nguyễn Văn Đại",
                
            },
            {
                stt:16,
                code: "1651061204",
                name: "Trần Kim Tín",
                
            },
            {
                stt:17,
                code: "1651061205",
                name: "Nguyễn Quốc Thế",
                
            },
            {
                stt:18,
                code: "1651061206",
                name: "Nguyễn Công Dũng",
                
            },
            {
                stt:19,
                code: "1651061207",
                name: "Lê Đình Dũng",
                
            },
            {
                stt:20,
                code: "1651061208",
                name: "Phạm Chí Công",
                
            }
            // ,
            // {
            //     stt:21,
            //     code: "1651061209",
            //     name: "Nguyễn Thị Vân Anh",
                
            // },
            // {
            //     stt:22,
            //     code: "1651061210",
            //     name: "Nguyễn Văn Quyết",
                
            // },
            // {
            //     stt:23,
            //     code: "NULL",
            //     name: "trống",
                
            // },
            // {
            //     stt:24,
            //     code: "NULL",
            //     name: "trống",
                
            // }
        ];

        $scope.doiMau=function($index){
            //var id=event.target.id
            var id='#sv'+$index;
            var vt=$scope.nghi.indexOf($index);
            console.log(id);            
            var myEl = angular.element( document.querySelector(id) );
            if(vt==-1){
                myEl.addClass('red');
                $scope.nghi.push($index);
            }else{
                myEl.removeClass('red');
                $scope.nghi.splice(vt, 1)
            };
        }
        
    });
