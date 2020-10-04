$(".seven-wonders").append('<div class="great-wall">the great wall of china</div>')

$(".seven-wonders").append('<div class="Petra1">Petra</div>')



$(".Petra1").append('<br>')
$(".seven-wonders").append('<div class="Petra2"></div>')
$(".Petra1").append('<img id="image-petra" src="file:///C:/Users/aqrab/OneDrive/Desktop/petra.jfif"/>')

$(".seven-wonders").append('<div class="Petra-info" style="display: none"><b> Petra one of the world wonders</div>')
$(".Petra-info").append('<br>')
$(".Petra1").append('<br>')
$(".Petra1").append('<button id="go-to">go to</button>')
$(".Petra-info").append('<img id="image-petra1" src="https://velvetescape.com/wp-content/uploads/2011/11/IMG_1953-1280x920.jpg"/>')
$(".Petra-info").append('<img id="image-petra2" src="https://www.toledohotel.jo/content/images/thumbs/0000683_petra_550.jpeg"/>')
$(".Petra-info").append('<img id="image-petra3" src="https://s27363.pcdn.co/wp-content/uploads/2016/05/Treasury-Petra.jpg.optimal.jpg"/>')
$(".Petra-info").append('<img id="image-petra4" src="https://jordantrail.org/wp-content/uploads/2017/01/4-Little-Petra-to-Petra8.jpg"/>')
$("#image-petra1").height(300)
$("#image-petra1").width(300)
$("#image-petra2").height(300)
$("#image-petra2").width(300)
$("#image-petra3").height(300)
$("#image-petra3").width(300)
$("#image-petra4").height(300)
$("#image-petra4").width(300)



$(".Petra-info").append('<br>')
$(".Petra-info").append('Declared a World Heritage Site in 1985, Petra was the capital of the Nabataean empire of King Aretas IV, and likely existed in its prime from 9 B.C. to A.D. 40. The members of this civilization proved to be early experts in manipulating water technology, constructing intricate tunnels and water chambers, which helped create an pseudo-oasis. A number of incredible structures carved into stone, a 4,000-seat amphitheater and the El-Deir monastery have also helped the site earn its fame.')


$(".Petra-info").append('<br>')
$(".Petra-info").append('<button id="return">return</button>')



$('#go-to').click(function(){
		$(".Petra1").hide()
		$(".Petra-info").show()
})
	$('#return').click(function(){
		$(".Petra1").show()
		$(".Petra-info").hide()
})

