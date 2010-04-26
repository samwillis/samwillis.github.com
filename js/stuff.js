function email(name, domain, suffix, text)
{
   var address = name + "\u0040" + domain + "." + suffix;
   var url = "mailto:" + address;
   if( ! text )
   {
      text = address;
   }
   document.write("<a href=\"" + url + "\">" + text + "</a>");
}

Slimbox.scanPage = function() {
	$$(document.links).filter(function(el) {
		return el.rel && el.rel.test(/^lightbox/i);
	}).slimbox({/* Put custom options here */}, null, function(el) {
		return (this == el) || ((this.rel.length > 8) && (this.rel == el.rel));
	});
};
window.addEvent("domready", Slimbox.scanPage);


window.addEvent('domready',function() {
	$$('a.img').each(function(el){
		el.addEvent('mouseover', function(){
			if (el.rel){
				rel = el.rel;
				$$(document.links).filter(function(el) {
					return el.rel && (el.rel == rel);
				}).each(function(item){
					item.fade(0.6);
				});
			}
			el.fade(1);
		});
		el.addEvent('mouseout', function(){
			if (el.rel){
				rel = el.rel;
				$$(document.links).filter(function(el) {
					return el.rel && (el.rel == rel);
				}).each(function(item){
					item.fade(1);
				});
			}
		});
	})
});
