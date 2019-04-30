d3.csv("nyc.csv").then(function(data) {
   // for (var i = 0; i < data.length; i++) {
   //    console.log(data[i].total_enrollment);
   // }
   //total enrolled
   var total_enroll=data.map(function(tea){
	   return tea.total_enrollment;
   });
   //all students in fifth grade
   var fifth_grade=data.map(function(fifth){
	   return fifth.grade5;
   });
   //all students enrolled
   var amount=total_enroll.length;
   console.log(amount);
   //filtered school without fifth graders
   var filt_fifth_grade=fifth_grade.filter(function(ele){
	   return ele != "";
   });
   //amount in filtered
   var filt_amount =filt_fifth_grade.length
   console.log(filt_amount);
   //filtered eligible students for percentage
   var filt_eligible=filt_fifth_grade.filter(function(ele){
	return ele >=50;
   });
   //amount in eligible
   var elig_amount = filt_eligible.length;

   var dbnL = data.map(function(schools){
     return schools.DBN;
   });

   var numS = dbnL.length;
   console.log(numS);

   var bOh = data.filter(function(schools){
     return schools.black_per >=20 || schools.hispanic_per >=20 ;
   });
   console.log(bOh.length);
   var numBH = bOh.length;

	var a=document.getElementById("median");
	a.innerHTML=median(total_enroll);

	var b = document.getElementById("percent");
	b.innerHTML=String(100*elig_amount/filt_amount)+"%";

  var b = document.getElementById("number");
  b.innerHTML=numBH;
});

function median(values){
  if(values.length ===0) return 0;

  values.sort(function(a,b){
    return a-b;
  });

  var half = Math.floor(values.length / 2);

  if (values.length % 2)
    return values[half];

  return (values[half - 1] + values[half]) / 2.0;
};