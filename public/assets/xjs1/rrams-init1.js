$(document).ready(function () {
    console.log('oke-ready-rrams-v2')
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active12');
    });
    $('#x2sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active12');
    });
    $('#x2sidebarExpand').on('click', function () {
        $('#sidebar').toggleClass('active12');
    });
    
   //   var tableContextMenu = new ContextMenu("context-menu-items", menuItemClickListener);
    
    
   var mouseX, mouseY;
    $(document).mousemove(function(e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
    
    }).mouseover();
    
    var tableContextMenu = new ContextMenu("context-menu-items", menuItemClickListener, {
    mouseposX: mouseX, mouseposY: mouseY,
    openCallBack: function(contextMenu) {
      console.log("Opening context menu call back called");
        console.log('ovv = ' + mouseX + ',' + mouseY)
        
    }
    })
    
})

function menuItemClickListener(menu_item, parent)
{
  //alert("Menu Item Clicked: " + menu_item.text() + "\nRecord ID: " + parent.attr("data-row-id"));
}

