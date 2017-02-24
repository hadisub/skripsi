$(document).ready(function () {
var url = $("meta[name=url]").attr("content");

 $('#trainbtn').click(function(){


  //menampilkan tabel
 $('#divtabeltraining').load(url+'dashboard/displaytabeltrain', function(){
    //LOAD DATATABLES
    $('#dataTables-example').dataTable({
    "language": {
       "info": "Menampilkan halaman _PAGE_ dari _PAGES_",
       "sLengthMenu": "_MENU_  term per halaman",
       "sSearch": "Cari: ",
       "sNext": "Selanjutnya",
       "sPrevious": "Sebelumnya"
     },
    "processing": true,
    "serverSide": true,
    "ajax": url + "dashboard/tabeltrain"
      });
    });  
  });
});
