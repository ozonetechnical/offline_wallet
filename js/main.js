function changetoETH(){
  $('.network').val(64).trigger("change");
}

$('.submit').on('click',function(){
  var prvkey = $('.rc').attr('data-prv');
  var address = $('.rc').text();
  var amount = $('#amount_').val();
  var txid = $('#txid_').val();
  var outindex = $('#outindex_').val();
  var destination = $('#dest_').val();
  var script=$('#script_').val();
  var fee=$('#fee_').val();
  var seq = 0xffffffff-1;
      var tx = coinjs.transaction();
      tx.addinput(txid, outindex, script, seq);
      tx.addoutput(destination, amount);
      var tx2 = coinjs.transaction();
    	var txunspent = tx2.deserialize(tx.serialize());
      var signed = txunspent.sign(prvkey);
      $('.hash-tx').text(signed);
      hashqr = new QRCode("hashqr_");
      hashqr.makeCode("https://offline.o.zone/hash/"+ signed); 
      hidePage();
      showHash();




})
