/**
 * @author Preetom Banerjee <preetom111@gmail.com>
 *
 * Usage: Run
 *  cmd> node problem_one.js --help
 */


var getStdin = require("get-stdin");

var args = require('minimist')(process.argv.slice(2), {
	boolean: ['help'],
	string: ['in']
});

// ************************************

function printHelp() {
	console.log("usage:");
	console.log("");
	console.log("--help                      print this help");
	console.log("--in [Number]               read value from stdin");
	console.log("");
	console.log("");
}

if(args.help){
	printHelp();
}else if(args.in){
    num = Number(args.in);
    if(isNaN(num)){
        console.error('Invalid Number Entered');
    }else{
        if(String(num).length <= 1){
            console.log(11);
        }else {
            var str_number = String(num);
            var length = str_number.length;

            if(length % 2 == 0){
                var mid_index = length/2;
                var first_part = str_number.slice(0,mid_index);
                var second_part = str_number.slice(mid_index, length);
                var f_length = first_part.length;

                if(Number(first_part) > Number(second_part)){

                    reverse_f_part = first_part.split('').reverse().join('');

                    while(Number(reverse_f_part) <= Number(second_part)){
                        first_part++;
                        reverse_f_part = String(first_part).split('').reverse().join('');
                    }

                    console.log(first_part + reverse_f_part);
                }else{

                    reverse_f_part = String(first_part).split('').reverse().join('');

                    if(Number(reverse_f_part) > Number(second_part)){
                        // silence
                    }else{
                        first_part++;
                    }

                    reverse_f_part = String(first_part).split('').reverse().join('');
                    if(reverse_f_part >= second_part){
                        console.log(Number(String(first_part) + String(reverse_f_part)));
                    }else{

                        t_s = reverse_f_part[0] == 0 ? String(reverse_f_part).slice(1) : reverse_f_part;
                        console.log(Number(String(first_part) + t_s ));
                    }
                }
            }else{
                var mid_index = (length + 1)/2;
                var first_part = str_number.slice(0,mid_index-1);
                var mid_value = str_number.slice(mid_index-1,mid_index);
                var second_part = str_number.slice(mid_index, length);
                var f_length = first_part.length;

                reverse_f_part = first_part.split('').reverse().join('');

                if(Number(reverse_f_part) > Number(second_part)){

                    console.log(first_part + mid_value + reverse_f_part);

                }else if(Number(reverse_f_part) == Number(second_part) && Number(mid_value) < 9){

                    console.log(first_part + (Number(mid_value)+1) + reverse_f_part);

                }
                else if(Number(first_part) > Number(second_part)){

                    reverse_f_part = first_part.split('').reverse().join('');

                    while(Number(reverse_f_part) <= Number(second_part)){
                        first_part++;
                        reverse_f_part = String(first_part).split('').reverse().join('');
                    }

                    console.log(first_part + mid_value +reverse_f_part);
                }else{

                    reverse_f_part = String(first_part).split('').reverse().join('');

                    if(Number(reverse_f_part) > Number(second_part)){
                        // silence
                    }else{
                        first_part++;
                    }

                    reverse_f_part = String(first_part).split('').reverse().join('');

                    if(f_length < String(first_part).length){
                        console.log(Number(str_number) + 2);
                    }else{

                        if(mid_value < 9){
                            mid_value++;
                            first_part--;
                            reverse_f_part = String(first_part).split('').reverse().join('');
                            console.log(Number(String(first_part) + mid_value + String(reverse_f_part)));
                        }else if(reverse_f_part > second_part){
                            console.log(Number(String(first_part) + mid_value +String(reverse_f_part)));
                        }else{
                            console.log(Number(String(first_part) + mid_value +String(reverse_f_part).slice(1)));
                        }
                    }
                }
            }
        }
    }

}else{
    console.error('Invalid Usage');
}