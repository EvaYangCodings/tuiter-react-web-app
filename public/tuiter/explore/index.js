import NavigationSidebar from "../NavigationSidebar/index.js";
import WhoToFollowList from "../WhoToFollowList/index.js";
function exploreComponent() {
    $('#wd-explore').append(`
        <div class="row wd-layout">
            <div class="col-xl-2 col-lg-1 col-md-2 col-sm-2 col-1">${NavigationSidebar()}</div> 
        </div>
`);
    $('.wd-layout').append(`
        <div class="col-xl-6 col-lg-7 col-md-9 col-sm-10 col-11">${NavigationSidebar()}</div> 
        <div class="col-4 d-none d-lg-block">${WhoToFollowList()}</div> 
    `);
}
$(exploreComponent);