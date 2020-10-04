var demoApp = angular.module('demoApp', ['ngAnimate', 'angular-steps']);

demoApp.controller('DemoCtrl', ['$scope', 'StepsService', function($scope, StepsService) {
        $scope.students = [];
        $scope.countDown = 10;
        $scope.countDown1 = 15;

        var formData = new FormData();

        //$scope.tell1="hi";
        //console.log($scope.tell1)
        $scope.gogo = function(to) {
            //alert("in here")
            StepsService.steps().goTo(to);
            console.log(to);
            console.log(StepsService.steps())
        };
        $scope.gotoLast = function() {
            $scope.stepName = 'last';
        };
        $scope.finished = function() {
            //alert('Aaaand we are done!');
            swal("Good job!", "You completed the test! You can now close the browser", "success").then(function() {
                window.close();
            });;

        };

        $scope.fullpage = function() {
            var timer = setInterval(function() {
                $scope.countDown--;
                $scope.$apply();
                if ($scope.countDown == 0) {
                    document.getElementById('count_1').style.display = 'none';
                    document.getElementById('tell').disabled = true;
                }
                //console.log($scope.countDown);
            }, 1000);

            console.log("timer" + timer)

            var elem = document.documentElement;
            var name = document.getElementById('your_name').value;
            var email = document.getElementById('your_email').value;
            $scope.info = { "name": name, "email": email };
            formData.append("name", name);
            formData.append("email", email);
            $scope.students.push($scope.info);
            /* Chrome, Safari & Opera */
            elem.webkitRequestFullscreen();

            if (document.addEventListener) {
                document.addEventListener('fullscreenchange', exitHandler, false);
                document.addEventListener('mozfullscreenchange', exitHandler, false);
                document.addEventListener('MSFullscreenChange', exitHandler, false);
                document.addEventListener('webkitfullscreenchange', exitHandler, false);
            }

            function exitHandler() {
                if (document.webkitIsFullScreen === false) {

                    document.onkeydown = $scope.goFullscreen();
                    elem.webkitRequestFullscreen();
                    //setTimeout(fullscreen,1000);

                } else if (document.mozFullScreen === false) {
                    ///fire your event
                } else if (document.msFullscreenElement === false) {
                    ///fire your event
                }
            }
            $scope.goFullscreen = function() {
                /* Chrome, Safari & Opera */
                elem.webkitRequestFullscreen();
            }

        }
        $scope.fetch = function() {
            var timer1 = setInterval(function() {
                $scope.countDown1--;
                $scope.$apply();
                if ($scope.countDown1 === 0) {
                    //alert("here")
                    document.getElementById('count_2').style.display = 'none';
                    document.getElementById('cook').disabled = true;

                }
                //console.log($scope.countDown1);
            }, 1000);

            var elem = document.documentElement;
            if (elem.requestFullscreen) {
                elem.requestFullscreen();
            } else if (elem.mozRequestFullScreen) { /* Firefox */
                elem.mozRequestFullScreen();
            } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
                elem.webkitRequestFullscreen();
            } else if (elem.msRequestFullscreen) { /* IE/Edge */
                elem.msRequestFullscreen();
            }
            if (document.addEventListener) {
                document.addEventListener('fullscreenchange', exitHandler, false);
                document.addEventListener('mozfullscreenchange', exitHandler, false);
                document.addEventListener('MSFullscreenChange', exitHandler, false);
                document.addEventListener('webkitfullscreenchange', exitHandler, false);
            }

            function exitHandler() {
                if (document.webkitIsFullScreen === false) {
                    ///fire your event

                    elem.webkitRequestFullscreen();
                } else if (document.mozFullScreen === false) {
                    ///fire your event
                } else if (document.msFullscreenElement === false) {
                    ///fire your event
                }
            }

            var tell = document.getElementById('tell').value;


            $scope.tell = tell;
            //console.log($scope.tell)
            //console.log( $scope.tell1)
            $scope.concat();
        }
        $scope.concat = function() {
            //console.log("concat")
            //$scope.q1={};
            $scope.q1 = { "Q1": $scope.tell };
            formData.append("Q1", $scope.tell);
            $scope.students.push($scope.q1);
            localStorage.setItem("students", JSON.stringify($scope.students));

            var stored = JSON.parse(localStorage.getItem("students"));
            console.log(stored);
            console.log("formdata=" + formData);
        }
        $scope.fetch1 = function() {

            var elem = document.documentElement;
            if (elem.requestFullscreen) {
                elem.requestFullscreen();
            } else if (elem.mozRequestFullScreen) { /* Firefox */
                elem.mozRequestFullScreen();
            } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
                elem.webkitRequestFullscreen();
            } else if (elem.msRequestFullscreen) { /* IE/Edge */
                elem.msRequestFullscreen();
            }
            if (document.addEventListener) {
                document.addEventListener('fullscreenchange', exitHandler, false);
                document.addEventListener('mozfullscreenchange', exitHandler, false);
                document.addEventListener('MSFullscreenChange', exitHandler, false);
                document.addEventListener('webkitfullscreenchange', exitHandler, false);
            }

            function exitHandler() {
                if (document.webkitIsFullScreen === false) {
                    ///fire your event

                    elem.webkitRequestFullscreen();
                } else if (document.mozFullScreen === false) {
                    ///fire your event
                } else if (document.msFullscreenElement === false) {
                    ///fire your event
                }
            }

            console.log($scope.cook)

            var cookie = document.getElementById('cook').value;


            $scope.cook = cookie;
            //console.log( $scope.cook)

            $scope.concat1();
        }
        $scope.concat1 = function() {
            //console.log("concat")
            //$scope.q1={};
            $scope.q2 = { "Q2": $scope.cook };
            $scope.students.push($scope.q2);
            localStorage.setItem("students", JSON.stringify($scope.students));

            var stored = JSON.parse(localStorage.getItem("students"));
            console.log(stored);
        }
        $scope.fetch2 = function() {
            var elem = document.documentElement;
            if (elem.requestFullscreen) {
                elem.requestFullscreen();
            } else if (elem.mozRequestFullScreen) { /* Firefox */
                elem.mozRequestFullScreen();
            } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
                elem.webkitRequestFullscreen();
            } else if (elem.msRequestFullscreen) { /* IE/Edge */
                elem.msRequestFullscreen();
            }
            if (document.addEventListener) {
                document.addEventListener('fullscreenchange', exitHandler, false);
                document.addEventListener('mozfullscreenchange', exitHandler, false);
                document.addEventListener('MSFullscreenChange', exitHandler, false);
                document.addEventListener('webkitfullscreenchange', exitHandler, false);
            }

            function exitHandler() {
                if (document.webkitIsFullScreen === false) {
                    ///fire your event

                    elem.webkitRequestFullscreen();
                } else if (document.mozFullScreen === false) {
                    ///fire your event
                } else if (document.msFullscreenElement === false) {
                    ///fire your event
                }
            }
            var cookie = document.getElementById('asynch').value;

            $scope.asynch = cookie;
            //console.log( $scope.cook)

            $scope.concat2();
        }
        $scope.concat2 = function() {
            //console.log("concat")
            //$scope.q1={};
            $scope.q3 = { "Q3": $scope.asynch };
            $scope.students.push($scope.q3);
            localStorage.setItem("students", JSON.stringify($scope.students));

            var stored = JSON.parse(localStorage.getItem("students"));
            console.log(stored);
        }
        $scope.fetch4 = function() {
            var elem = document.documentElement;
            if (elem.requestFullscreen) {
                elem.requestFullscreen();
            } else if (elem.mozRequestFullScreen) { /* Firefox */
                elem.mozRequestFullScreen();
            } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
                elem.webkitRequestFullscreen();
            } else if (elem.msRequestFullscreen) { /* IE/Edge */
                elem.msRequestFullscreen();
            }
            if (document.addEventListener) {
                document.addEventListener('fullscreenchange', exitHandler, false);
                document.addEventListener('mozfullscreenchange', exitHandler, false);
                document.addEventListener('MSFullscreenChange', exitHandler, false);
                document.addEventListener('webkitfullscreenchange', exitHandler, false);
            }

            function exitHandler() {
                if (document.webkitIsFullScreen === false) {
                    ///fire your event

                    elem.webkitRequestFullscreen();
                } else if (document.mozFullScreen === false) {
                    ///fire your event
                } else if (document.msFullscreenElement === false) {
                    ///fire your event
                }
            }
            var push = document.getElementById('push').value;

            $scope.push = push;
            //console.log( $scope.cook)

            $scope.concat4();
        }
        $scope.concat4 = function() {
            //console.log("concat")
            //$scope.q1={};
            $scope.q4 = { "Q4": $scope.push };
            $scope.students.push($scope.q4);
            localStorage.setItem("students", JSON.stringify($scope.students));

            var stored = JSON.parse(localStorage.getItem("students"));
            console.log(stored);
        }
        $scope.fetch5 = function() {
            var elem = document.documentElement;
            if (elem.requestFullscreen) {
                elem.requestFullscreen();
            } else if (elem.mozRequestFullScreen) { /* Firefox */
                elem.mozRequestFullScreen();
            } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
                elem.webkitRequestFullscreen();
            } else if (elem.msRequestFullscreen) { /* IE/Edge */
                elem.msRequestFullscreen();
            }
            if (document.addEventListener) {
                document.addEventListener('fullscreenchange', exitHandler, false);
                document.addEventListener('mozfullscreenchange', exitHandler, false);
                document.addEventListener('MSFullscreenChange', exitHandler, false);
                document.addEventListener('webkitfullscreenchange', exitHandler, false);
            }

            function exitHandler() {
                if (document.webkitIsFullScreen === false) {
                    ///fire your event

                    elem.webkitRequestFullscreen();
                } else if (document.mozFullScreen === false) {
                    ///fire your event
                } else if (document.msFullscreenElement === false) {
                    ///fire your event
                }
            }
            var type = document.getElementById('typeof').value;

            $scope.type = type;
            //console.log( $scope.cook)

            $scope.concat5();
        }
        $scope.concat5 = function() {
            //console.log("concat")
            //$scope.q1={};
            $scope.q5 = { "Q5": $scope.type };
            $scope.students.push($scope.q5);
            localStorage.setItem("students", JSON.stringify($scope.students));

            var stored = JSON.parse(localStorage.getItem("students"));
            console.log(stored);
        }
        $scope.fetch6 = function() {
            var elem = document.documentElement;
            if (elem.requestFullscreen) {
                elem.requestFullscreen();
            } else if (elem.mozRequestFullScreen) { /* Firefox */
                elem.mozRequestFullScreen();
            } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
                elem.webkitRequestFullscreen();
            } else if (elem.msRequestFullscreen) { /* IE/Edge */
                elem.msRequestFullscreen();
            }
            if (document.addEventListener) {
                document.addEventListener('fullscreenchange', exitHandler, false);
                document.addEventListener('mozfullscreenchange', exitHandler, false);
                document.addEventListener('MSFullscreenChange', exitHandler, false);
                document.addEventListener('webkitfullscreenchange', exitHandler, false);
            }

            function exitHandler() {
                if (document.webkitIsFullScreen === false) {
                    ///fire your event

                    elem.webkitRequestFullscreen();
                } else if (document.mozFullScreen === false) {
                    ///fire your event
                } else if (document.msFullscreenElement === false) {
                    ///fire your event
                }
            }
            var binding = document.getElementById('binding').value;

            $scope.binding = binding;
            //console.log( $scope.cook)

            $scope.concat6();
        }
        $scope.concat6 = function() {
            //console.log("concat")
            //$scope.q1={};
            $scope.q6 = { "Q6": $scope.binding };
            $scope.students.push($scope.q6);
            localStorage.setItem("students", JSON.stringify($scope.students));

            var stored = JSON.parse(localStorage.getItem("students"));
            console.log(stored);
        }
        $scope.fetch3 = function() {

            var elem = document.documentElement;
            if (elem.requestFullscreen) {
                elem.requestFullscreen();
            } else if (elem.mozRequestFullScreen) { /* Firefox */
                elem.mozRequestFullScreen();
            } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
                elem.webkitRequestFullscreen();
            } else if (elem.msRequestFullscreen) { /* IE/Edge */
                elem.msRequestFullscreen();
            }
            if (document.addEventListener) {
                document.addEventListener('fullscreenchange', exitHandler, false);
                document.addEventListener('mozfullscreenchange', exitHandler, false);
                document.addEventListener('MSFullscreenChange', exitHandler, false);
                document.addEventListener('webkitfullscreenchange', exitHandler, false);
            }

            function exitHandler() {
                if (document.webkitIsFullScreen === false) {
                    ///fire your event

                    elem.webkitRequestFullscreen();
                } else if (document.mozFullScreen === false) {
                    ///fire your event
                } else if (document.msFullscreenElement === false) {
                    ///fire your event
                }
            }
            var cookie = document.getElementById('callback').value;

            $scope.callback = cookie;
            //console.log( $scope.cook)

            $scope.concat3();
        }
        $scope.concat3 = function() {
            //console.log("concat")
            //$scope.q1={};
            $scope.q7 = { "Q7": $scope.callback };
            $scope.students.push($scope.q7);

            localStorage.setItem("students", JSON.stringify($scope.students));

            var stored = JSON.parse(localStorage.getItem("students"));
            console.log(stored);
            var json = JSON.stringify(stored);
            [json].map((a, i) => {

                if ([json].indexOf(a) === i) {
                    console.log(a)
                }
            })
            aftersubmit();
        }

        function aftersubmit() {
            var formdata = document.getElementById('test_form');
            console.log(formdata);
            var json = JSON.stringify($scope.students);

            formdata = json;

            //var json = JSON.stringify($scope.students);
            var json1 = JSON.parse(JSON.stringify($scope.students[0]));
            console.log(json1)
                //console.log(json)

            //Convert JSON string to BLOB.
            //send();
            event.preventDefault(); // prevent reload

            formData.append('service_id', 'mohitsri9@gmail.com');
            formData.append('template_id', 'template_6c45wkf');
            formData.append('user_id', 'user_g6wheXudV4emIs9n9wTPb');

            $.ajax('https://api.emailjs.com/api/v1.0/email/send-form', {
                type: 'POST',
                data: formData,
                contentType: false, // auto-detection
                processData: false // no need to parse formData to string
            }).done(function() {
                alert('Your mail is sent!');
            }).fail(function(error) {
                alert('Oops... ' + JSON.stringify(error));
            });

            json = [json];
            var blob1 = new Blob(json, { type: "text/plain;charset=utf-8" });

            //Check the Browser.
            var isIE = false || !!document.documentMode;
            if (isIE) {
                window.navigator.msSaveBlob(blob1, "Customers.txt");
            } else {
                var url = window.URL || window.webkitURL;
                link = url.createObjectURL(blob1);
                var a = document.createElement("a");
                a.download = "Customers.txt";
                a.href = link;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
            }
            lastscreen();
        }

        function lastscreen() {
            var last_div = document.createElement('div');
            var h1 = document.createElement('h1');
            h1.textContent = "Thank You for completing the test";
            last_div.appendChild(h1);
        }
    }]

);