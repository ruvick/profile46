document.addEventListener('DOMContentLoaded', function () { 

    let all_select_options = document.querySelectorAll("#zink_price_blk_60_27 .select__option");

    for (let index = 0; index < all_select_options.length; index++) { 
        all_select_options[index].addEventListener('click', function () { 
              let size = all_select_options[index].dataset.value;
              console.log(size)
              console.log(all_select_options[index])
              if (size == "0.4 мм")  document.getElementById('z_p_62_27').innerHTML = "105 руб./шт."
              if (size == "0.5 мм")  document.getElementById('z_p_62_27').innerHTML = "120 руб./шт."
              if (size == "0.55 мм")  document.getElementById('z_p_62_27').innerHTML = "130 руб./шт."
              if (size == "0.6 мм")  document.getElementById('z_p_62_27').innerHTML = "125 руб./шт."
        })
    }

    let all_select_options1 = document.querySelectorAll("#zink_price_blk_27_28 .select__option");

    for (let index = 0; index < all_select_options1.length; index++) { 
        all_select_options1[index].addEventListener('click', function () { 
              let size = all_select_options1[index].innerHTML
              console.log(size)
              if (size == "0.4 мм")  document.getElementById('z_p_27_28').innerHTML = "70 руб./шт."
              if (size == "0.5 мм")  document.getElementById('z_p_27_28').innerHTML = "80 руб./шт."
             
        })
    }

    let all_select_options2 = document.querySelectorAll("#polimer_price_blk_60_27 .select__option");

    for (let index = 0; index < all_select_options2.length; index++) { 
        all_select_options2[index].addEventListener('click', function () { 
              let size = all_select_options2[index].innerHTML
              console.log(size)
              if (size == "0.5 мм")  document.getElementById('p_p_60_27').innerHTML = "115 руб./шт."
              if (size == "0.6 мм")  document.getElementById('p_p_60_27').innerHTML = "125 руб./шт."
             
        })
    }


})