var http=require('http');
var querystring=require('querystring');
var qs,name,roll,dept,gender,email,mob,yr;
http.createServer(function(req,res){
    var data1='';
    req.on('data',function(chunk)
    {
        console.log(chunk);
        data1+=chunk;
        console.log("data in string format :"+data1);
    });
    req.on('end',function(){
        qs=querystring.parse(data1);
        console.log(qs);
        name=qs['name'];
        roll=qs['rno'];
        dept=qs['department'];
        gender=qs['gender'];
        email=qs['email'];
        mob=qs['phone'];
        yr=qs['year'];
        res.write("DETAILS STORED AFTER REGISTRATION: \n\n");
        res.write("WELCOME "+name+"..........\n\nROLL NUMBER:   "+roll+" \n\nDEPARTMENT:   "+dept + "\n\nGENDER:   "+gender+"\n\nEMAIL ID :   "+email );
        res.write("\n\nYOUR MOBILE NUMBER IS:   "+mob+"\n\nYOUR YEAR OF  STUDY IS:   "+yr);
        res.end();
    })
}).listen(7777);
console.log("started....");