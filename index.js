function next() {
  const findRes = $('body').html().match('Gamesboom');
  if(!findRes) {
	const page = $('#paging .act').next().html();
    $('#paging .act').next().click();
    const intF = setInterval(function(){
		const curPage = $('#paging .act').html();
		if(page == curPage) {
			clearInterval(intF);
			next();
        }
	}, 200)
  }
}
