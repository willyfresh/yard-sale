// creates homepage from JSON object

function itemGrid(){

  var pageContent='<div class="row">';

      //carousel
      for(var a in itemsForSale){
        if(a==0) continue;
        pageContent+='<div class="col-xs-12 col-sm-6 col-md-3">';
          pageContent+='<div id="'+itemsForSale[a].iid+'" class="carousel slide" data-ride="carousel">';
            pageContent+='<div class="carousel-inner" role="listbox">';

              //slides
              for(var b in itemsForSale[a].img){
                pageContent+='<div class="item';
                if(b==0)pageContent+=' active';
                pageContent+='">';
                  pageContent+='<a href="#'+itemsForSale[a].iid+'" id="'+itemsForSale[a].img[b][0]+'-link" onclick="itemDetail(\''+itemsForSale[a].iid+'\');">';
                    pageContent+='<img src="images/optimized/'+itemsForSale[a].img[b][0]+'_tn.jpg" class="img-fluid" style="width: 100%; height: auto;" alt="'+itemsForSale[a].img[b][1]+' Thumb">';
                pageContent+='</a></div>';

              }

            pageContent+='</div>';

            //controls
            if(itemsForSale[a].img.length != 1) {
              pageContent+='<a class="left carousel-control" href="#'+itemsForSale[a].iid+'" role="button" data-slide="prev">';
                pageContent+='<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>';
              pageContent+='<span class="sr-only">Previous</span></a>';
              pageContent+='<a class="right carousel-control" href="#'+itemsForSale[a].iid+'" role="button" data-slide="next">';
                pageContent+='<span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>';
              pageContent+='<span class="sr-only">Next</span></a></div>';
            }

            //title+price
            pageContent+='<div id="'+itemsForSale[a].iid+'Title" class="home-tit bg-primary text-center">';
            pageContent+='<a href="#'+itemsForSale[a].iid+'" id="'+itemsForSale[a].iid+'-link" onclick="itemDetail(\''+itemsForSale[a].iid+'\');">'+itemsForSale[a].tit+'<br>$'+itemsForSale[a].usd+'</a></div>';
        pageContent+='</div>';

		// ***wtf?!?*** it forgets to add a closing div on these numbers...
        if(a==6 || a==9) pageContent+='</div>';

        //new row?
        //if ((a++) % 2 == 0) if(a != 1) pageContent+='<div class="clearfix hidden-lg hidden-md hidden-sm"></div>';
        if (a==4||a==8) pageContent+='</div><div class="row">'
      }

    pageContent+='</div>';

  //write to page
  $('#page-content').html(pageContent);

  //carousel options
  $('.carousel').carousel({
    interval: false
  });
}

function itemDetail(itemToDisplay){

  //object
  var itd = $.grep(itemsForSale, function(item,i) {
    return item.iid == itemToDisplay;
  });
  //title and description
  var pageContent='<div class="row"><div class="col-lg-12">';
    pageContent+='<a href="index.html" class="btn btn-primary btn-lg btn-block">&laquo; Back to the Item List</a>';
  if(!itd[0]) pageContent+= "<h2>Item does not exist!</h2><p>This item is no longer for sale. Thank you for stopping by!</p>";
  else{
    pageContent+='<h2>'+itd[0].tit+' - $'+itd[0].usd+'</h2>';
    pageContent+='<p>'+itd[0].dsc+'</p>';

    //images
    for(var c in itd[0].img){
      pageContent+='<figure class="figure">';
      pageContent+='<img src="images/optimized/'+itd[0].img[c][0]+'.jpg" class="figure-img img-fluid img-rounded" alt="'+itd[0].img[c][1]+'" />';
      pageContent+='<figcaption class="figure-caption">'+itd[0].img[c][1]+'</figcaption></figure><hr />';
    }
  }

  pageContent+='</div></div>';
  //write to page
  $('#page-content').html(pageContent);
}
