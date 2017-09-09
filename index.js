function next() {
  console.log('next');
  const findRes = $('body').html().match('Gamesboom');
  if(!findRes) {
	const page = $('#paging .act').next().html();
    $('#paging .act').next().click();
    const intF = setInterval(function(){
		const curPage = $('#paging .act').html();
		console.log(page+'='+curPage);
		if(page == curPage) {
			clearInterval(intF);
			next();
        }
	}, 10)
  }
}
