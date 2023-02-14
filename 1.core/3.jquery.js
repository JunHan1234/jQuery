//jquery의 find return값은 collection이다.
$('#myId') // 예로 <div id='myId'></div> 를 찾아낸다.

// 과제: class myClass DOM을 찾아라.
$('.myClass') // 예로 <div class='myClass'></div> 를 찾아낸다.

// 과제: name attribute value 가 surname 인 input DOM 들을 찾아라.
$('input[name="surname"]') // <input name='surname'/> 를 찾아낸다.

$('#content ul.people li')
/*
<div id='content'>
    <ul class='people'>
        <li></li>
    </ul>
</div>
*/

$('a.external:first')
/*
<a class='external'></a> //collection에 담기는 녀석.
<a class='external'></a>
*/

$('li:odd') //index가 홀수번째인 요소를 모두 가져온다.
/*
<ul>
    <li></li>
    <li></li> //collection에 담기는 녀석.
    <li></li>
    <li></li> //collection에 담기는 녀석.
</ul>
*/

$('div:visible') //현재 화면에 보이는것을 골라낸다.

$('a[rel$="thinger"]') //끝이름이 thinger인 녀석들이 collection에 담긴다.
/*
<a rel='do-nothinger'></a> --
<a rel='so-thinger'></a> --
*/

$('div.foo').has('p') //<p></p> 가 담겨있는 div element만 골라서 collection에 담긴다.
/*
<div class='foo'> --
    <p></p> --
</div> --
<div class='foo'></div>
*/

$('ul li').filter('.current') //filter는 current class를 가지고 있는녀석을 찾아낸다.
/*
<ul>
    <li class='current'></li> --
    <li></li>
</ul>
*/

$('ul li').not('.current') //not은 current class를 가지고있지 않은 녀석을 찾아낸다.
/*
<ul>
    <li class='current'></li>
    <li></li> --
</ul>
*/

$('ul li').eq(1) //collection에서 index가 1번째인 녀석을 찾아낸다.
/*
<ul>
    <li class='current'></li>
    <li></li> --
</ul>
*/

$('form :button') //form의 button들을 찾아낸다.
/*
<form>
    <button></button> --
    <input type='button'/> --
</form>
*/

$('form :radio') // <input type='radio'/>
$('form :checkbox') // <input type='checkbox'/>    //눌렸는지 참 거짓 판별법: return값이 0이면 checkbox가 눌리지 않은것. hr이용.

$('form :checked')
/*
<input type='radio'/> --
<input type='checkbox'/> --
<select><option></option></select> -- //check된 옵션.
*/

$('form :selected') // <select><option></option></select>

$('form :enabled')
$('form :disabled')

$('form :file') // <input type='file'/>

$('form :input')
/* 이 모두가 collection에 담긴다.
<input type='text'/>
<textarea></textarea>
<select></select>
<button type='submit'></button>
*/

$('form :text') // <input type='text'/>

$('form :password') // <input type='password'/>

$('form input[name="gender"]:radio')
/*
<input type='radio' name='gender'/>
*/

$('form :reset') // <input type='reset'/> //$('form :reset').알고리즘으로 개발자가 설정가능.

$('form :submit') // <input type='submit'/>