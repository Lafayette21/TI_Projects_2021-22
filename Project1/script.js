/*jshint multistr: true */
function createAxisCanvas(canvas,ctx){
    ctx.fillStyle='white';
    ctx.fillRect(0,0,canvas.width,canvas.height);
    //axis drawing
    ctx.fillStyle="black";
    ctx.beginPath();
    //y axis
    ctx.moveTo(40,350);
    ctx.lineTo(40,40);
    ctx.lineTo(50,50);
    ctx.moveTo(40,40);
    ctx.lineTo(30,50);
    for(i=0;i<10;i++){
        ctx.moveTo(30,285-i*25);
        ctx.lineTo(50,285-i*25);
        ctx.font="bold 15px sans-serif";
        ctx.fillText(i+1,10,290-i*25);
    }
    ctx.font="bold 20px sans-serif";
    ctx.fillText("y(m)",30,30);
    //x axis
    ctx.moveTo(0,310);
    ctx.lineTo(550,310);
    ctx.lineTo(540,300);
    ctx.moveTo(550,310);
    ctx.lineTo(540,320);
    for(i=0;i<19;i++){
        ctx.moveTo(65+i*25,320);
        ctx.lineTo(65+i*25,300);
        ctx.font="bold 15px sans-serif";
        ctx.fillText(i+1,60+i*25,340);
    }
    ctx.font="bold 20px sans-serif";
    ctx.fillText("x(m)",555,315);
    ctx.stroke();
}

function arrow(ctx,canvas){
    let begin=50;
    let end=150;
    window.requestAnimationFrame(function loop(){
        ctx.beginPath();
        begin+=0.5;
        end+=0.5;
        ctx.clearRect(0,0,canvas.width,canvas.begin);
        ctx.fillStyle="white";
        ctx.fillRect(0,0,canvas.width,canvas.height);
        
        ctx.moveTo(500,begin);
        ctx.lineTo(500,end);
        ctx.lineTo(490,end-10);
        ctx.moveTo(500,end);
        ctx.lineTo(510,end-10);

        ctx.moveTo(400,begin);
        ctx.lineTo(400,end);
        ctx.lineTo(390,end-10);
        ctx.moveTo(400,end);
        ctx.lineTo(410,end-10);

        ctx.moveTo(300,begin);
        ctx.lineTo(300,end);
        ctx.lineTo(290,end-10);
        ctx.moveTo(300,end);
        ctx.lineTo(310,end-10);

        ctx.moveTo(200,begin);
        ctx.lineTo(200,end);
        ctx.lineTo(190,end-10);
        ctx.moveTo(200,end);
        ctx.lineTo(210,end-10);
        
        ctx.moveTo(100,begin);
        ctx.lineTo(100,end);
        ctx.lineTo(90,end-10);
        ctx.moveTo(100,end);
        ctx.lineTo(110,end-10);
        ctx.stroke();
        if(end>=300){
            begin=50;
            end=150;
        }
        window.requestAnimationFrame(loop)
    })
}

function mainAnimation(cont){
    let canvas=document.createElement('canvas');
    canvas.setAttribute("id","animation");
    canvas.width=600;
    canvas.height=350;
    cont.appendChild(canvas);
    let ctx=canvas.getContext('2d');
    ctx.fillStyle='white';
    ctx.fillRect(0,0,canvas.width,canvas.height);
    //Stworzenie zanimowanych strzalek
    //canvas.addEventListener("mouseover",arrow(ctx,canvas));
    arrow(ctx,canvas);
}
function adjustRightSide(){
    var contHeight = $('#content').height();
    $("#rightSide").height(contHeight);
}

function main(){
    var cont=document.getElementById("content");
    cont.innerHTML="";
    cont.innerHTML+="<h2>Czym jest pole grawitacyjne?</h2>"
    cont.innerHTML+="<p>Pole Grawitacyjne jest to takie pole, kt??re wytwarza ka??dy obiekt\
    posiadaj??cy mas??. Mamy z nim do czynienia na co dzie??, gdy?? b??d??c lud??mi, posiadamy\
    pewn?? mas??, wi??c wiedz??c lub nie, wytwarzamy pewne pole grawitacyjne. Jest ono jednak s??abe\
    w por??waniu, chocia??by do ziemi, kt??rej pole grawitacyjne powoduje, ??e chodzimy po jej powierzchni, a nie np. latamy.</p>"
    cont.innerHTML+="<p>Jako ??e pragn?? tutaj om??wi?? przede wszystkim rzuty, wi??c nie b??d?? wchodzi?? mocno w szczeg????y\
    skupi?? si?? tylko na tym co niezb??dne do om??wienia zagadnienia strony. Obiektem, kt??ry wytwarza nasze pole grawitacyjne, jest oczywi??cie\
    Ziemia i zak??adaj??c, ??e znajdujemy si?? na jej powierzchni, mo??emy przyj????, ??e si??a z jak?? ziemia nas (lub cokolwiek innego) przyci??ga jest r??wna:</p>";
    cont.innerHTML+="<center><math id=\"mth\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><mrow>\
                <mi>F</mi><mo>=</mo><mi>m</mi><mi>g</mi>\
        </mrow></math></center>";
    cont.innerHTML+="<p>Jest to si??a, kt??ra b??dzie ??ci??ga?? to czym rzucamy w d???? niezale??nie od rodzaju rzutu.</p>"
    cont.innerHTML+="<p> Jak dzia??a si??a w polu grawitacyjnym obrazuje poni??sza animacja:</p><br/>"
    mainAnimation(cont);
    //dalszy teks
    let akapit=document.createElement("p");
    akapit.innerText="W tym miejscu warto wyja??ni?? kilka innych poj????, kt??rymi bed?? si?? pos??ugiwa?? przy omawianiu zagadnienia:";
    let lista=document.createElement("ul");
    //element1
    let br1=document.createElement("br");
    let li1=document.createElement("li");
    li1.innerText="Poziom odniesienia - miejsce, kt??re przyjmujemy jako poziom 0, czyli w praktyce od kt??rego liczymy wysoko???? (zazwyczaj powierzchnia ziemi).";
    lista.appendChild(li1);
    lista.appendChild(br1);
    //element2
    let br2=document.createElement("br");
    let li2=document.createElement("li");
    li2.innerText="Tor - prosta lub krzywa, po kt??rej porusza si?? cia??o";
    lista.appendChild(li2);
    lista.appendChild(br2);
    //element3
    let br3=document.createElement("br");
    let li3=document.createElement("li");
    li3.innerText="Droga - Fragment toru";
    lista.appendChild(li3);
    lista.appendChild(br3);

    akapit.appendChild(lista);

    cont.appendChild(akapit);

    adjustRightSide();
}

function spadekAnimacja(){
    let h=70;
    let i=0;
    let canvas=document.getElementById("spadekAnimation");
    let ctx=canvas.getContext("2d");
    
    window.requestAnimationFrame(function loop(){
        
        h+=i*0.2;
        i+=0.3;
        ctx.clearRect(0,0,canvas.width,canvas.height);
        createAxisCanvas(canvas,ctx);
        ctx.beginPath();
        ctx.fillStyle="red";
        ctx.arc(280,h,30,0,2*Math.PI);
        ctx.fill();
        ctx.stroke();
        if(h<=275){
            window.requestAnimationFrame(loop)
        }
    })
    
}
function dolAnimancja(){
    let h=70;
    let i=0;
    let canvas=document.getElementById("dolAnimation");
    let ctx=canvas.getContext("2d");
    
    window.requestAnimationFrame(function loop(){
        
        h+=i*0.2;
        i+=0.4;
        ctx.clearRect(0,0,canvas.width,canvas.height);
        createAxisCanvas(canvas,ctx);
        ctx.beginPath();
        ctx.fillStyle="red";
        ctx.arc(280,h,30,0,2*Math.PI);
        ctx.fill();
        ctx.stroke();
        if(h<=275){
            window.requestAnimationFrame(loop)
        }
    })
    
}
function goraAnimancja(){
    let h=260;
    let flag=0;
    let canvas=document.getElementById("goraAnimation");
    let ctx=canvas.getContext("2d");
    
    window.requestAnimationFrame(function loop(){
        if(flag==0){
            h-=1;
            window.requestAnimationFrame(loop)
        }
        else if(flag==1 && h<=278){
            h+=1;
            window.requestAnimationFrame(loop)
        }
        ctx.clearRect(0,0,canvas.width,canvas.height);
        createAxisCanvas(canvas,ctx);
        ctx.beginPath();
        ctx.fillStyle="red";
        ctx.arc(280,h,30,0,2*Math.PI);
        ctx.fill();
        ctx.stroke();
        if(h<=50){
            flag=1;
        }
    })
}

function pion(){
    var cont=document.getElementById("content");
    cont.innerHTML="";
    cont.innerHTML="<h2>Rzut pionowy</h2>";
    cont.innerHTML+="<p>Rzut pionowy jest to po prostu ruch w linii prostej w kierunku pionowym. Wyr????niamy dwa rodzaje \
    rzut??w pionowych ze wzgledu na zwrot: </p>\
    <ol><li>Rzut pionowy do do??u</li><br/><li>Rzut pionowy do g??ry</li></ol></p>";
    cont.innerHTML+="<h3>Ad 1): Rzut pionowy do do??u</h3>";
    cont.innerHTML+="<p>Bierzemy nasze cia??o, kt??rym rzucamy i umieszczamy je na pewnej wysoko??ci wzgl??dem poziomu odniesienia. \
    Teraz ponownie mo??emy wykona?? rzut na dwa sposoby:</p>";
    cont.innerHTML+="<ul style=\"list-style-type: upper-roman;\"><li>Spadek Swobodny</li><br/><li>Rzut z pewn?? sil??</li></ul>";
    cont.innerHTML+="<h4>Ad I): Spadek Swobodny</h4>";
    cont.innerHTML+="<p>Spadek swobodny opisuje sytuacj??, w kt??rej \"puszczamy\" nasze cia??o z pewnej wysoko??ci (H), czyli jedyn?? si????, \
    kt??ra ??ci??ga cia??o w d???? jest si??a grawitacji.</p><br/>";
    //Spadek swobodny grafika
    cont.innerHTML+="<canvas width=600 height=350 id='spadekAnimation' onmouseover='spadekAnimacja()'></canvas>";
    
    cont.innerHTML+="<p>Zwyczajowo ruch rozpatrujemy w funkcji czasu i nie inaczej jest tutaj. \
    Jako ??e jest to ruch jednostajnie przyspieszony, gdzie przyspieszenie jest r??wne przyspieszeniu grawitacyjnemu. Wz??r\
    na pr??dko???? wyra??a si?? nast??puj??co i jest on analogiczny do tego znanego z ruchu jednostajnie przyspieszonego: </p>";
    // wzor na predkosc   
    cont.innerHTML+="<br><center><math id=\"mth\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><mrow>\
                    <mi>V(t)</mi><mo>=</mo><mi>g</mi><mi>t</mi>\
                    </mrow></math></center><br>";
    cont.innerHTML+="<p>Kolejn?? wielkosci?? jest przebyta droga od czasu, kt??r?? wyra??a si?? nast??puj??co: </p>";
    cont.innerHTML+="<br><center><math id=\"mth\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><mrow>\
                    <mi>s(t)</mi><mo>=</mo>\
                    <mfrac>  \
                        <mn>g</mn>  \
                        <mi>2</mi>  \
                    </mfrac>  \
                    <msup><mi>t</mi><mn>2</mn></msup>\
                    </mrow></math></center><br>";
    cont.innerHTML+="<p>Ostatnia wielkosci?? jest wysoko???? w danej chwili czasu, do kt??rej policzenia wykorzystuje si?? prost?? modyfikacj?? \
    wzoru powy??szego:</p>";
    cont.innerHTML+="<br><center><math id=\"mth\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><mrow>\
                    <mi>h(t)</mi><mo>=</mo>\
                    <mi>H</mi>\
                    <mo>-</mo>\
                    <mfrac>  \
                        <mn>g</mn>  \
                        <mi>2</mi>  \
                    </mfrac>  \
                    <msup><mi>t</mi><mn>2</mn></msup>\
                    </mrow></math></center><br>";
    cont.innerHTML+="<h4>Ad II): Rzut z pewn?? si????</h4>";
    cont.innerHTML+="<p>Jest to sytuacja bardzo podobna do spadku swobodnego z jedn?? tylko r????nic??, ??e na pocz??tku\
    Zosta??a nadana cia??u jaka?? pr??dko???? pocz??tkowa V<sub>0</sub>, kt??r?? teraz musimy uwzgl??dnia?? w obliczeniach. </p>";
    //Animacja Rzut w d????
    cont.innerHTML+="<canvas width=600 height=350 id='dolAnimation' onmouseover='dolAnimancja()'></canvas>";

    cont.innerHTML+="<p>Ponownie jest to ruch jednostajnie przyspieszony, jednak tym razem cia??o spada szybciej, poniewa?? ma ono pr??dko???? pocz??tkow?? od kt??rej zaczyna ruch.\
    Ten fakt jest odpowiednio uwzgl??dniony we wszystich wzorach.</p>";
    cont.innerHTML+="<p>Pr??dko????:</p>";
    cont.innerHTML+="<br><center><math id=\"mth\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><mrow>\
                    <mi>V(t)</mi><mo>=</mo><mi>V<sub>0</sub></mi><mo>+</mo><mi>g</mi><mi>t</mi>\
                    </mrow></math></center><br>";
    cont.innerHTML+="<p>Przebyta droga: </p>";
    cont.innerHTML+="<br><center><math id=\"mth\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><mrow>\
                    <mi>s(t)</mi><mo>=</mo>\
                    <mi>V<sub>0</sub></mi><mi>t</mi><mo>+</mo>\
                    <mfrac>  \
                        <mn>g</mn>  \
                        <mi>2</mi>  \
                    </mfrac>  \
                    <msup><mi>t</mi><mn>2</mn></msup>\
                    </mrow></math></center><br>";
    cont.innerHTML+="<p>Wysoko???? w danej chwili: </p>";
    cont.innerHTML+="<br><center><math id=\"mth\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><mrow>\
                    <mi>h(t)</mi><mo>=</mo>\
                    <mi>H</mi>\
                    <mo>-</mo>\
                    <mi>V<sub>0</sub></mi><mi>t</mi><mo>+</mo>\
                    <mfrac>  \
                        <mn>g</mn>  \
                        <mi>2</mi>  \
                    </mfrac>  \
                    <msup><mi>t</mi><mn>2</mn></msup>\
                    </mrow></math></center><br>";
    //Rzut pionowy do g??ry
    cont.innerHTML+="<h3>Ad 2): Rzut pionowy do g??ry</h3>";
    cont.innerHTML+="<p>Tym razem nasz ruch zaczyna si?? na poziomie odniesienia. Nadajemy cia??u jak???? pr??dko???? pocz??tkow?? tak aby mog??o wznie???? si?? do g??ry.\
    Ca??y czas jednak cia??o pozostaje pod wp??ywem dzia??ania si??y grawitacji, kt??ra dzia??aj??c w d????, przeciwdzia??a ruchowi cia??a.\
    Si??a ta stopniowo hamuje cia??o, kt??re w pewnym momencie zatrzyma si??, a nast??pnie padnie swobodnie (tak jak jest to om??wione wy??ej).\</p>"
    //rzut pionowy w g??re animacja
    cont.innerHTML+="<canvas width=600 height=350 id='goraAnimation' onmouseover='goraAnimancja()'></canvas>";
    
    cont.innerHTML+="<p>Poniewa?? si??a grawitacji przeciwdzia??a ruchowi, mamy do czynienia z ruchem jednostajnie op????nionym.\
    Op????nienie jest oczywi??cnie r??wne <i>g</i>, wi??kszo???? wzor??w, podobnie jak przy pozosta??ych rzutach pionowych to wzory z ruchu post??powego.</p>";
    cont.innerHTML+="<p>Pr??dko???? tym razem si?? stopniowo sie zmniejsza a?? do zera, wi??c: </p>";
    
    cont.innerHTML+="<br><center><math id=\"mth\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><mrow>\
    <mi>V(t)</mi><mo>=</mo><mi>V<sub>0</sub></mi><mo>-</mo><mi>g</mi><mi>t</mi>\
    </mrow></math></center><br>";
    cont.innerHTML+="<p>Droga od czasu r??wnie?? jest dana wzorem z ruchu opo??nionego, przy czym w tym wypadku jest ona r??wna\
    wysoko??ci na kt??rej znajduje sie cia??o:  </p>";
    cont.innerHTML+="<br><center><math id=\"mth\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><mrow>\
                    <mi>h(t)</mi><mo>=</mo>\
                    <mi>V<sub>0</sub></mi><mi>t</mi><mo>+</mo>\
                    <mfrac>  \
                        <mn>g</mn>  \
                        <mi>2</mi>  \
                    </mfrac>  \
                    <msup><mi>t</mi><mn>2</mn></msup>\
                    </mrow></math></center><br>";
    cont.innerHTML+="<p>W momencie w kt??rym cia??o dociera do swojej maksymalnej wysoko??ci zaczyna si?? spadek swobodny, kt??ry jest opisany w wy??ej na stronie w rozdziale 2.I).</p>";
    adjustRightSide();
}

function poziomAnimacja(){
    let yP=50;
    let xP=70;
    let i=0;
    let canvas=document.getElementById("poziomAnimation");
    let ctx=canvas.getContext("2d");
    window.requestAnimationFrame(function loop(){
        xP+=2.5;
        yP+=i*0.5;
        i+=0.1;
        ctx.clearRect(0,0,canvas.width,canvas.height);
        createAxisCanvas(canvas,ctx);
        ctx.beginPath();
        ctx.fillStyle="red";
        ctx.arc(xP,yP,30,0,2*Math.PI);
        ctx.fill();
        ctx.stroke();
        if(yP<=275){
            window.requestAnimationFrame(loop)
        }
    })
}
function poziomWektor(){
    let canvas=document.getElementById("poziomPredkosc");
    let ctx=canvas.getContext("2d");
    ctx.fillStyle="#191d21";
    ctx.fillRect(0,0,canvas.width,canvas.height);
    //Wektory predkosci
    ctx.beginPath();
    ctx.lineWidth=5
    ctx.strokeStyle="white";
    ctx.moveTo(40,40);
    //Vy
    ctx.lineTo(40,140);
    ctx.lineWidth=3;
    ctx.lineTo(25,130);
    ctx.moveTo(40,140);
    ctx.lineTo(55,130);
    ctx.fillStyle="white";
    ctx.font="20px Verdana";
    ctx.fillText("Vy",25,165);

    //Vx
    ctx.lineWidth=5;
    ctx.moveTo(40,40);
    ctx.lineTo(220,40);
    ctx.lineTo(210,25);
    ctx.moveTo(220,40);
    ctx.lineTo(210,55);
    ctx.font="20px Verdana";
    ctx.fillText("Vx",230,50);

    //V
    ctx.moveTo(40,40);
    ctx.lineTo(220,140);
    ctx.lineTo(220,120);
    ctx.moveTo(220,142);
    ctx.lineTo(200,142);
    ctx.font="20px Verdana";
    ctx.fillText("V",230,165);

    //Angle
    ctx.moveTo(40,40);
    ctx.arc(40,40,30,0,Math.PI/2);
    ctx.font="20px Verdana";
    ctx.fillText("??",55,85);
    ctx.stroke();
}

function poziom(){
    var cont=document.getElementById("content");
    cont.innerHTML="";
    var text="<h2>Rzut poziomy</h2>";
    text+="<p>Rzut poziomy jest podobnie jak pionowy rzutem po lini prostej, a raczej jego pr??b??.\
    Pr??bujemy rzuci?? w kierunku poziomym, nadaj??c pewn?? predko???? pocz??tkow?? (poziom??) jednak si??a grawitacji ??ci??ga nasze cia??o w d???? w wyniku czego\
    otrzymujemy ruch po pewnej p???? paraboli. Przykladem z ??ycia takiego rzutu jest rzucanie rzutkami do tarczy.</p>\
    <p> Spos??b w jaki przebiega rzut poziomy przedstawia \
    poni??sza animacja:</p>";
    cont.innerHTML=text;
    //rzut poziomy animacja
    cont.innerHTML+="<canvas width=600 height=350 id='poziomAnimation' onmouseover='poziomAnimacja()'></canvas>";
    

    cont.innerHTML+="<p>Najwazniejsz?? rzecz?? do zrozumienia w rzucie poziomym jest fakt, ??e poruszamy si?? w dw??ch p??aszczyznach \
    - przesuwamy si?? jednoczesnie w pionie i poziomie (tak samo jest w rzucie uko??nym). W pionie dzia??a si??a grawitacji, kt??ra ??ci??ga nas w d????, wi??c mamy tu do czynienia z ruchem \
    jednostajnie przyspieszonym. Natomiast w poziomie nie dzia??a ??adna si??a, wi??c w tym kierunku cia??o porusza si?? ruchem jednostajnym z pr??dko??ci?? \
    pocz??tkow?? V<sub>0</sub>. Rozpatruj??c te dwa kierunki nale??y obowi??zkowo pami??ta??, ??e czas ruchu w pionie i w poziomie jest taki sam, co jest kluczowe przy \
    przy rozwi??zywaniu zada??, w kt??rych mieszamy ze sob?? r????ne wzory.</p>";
    cont.innerHTML+="<p>Rozpatruj??c pr??dko???? musimy po????czy?? wiedz?? o wektorach z wiedz?? o rzutach pionowych, gdy?? aby policzy?? pr??dko???? w danej chwili musimy policzy?? predko????\
    w kierunku pionowym i wzi?????? pr??dko???? wypadkow?? z pr??dko??ci?? poziom?? (kt??ra jest sta??a)</p>";

    cont.innerHTML+="<canvas id='poziomPredkosc' height=200 width=300 style='background-color: #191d21' onmouseover='poziomWektor()'></canvas>";
    
    cont.innerHTML+="<p>Pr??dkosc wypadkow?? V mo??na teraz policzy?? na kilka sposob??w w zale??no??ci od posiadanych informacji:</p>";
    cont.innerHTML+="<ul><li>Znajac warto???? k??ta &alpha; mo??emy skorzysta?? z zale??no??ci trygonometrycznych</li>";
    cont.innerHTML+="<br><center><math id=\"mth\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><mrow>\
                    <mi>V<sub>y</sub></mi><mo>=</mo><mi>V</mi><mi>cos(&alpha;)</mi>\
                    </mrow></math></center><br>";
    cont.innerHTML+="<br><center><math id=\"mth\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><mrow>\
                    <mi>V<sub>x</sub></mi><mo>=</mo><mi>V</mi><mi>sin(&alpha;)</mi>\
                    </mrow></math></center><br>";

    cont.innerHTML+="<li>Znaj??c czas mo??emy skorzysta?? z wzor??w pochodz??cych z odpowiednich ruch??w:</li>";
    cont.innerHTML+="<br><center><math id=\"mth\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><mrow>\
                    <mi>V<sub>y</sub>(t)</mi><mo>=</mo><mi>g</mi><mi>t</mi>\
                    </mrow></math></center><br>";
    cont.innerHTML+="<br><center><math id=\"mth\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><mrow>\
                    <mi>V<sub>x</sub>(t)</mi><mo>=</mo><mi>V<sub>0</sub></mi>\
                    </mrow></math></center><br>";
    cont.innerHTML+="</ul>";

    cont.innerHTML+="<p>Przechodz??c do po??o??enia tym razem musimy rozpatrywa?? po??o??enie w kontek??cie dw??ch wymiar??w x i y w funkcji czasu. Liczymy je ze wzor??w:</p>";
    cont.innerHTML+="<br><center><math id=\"mth\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><mrow>\
                    <mi>x(t)</mi><mo>=</mo><mi>V<sub>x</sub></mi><mi>t</mi>\
                    </mrow></math></center><br>";
    cont.innerHTML+="<br><center><math id=\"mth\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><mrow>\
                    <mi>y(t)</mi><mo>=</mo>\
                    <mfrac>  \
                        <mn>g</mn>  \
                        <mi>2</mi>  \
                    </mfrac>  \
                    <msup><mi>t</mi><mn>2</mn></msup>\
                    </mrow></math></center><br>";
    cont.innerHTML+="<p>Osatnimi zagadnieniami s?? wysoko???? maksymalna i zasi??g czyli maksymalne odleg??o??ci na jakie mo??e polecie?? cia??o w \
                    dw??ch p??aszczyznach. S?? to w praktyce wzory powy??sze tylko od czasu ca??owitego ruchu</p>";
                    cont.innerHTML+="<br><center><math id=\"mth\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><mrow>\
                    <mi>z</mi><mo>=</mo><mi>V<sub>x</sub></mi><mi>t<sub>c</sub></mi>\
                    </mrow></math></center><br>";
    cont.innerHTML+="<br><center><math id=\"mth\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><mrow>\
                    <mi>h</mi><mo>=</mo>\
                    <mfrac>  \
                        <mn>g</mn>  \
                        <mi>2</mi>  \
                    </mfrac>  \
                    <msup><mi>t<sub>c</sub></mi><mn>2</mn></msup>\
                    </mrow></math></center><br>";

    adjustRightSide();
}

function ukosAnimacja(){
    let yP=274;
    let xP=70;
    let flag=0;
    let i=1;
    let canvas=document.getElementById("ukosAnimation");
    let ctx=canvas.getContext("2d");
    window.requestAnimationFrame(function loop(){
        xP+=3.5;
        if(flag==0){  
            yP-=i*3;
            i-=0.02;
        }
        else{
            yP+=i*3;
            i+=0.02;
        }
        ctx.clearRect(0,0,canvas.width,canvas.height);
        createAxisCanvas(canvas,ctx);
        ctx.beginPath();
        ctx.fillStyle="red";
        ctx.arc(xP,yP,30,0,2*Math.PI);
        ctx.fill();
        ctx.stroke();
        if(xP>=250 && flag==0){
            flag=1;
        }
        if(yP<=277){
            window.requestAnimationFrame(loop)
        }
    })
}
function ukosWektor(){
    let canvas=document.getElementById("ukosPredkosc");
    let ctx=canvas.getContext("2d");
    ctx.fillStyle="#191d21";
    ctx.fillRect(0,0,canvas.width,canvas.height);
    //Wektory predkosci
    ctx.beginPath();
    ctx.lineWidth=5
    ctx.strokeStyle="white";
    ctx.moveTo(40,160);
    //Vy
    ctx.lineTo(40,40);
    ctx.lineTo(25,50);
    ctx.moveTo(40,40);
    ctx.lineTo(55,50);
    ctx.fillStyle="white";
    ctx.font="20px Verdana";
    ctx.fillText("Vy",26,28);
    //Vx
    ctx.moveTo(40,160);
    ctx.lineTo(240,160);
    ctx.lineTo(230,145);
    ctx.moveTo(240,160);
    ctx.lineTo(230,175);
    ctx.fillStyle="white";
    ctx.font="20px Verdana";
    ctx.fillText("Vx",250,170);
    //V
    ctx.moveTo(40,160);
    ctx.lineTo(240,40);
    ctx.moveTo(240,39);
    ctx.lineTo(215,39);
    ctx.moveTo(240,39);
    ctx.lineTo(240,65);
    ctx.fillStyle="white";
    ctx.font="20px Verdana";
    ctx.fillText("V0",250,40);
    //Angle
    ctx.moveTo(40,160);
    ctx.arc(40,160,30,-Math.PI/2,0);
    ctx.font="20px Verdana";
    ctx.fillText("??",55,120);
    ctx.stroke();
}


function ukos(){
    let cont=document.getElementById("content");
    cont.innerHTML="";
    cont.innerHTML+="<h2>Rzut uko??ny</h2>";
    cont.innerHTML+="<p>Rzut uko??ny jest najbardziej skomplikowany w por??wnaniu do pozosta??ych. Wykonujemy taki rzut, na przyk??ad rzucaj??c si?? ??nie??kami lub pi??k??.\
    Rzucamy z poziomu odniesienia pod pewnym k??tem. Pi??ka najpierw si?? wznosi do pewnego poziomu, a nast??pnie opada, co odbywa si?? symetrycznie, przez wzgl??d na brak opor??w ruchu.\
    Przebieg ruchu przedstawia poni??sza animacja</p>";
    //Animacja ukos
    cont.innerHTML+="<canvas width=600 height=350 id='ukosAnimation' onmouseover='ukosAnimacja()'></canvas>";

    cont.innerHTML+="<p>Jak mo??emy zauwa??y?? ruch przebiega po symetrycznej paraboli i sam w sobie jest symetryczny. Oznacza to w praktyce, ??e\
     czas wznoszenia (t<sub>wz</sub>) jest r??wny czasowi opadania (t<sub>op</sub>). Analogicznie jak w ruchu poziomym ruch trzeba rozpatrywa?? w dw??ch p??aszczyznach\
    x i y. Si??a grawitacji ??ci??ga nasze cia??o w d????, wi??c w p??aszczy??nie pionowej mamy do czynienia z ruchem jednostajnie przyspieszonym. Natomiast w poziomie nie dzia??a zadna si??a, wi??c \
    sta??a pr??dko???? pocz??tkowa. Nie jest to jednak a?? takie proste poniew???? aby wprawi?? nasze cia??o w ruch po paraboli, pr??dko???? musi by?? pod pewnym k??tem wzgl??dem poziomu odniesienia.</p>"; 
    //Wektory rzut ukosny
    cont.innerHTML+="<canvas id='ukosPredkosc' height=200 width=300 style='background-color: #191d21' onmouseover='ukosWektor()'></canvas>";
    
    cont.innerHTML+="<p>Pr??dko??ci te mo??emy policzy?? znaj??c pr??dko???? V<sub>0</sub>:</p>";
    cont.innerHTML+="<br><center><math id=\"mth\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><mrow>\
                    <mi>V<sub>y</sub></mi><mo>=</mo><mi>V<sub>0</sub></mi><mi>cos(&alpha;)</mi>\
                    </mrow></math></center><br>";
    cont.innerHTML+="<br><center><math id=\"mth\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><mrow>\
                    <mi>V<sub>x</sub></mi><mo>=</mo><mi>V<sub>0</sub></mi><mi>sin(&alpha;)</mi>\
                    </mrow></math></center><br>";

    cont.innerHTML+="<p>Jednocze??nie dzialaj?? tak??e wzory w funkcjach czasu, kt??re znamy z ruchu post??powego, a kt??re w pierwszej po??owie ruchu wygl??daj?? nasp??puj??co\
    (W drugiej po przekroczeniu linii symetri (czyli gdy cia??o zaczyna spada??) s?? takie same jak dla poziomego).</p>";

    cont.innerHTML+="<br><center><math id=\"mth\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><mrow>\
                    <mi>V<sub>y</sub>(t)</mi><mo>=</mo><mi>V<sub>y</sub></mi><mo>-</mo><mi>g</mi><mi>t</mi><mo>=</mo><mi>V<sub>0</sub></mi><mi>cos(&alpha;)</mi><mo>-</mo><mi>g</mi><mi>t</mi>\
                    </mrow></math></center><br>";
    cont.innerHTML+="<br><center><math id=\"mth\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><mrow>\
                    <mi>V<sub>x</sub>(t)</mi><mo>=</mo><mi>V<sub>x</sub></mi><mo>=</mo><mi>V<sub>0</sub></mi><mi>sin(&alpha;)</mi>\
                    </mrow></math></center><br>";
    
    cont.innerHTML+="<p>Rozpatruj??c po??o??enie uzyskujemy nast??puj??ce wzory: </p>";
    cont.innerHTML+="<br><center><math id=\"mth\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><mrow>\
                    <mi>x(t)</mi><mo>=</mo><mi>V<sub>x</sub></mi><mi>t</mi><mo>=</mo><mi>V<sub>0</sub></mi><mi>sin(&alpha;)</mi><mi>t</mi>\
                    </mrow></math></center><br>";
    cont.innerHTML+="<br><center><math id=\"mth\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><mrow>\
                    <mi>y(t)</mi><mo>=</mo>\
                    <mfrac>  \
                        <mn>g</mn>  \
                        <mi>2</mi>  \
                    </mfrac>  \
                    <msup><mi>t</mi><mn>2</mn></msup>\
                    </mrow></math></center><br>";
    cont.innerHTML+="<p>Maksymalna wysoko???? na jak?? mo??e wznie???? si?? cia??o jest po??o??eniem y od czasu wznoszenia si??: </p>";
    cont.innerHTML+="<br><center><math id=\"mth\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><mrow>\
                    <mi>h<sub>max</sub></mi><mo>=</mo>\
                    <mfrac>  \
                        <mn>g</mn>  \
                        <mi>2</mi>  \
                    </mfrac>  \
                    <msup><mi>t<sub>wz</sub></mi><mn>2</mn></msup>\
                    </mrow></math></center><br>";
    cont.innerHTML+="<p>Przy liczeniu zasi??gu wykorzystujemy to, ??e tor ruchu jest symetryczny. Liczymy po??o??enie w poziomie od czasu wznowszenia\
    a nast??pnie przemna??amy to przez dwa, gdy?? przy spadaniu cia??o przebywa tak?? sam?? drog?? jak przy wznoszeniu:</p>";
    cont.innerHTML+="<br><center><math id=\"mth\" xmlns=\"http://www.w3.org/1998/Math/MathML\"><mrow>\
                    <mi>z</mi><mo>=</mo><mi>2V<sub>x</sub></mi><mi>t</mi><mo>=</mo><mi>2V<sub>0</sub></mi><mi>sin(&alpha;)</mi><mi>t</mi>\
                    </mrow></math></center><br>";
    adjustRightSide();

}

function page1(){
    window.open("https://www.youtube.com/watch?v=fMgPX4ktGH8");
}
function page2(){
    window.open("https://home.agh.edu.pl/~kakol/efizyka/");
}
function page3(){
    window.open("https://www.naukowiec.org/wiedza/fizyka.html");
}
function page4(){
    window.open("http://fizyka.dk/teoria/kinematyka/rzut-pionowy-rzut-poziomy-rzut-ukosny/rzut-pionowy-rzut-poziomy-rzut-ukosny-definicje-twierdzenia-wzory");
}