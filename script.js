async function loadImages()
{
    const gallery=document.getElementsByClassName('thumbnails')[0];
    
    let response=await fetch('https://dummyjson.com/users?limit=0');
    response=await response.json();
    for (i=0;i<response.limit;i++)
    {
        gallery.innerHTML+='<div class="imgContainer"><img src="'+response.users[i].image+'"></div>'
    }

    $('.largeView').css('display: none;');

    $('.imgContainer > img').on('click',(e)=>{
        $('.largeView').fadeIn();
        $('.largeView').html(`<img src='${e.target.attributes.src.value}'>`);
    });

    $('.largeView').on('click',()=>{
        $('.largeView').fadeOut();
    })
}
loadImages();


