$(() => {
    $('#add').on('click', () => {
        const title = $('#title').val()
        const paragraph = $('#paragraph').val()
        $('.box3').append(`<div class="box4"><div>${title}</div><div>${paragraph}</div></div>`)
    })
})
/*$(() => {
    $('#add').on('click', () => {
        const title = $('#title').val()
        const paragraph = $('#paragraph').val()
        $('#output1').append(title)
        $('#output2').append(paragraph)
        <]

    })

})*/
