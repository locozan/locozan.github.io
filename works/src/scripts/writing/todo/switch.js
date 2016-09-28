void function name(){

  var control = document.getElementById("control");
  var finding = document.getElementById('finding');
  var adding = document.getElementById('adding');
  var add = control.getElementsByTagName("li")[0];
  var find = control.getElementsByTagName("li")[1];
  var increase = document.getElementById("increase");
  var search = document.getElementById("search");

  increase.addEventListener( 'click', function( event ){
    add.style.backgroundColor = "#5B7087";
    find.style.backgroundColor = "#C0C0C0";
    finding.style.display = "none";
    adding.style.display = "block";
    adding.style.backgroundColor = "#5B7087";
    location.reload();
  }, false)


  search.addEventListener( 'click', function( event ){
    find.style.backgroundColor = "#6E8DB4";
    add.style.backgroundColor = "#C0C0C0";
    finding.style.display = "block";
    adding.style.display = "none";
    finding.style.backgroundColor = "#6E8DB4";
  }, false)
  
}();
