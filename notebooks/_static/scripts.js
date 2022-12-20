<script>
    function bgeneto1877_refresh_cell(cell) {
        if ( (cell.innerHTML.match(/#@title/i)) == null ) return;
        if ( cell.bgeneto1877 ) return;
        cell.bgeneto1877 = true;
        var div = document.createElement('div');
        cell.parentNode.insertBefore( div, cell.nextSibling );
        div.style.textAlign = 'center';
        var a = document.createElement('a');
        div.appendChild(a);
        a.href='#'
        a.bgeneto1877 = cell;
        a.setAttribute( 'onclick', "bgeneto1877_toggle(this); return false;" );
        cell.style.visibility='hidden';
        cell.style.position='absolute';
        a.innerHTML = '[show code]';

    }

    function bgeneto1877_refresh() {
        if( document.querySelector('.code_cell .input') == null ) {
            // for exported html
            var codeCells = document.querySelectorAll('.jp-InputArea')
            codeCells[0].style.visibility = 'hidden';
            codeCells[0].style.position = 'absolute';
            for( var i = 1; i < codeCells.length; i++ ) {
                bgeneto1877_refresh_cell(codeCells[i].parentNode)
            }
            window.onload = bgeneto1877_refresh;
        }
        else {
            // for jupyter editor
            var codeCells = document.querySelectorAll('.code_cell .input');
            for( var i = 0; i < codeCells.length; i++ ) {
                bgeneto1877_refresh_cell(codeCells[i])
            }
            window.setTimeout( bgeneto1877_refresh, 1000 )
        }
    }

    function bgeneto1877_toggle(a) {
        if( a.bgeneto1877.style.visibility=='hidden' ) {
            a.bgeneto1877.style.visibility='visible';
            a.bgeneto1877.style.position='';
            a.innerHTML = '[hide code]';
        }
        else {
            a.bgeneto1877.style.visibility='hidden';
            a.bgeneto1877.style.position='absolute';
            a.innerHTML = '[show code]';
        }
    }

    bgeneto1877_refresh()
</script>
