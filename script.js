$('.list li a').on('mousemove', function() {
    $('.list li a').addClass('blurred');
    $(this).removeClass('blurred')
})
$('.list li a').on('mouseleave', function() {
    $('.list li a').removeClass('blurred');
})
// Age Calculator
$(document).ready(function(){
    $("#calculate_age").click(function(e){
        e.preventDefault();
        $('.result').addClass('open')
        var dob = $("#dob").val();
        if(dob){
            var today = new Date();
            var birthDate = new Date(dob);
            if (birthDate > today) {
                $(".result").text("Error: Date of birth cannot be in the future.");
                return;
            }
            var age = today.getFullYear() - birthDate.getFullYear();
            var month = today.getMonth() - birthDate.getMonth();
            var day = today.getDate() - birthDate.getDate();
            if (month < 0 || (month === 0 && day < 0)) {
                age--;
                month += 12;
            }
            if (day < 0) {
                month--;
                var daysInMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
                day += daysInMonth;
            }
            $(".result").html("Your age is: " + age + " years, " + month + " months and " + day + " days.");
        } else {
            $(".result").text("Please enter your date of birth.");
        }
    });
});
// Unit Converter
$(document).ready(function() {
    var units = {
        kilometer: 1000,
        meter: 1,
        centimeter: 0.01,
        millimeter: 0.001,
        micrometer: 1e-6,
        nanometer: 1e-9,
        mile: 1609.34,
        yard: 0.9144,
        foot: 0.3048,
        inch: 0.0254,
        nautical_mile: 1852
    };
    function convertFromToUnit() {
        var fromUnit = $('#from_unit').val();
        var toUnit = $('#to_unit').val();
        if($('#from_input_unit').val() == "") {
            $('#to_input_unit').val('');
        }
        var inputValue = parseFloat($('#from_input_unit').val());
        if (!isNaN(inputValue)) {
            var convertedValue = (inputValue * units[fromUnit]) / units[toUnit];
            $('#to_input_unit').val(convertedValue.toFixed(2));
        }
    }
    function convertToFromUnit() {
        var fromUnit = $('#from_unit').val();
        var toUnit = $('#to_unit').val();
        if($('#to_input_unit').val() == "") {
            $('#from_input_unit').val('');
        }
        var outputValue = parseFloat($('#to_input_unit').val());
        if (!isNaN(outputValue)) {
            var convertedValue = (outputValue * units[toUnit]) / units[fromUnit];
            console.log(convertedValue);
            $('#from_input_unit').val(convertedValue.toFixed(2));
        }
    }
    $('#from_unit, #to_unit, #from_input_unit').on('change keyup', convertFromToUnit);
    $('#to_input_unit').on('change keyup', convertToFromUnit);
});
// Temprature Converter
$(document).ready(function() {
    function convertFromTo() {
        var fromTemperature = $('#from_temprature').val();
        var toTemperature = $('#to_temprature').val();
        var inputValue = parseFloat($('#from_input').val());
        if (isNaN(inputValue)) {
            $('#to_input').val('Invalid input');
            return;
        }
        var result = convertTemp(inputValue, fromTemperature, toTemperature);
        $('#to_input').val(result.toFixed(2));
    }
    function convertToFrom() {
        var fromTemperature = $('#from_temprature').val();
        var toTemperature = $('#to_temprature').val();
        var outputValue = parseFloat($('#to_input').val());
        if (isNaN(outputValue)) {
            $('#from_input').val('Invalid input');
            return;
        }
        var result = convertTemp(outputValue, toTemperature, fromTemperature);
        $('#from_input').val(result.toFixed(2));
    }
    function convertTemp(value, fromUnit, toUnit) {
        switch (fromUnit) {
            case 'degree_celsius':
                if (toUnit === 'fahrenheit') return (value * 9 / 5) + 32;
                if (toUnit === 'kelvin') return value + 273.15;
                break;
            case 'fahrenheit':
                if (toUnit === 'degree_celsius') return (value - 32) * 5 / 9;
                if (toUnit === 'kelvin') return (value - 32) * 5 / 9 + 273.15;
                break;
            case 'kelvin':
                if (toUnit === 'degree_celsius') return value - 273.15;
                if (toUnit === 'fahrenheit') return (value - 273.15) * 9 / 5 + 32;
                break;
        }
        return value;
    }
    $('#from_temprature, #to_temprature, #from_input').on('change keyup', convertFromTo);
    $('#to_input').on('change keyup', convertToFrom);
});
// Date Calculator
$(document).ready(function() {
    $("#calculate_date").click(function(e) {
        e.preventDefault();
        $('.result').addClass('open')
        var fromDate = $('#from_date').val();
        var toDate = $('#to_date').val();
        if (fromDate && toDate) {
            var from = new Date(fromDate);
            var to = new Date(toDate);
            var years = to.getFullYear() - from.getFullYear();
            var months = to.getMonth() - from.getMonth();
            var days = to.getDate() - from.getDate();
            if (days < 0) {
                months--;
                var previousMonth = new Date(to.getFullYear(), to.getMonth(), 0);
                days += previousMonth.getDate();
            }
            if (months < 0) {
                years--;
                months += 12;
            }
            $(".result").text("Difference: " + years + " years, " + months + " months and " + days + " days");
        } else {
            $(".result").text("Please enter both dates.");
        }
    });
});
// BMI Calculator
$(document).ready(function() {
    $("#calculate_bmi").click(function(e) {
        e.preventDefault(); // Prevents the default action of the button
        $('.result').addClass('open')
        var age = $('#age').val();
        var height = $('#height').val(); // Height in centimeters
        var weight = $('#weight').val(); // Weight in kilograms
        if (age < 2 || age > 120) {
            $(".result").text("Age must be between 2 and 120 years.");
            return;
        }
        if (height > 0 && weight > 0) {
            var heightInMeters = height / 100; // Convert height to meters
            var bmi = weight / (heightInMeters * heightInMeters); // BMI calculation
            $(".result").html("Your BMI is: " + bmi.toFixed(2) + "kg/m<sup>2</sup>");
        } else {
            $(".result").text("Please enter valid height and weight.");
        }
    });
});
// Speed Calculator
$(document).ready(function() {
    $("#calculate_speed").click(function(e) {
        e.preventDefault(); // Prevents the default action of the button
        $('.result').addClass('open')
        var distance = parseFloat($('#distance').val());
        var hours = parseInt($('#hours').val());
        var minutes = parseInt($('#minutes').val());
        var seconds = parseInt($('#seconds').val());
        var unit = $('#unit').val();

        var totalTimeInSeconds = (hours * 3600) + (minutes * 60) + seconds;

        if (totalTimeInSeconds > 0 && distance > 0) {
            var speed = distance / (totalTimeInSeconds / 3600); // Speed in unit per hour

            $(".result").text("Speed: " + speed.toFixed(2) + " " + unit + "/hour");
        } else {
            $(".result").text("Please enter valid distance and time.");
        }
    });
});
// Percentage Calculator
$(document).ready(function() {
    $("#calculate_percetange").click(function(e) {
        e.preventDefault(); // Prevents the default action of the button
        $('.result').addClass('open')
        var percentage = parseFloat($('#percentage').val());
        var value = parseFloat($('#value').val());

        if (!isNaN(percentage) && !isNaN(value)) {
            var result = (percentage / 100) * value;
            $(".result").text(percentage + "% of " + value + " is: " + result.toFixed(2));
        } else {
            $(".result").text("Please enter valid numbers for percentage and value.");
        }
    });
});
// Random Number Generator
$(document).ready(function() {
    $("#generate_random_number").click(function(e) {
        e.preventDefault(); // Prevents the default action of the button
        $('.result').addClass('open')
        var min = parseInt($('#min').val());
        var max = parseInt($('#max').val());

        if (!isNaN(min) && !isNaN(max) && max > min) {
            var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
            $(".result").text("Random Number: " + randomNumber);
        } else {
            $(".result").text("Please enter valid min and max values where max is greater than min.");
        }
    });
});
// Password Generator
$(document).ready(function() {
    $("#generate_password").click(function(e) {
        e.preventDefault(); // Prevents the default action of the button
        $('.result').addClass('open')
        var length = parseInt($('#length').val());
        var uppercase = $('#uppercase').val() === 'yes';
        var lowercase = $('#lowercase').val() === 'yes';
        var numbers = $('#numbers').val() === 'yes';
        var special = $('#special').val() === 'yes';
        var copy = $('#copy').val() === 'yes';

        if (!uppercase && !lowercase && !numbers && !special) {
            $(".result").text("At least one of uppercase, lowercase, numbers, or special symbols must be selected.");
            return;
        }
        if(length > 30) {
            $(".result").text("Password can not be more than of 30 characters");
            return;
        }
        if(length < 4) {
            $(".result").text("Password can not be less than of 4 characters");
            return;
        }

        var characters = '';
        if (uppercase) characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        if (lowercase) characters += 'abcdefghijklmnopqrstuvwxyz';
        if (numbers) characters += '0123456789';
        if (special) characters += '!@#$%^&*()_+{}:"<>?|[];\',./`~';

        var password = '';
        for (var i = 0; i < length; i++) {
            var randomNumber = Math.floor(Math.random() * characters.length);
            password += characters[randomNumber];
        }

        $(".result").text(password);

        if (copy && password) {
            navigator.clipboard.writeText(password).then(function() {
                console.log('Password copied to clipboard');
            }, function(err) {
                console.log('Failed to copy password: ', err);
            });
        }
    });
});