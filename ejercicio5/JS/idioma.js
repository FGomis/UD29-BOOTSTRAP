// traduce los elementos de datatables de ingles a español
$(document).ready(function() {
    $('#sortTable').dataTable( {
        "language": {
            "url": "//cdn.datatables.net/plug-ins/1.11.0/i18n/es_es.json"
        },
        dom: 'Bfrtip'
    } );
} );