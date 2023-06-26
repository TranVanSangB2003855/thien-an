import{I as u,_ as p}from"./info-d3bea7c6.js";import{_ as g,l as f,o as l,c as o,a as e,b as r,F as _,r as b,d as y,e as h,n as k,f as x,t as v,p as C,g as I}from"./index-5ff26c4c.js";const w={data(){return{items:{}}},computed:{hasData(){try{const t=this.items[0][0].image[0];return!0}catch{return!1}}},methods:{async retrieveItems(){try{this.items=await u.getDataHome();const t=setInterval(()=>{document.querySelectorAll("[lazy]").length>2&&(f(),clearInterval(t))},50)}catch(t){console.log(t)}},formatter(t){return new Intl.NumberFormat("vi-VN",{style:"currency",currency:"VND"}).format(t)},goDetailItem(t){this.$router.push({name:"shop-details",params:{id:t}})},goShopPage(t){this.$router.push({name:"shop",query:{category:t}})}},created(){this.retrieveItems()}},s=t=>(C("data-v-0e4b0efd"),t=t(),I(),t),S={class:"hero"},N={class:"hero__slider owl-carousel"},V={class:"hero__items set-bg","data-setbg":"https://res.cloudinary.com/dwnunieno/image/upload/v1686467018/zqyath5qvxjzqu4chiei.png",lazy:""},z={class:"container"},D={class:"row"},T={class:"col-xl-5 col-lg-7 col-md-8"},X={class:"hero__text"},q=s(()=>e("h2",null,"SET ÁO CRT CỔ VUÔNG TƠ MIX SOOC",-1)),H=s(()=>e("p",null," Áo chất tơ ren chấm bi nổi 2 lớp tay phồng chuẩn hàng QC xịn xò có khoá sau dễ mặc ,quần chất tuyết mưa cạp cúc khoá. ",-1)),$=s(()=>e("span",{class:"arrow_right"},null,-1)),P={class:"hero__items set-bg","data-setbg":"https://res.cloudinary.com/dwnunieno/image/upload/v1686454028/xleoj3dcvydye9dpkkn6.png",lazy:""},B={class:"container"},E={class:"row"},F={class:"col-xl-5 col-lg-7 col-md-8"},L={class:"hero__text"},M=s(()=>e("h2",null,"SET CHANEL KÈM CV HỒNG",-1)),O=s(()=>e("p",null,[r(" Tone Hồng cực xinh dễ mặc lắm ạ! "),e("br"),r("Áo cototn khô l1. Cv đũi lụa. ")],-1)),j=s(()=>e("span",{class:"arrow_right"},null,-1)),A=h('<section class="banner spad" data-v-0e4b0efd><div class="container" data-v-0e4b0efd><div class="row" data-v-0e4b0efd><div class="col-lg-3 benefit-container" data-v-0e4b0efd><div class="banner__item" data-v-0e4b0efd><div class="banner__item__text benefit" data-v-0e4b0efd><h4 style="" data-v-0e4b0efd>Thanh toán khi nhận hàng</h4></div></div></div><div class="col-lg-3 benefit-container" data-v-0e4b0efd><div class="banner__item banner__item--middle" data-v-0e4b0efd><div class="banner__item__text benefit" data-v-0e4b0efd><h4 data-v-0e4b0efd>Đơn từ 120k giảm ngay 20k</h4></div></div></div><div class="col-lg-3 benefit-container" data-v-0e4b0efd><div class="banner__item banner__item--last" data-v-0e4b0efd><div class="banner__item__text benefit" data-v-0e4b0efd><h4 data-v-0e4b0efd>Đơn từ 300k giảm ngay 35k</h4></div></div></div><div class="col-lg-3 benefit-container" data-v-0e4b0efd><div class="banner__item banner__item--last" data-v-0e4b0efd><div class="banner__item__text benefit" data-v-0e4b0efd><h4 data-v-0e4b0efd>Đơn từ 500k giảm ngay 35k + freeship</h4></div></div></div></div></div></section>',1),G={class:"banner spad banner1"},K={class:"container"},Q={class:"row"},R=s(()=>e("div",{class:"banner__item"},[e("div",{class:"banner__item__text"},[e("h2",{style:{}},"Đầm"),e("a",null,"Xem ngay")])],-1)),U=[R],J=s(()=>e("div",{class:"banner__item banner__item--middle"},[e("div",{class:"banner__item__text"},[e("h2",null,"Váy"),e("a",null,"Xem ngay")])],-1)),W=[J],Y={class:"row"},Z=s(()=>e("div",{class:"banner__item banner__item--last"},[e("div",{class:"banner__item__text"},[e("h2",null,"Đồ bộ"),e("a",null,"Xem ngay")])],-1)),ee=[Z],te=s(()=>e("div",{class:"banner__item banner__item--last"},[e("div",{class:"banner__item__text"},[e("h2",null,"Áo"),e("a",null,"Xem ngay")])],-1)),ae=[te],se={class:"product spad"},ie={class:"container"},de=h('<div class="row" data-v-0e4b0efd><div class="col-lg-12" data-v-0e4b0efd><ul class="filter__controls" data-v-0e4b0efd><li class="active" data-filter=".feature" data-v-0e4b0efd>Nổi bật</li><li data-filter=".top-sales" data-v-0e4b0efd>Bán chạy</li><li data-filter=".new-arrivals" data-v-0e4b0efd>Mới nhất</li></ul></div></div>',1),ne={class:"row product__filter"},le=["title","onClick"],oe=["data-setbg"],ce=s(()=>e("ul",{class:"product__hover"},[e("li",null,[e("a",null,[e("img",{src:p,alt:"Chi tiết"})])])],-1)),_e=[ce],re={class:"product__item__text"},ve={class:"add-cart"},he=h('<div class="product__color__select" data-v-0e4b0efd><label for="pc-1" data-v-0e4b0efd><input type="radio" id="pc-1" data-v-0e4b0efd></label><label class="active black" for="pc-2" data-v-0e4b0efd><input type="radio" id="pc-2" data-v-0e4b0efd></label><label class="grey" for="pc-3" data-v-0e4b0efd><input type="radio" id="pc-3" data-v-0e4b0efd></label></div>',1);function be(t,a,me,ue,pe,i){return l(),o(_,null,[e("section",S,[e("div",N,[e("div",V,[e("div",z,[e("div",D,[e("div",T,[e("div",X,[q,H,e("a",{class:"primary-btn",onClick:a[0]||(a[0]=d=>i.goDetailItem("6485714b014919810cde086b"))},[r("Xem ngay "),$])])])])])]),e("div",P,[e("div",B,[e("div",E,[e("div",F,[e("div",L,[M,O,e("a",{class:"primary-btn",onClick:a[1]||(a[1]=d=>i.goDetailItem("648571b8014919810cde086d"))},[r("Xem ngay "),j])])])])])])])]),A,e("section",G,[e("div",K,[e("div",Q,[e("div",{class:"col-lg-6",onClick:a[2]||(a[2]=d=>i.goShopPage("Đầm"))},U),e("div",{class:"col-lg-6",onClick:a[3]||(a[3]=d=>i.goShopPage("Váy"))},W)]),e("div",Y,[e("div",{class:"col-lg-6",onClick:a[4]||(a[4]=d=>i.goShopPage("Đồ bộ"))},ee),e("div",{class:"col-lg-6",onClick:a[5]||(a[5]=d=>i.goShopPage("Áo"))},ae)])])]),e("section",se,[e("div",ie,[de,e("div",ne,[this.hasData?(l(!0),o(_,{key:0},b(this.items,(d,c)=>(l(),o(_,null,[(l(!0),o(_,null,b(d,(n,m)=>(l(),o("div",{class:k(["col-lg-3 col-md-3 col-sm-4 col-6 mix",{feature:c==0,"top-sales":c==1,"new-arrivals":c==2}]),key:m,style:x({display:c==0?"block":"none"})},[e("div",{class:"product__item",title:n.title,onClick:ge=>this.goDetailItem(n._id)},[e("div",{class:"product__item__pic","data-setbg":n.image[0],lazy:""},_e,8,oe),e("div",re,[e("h6",null,v(n.title),1),e("a",ve,v(n.title),1),e("h5",null,v(i.formatter(n.price)),1),he])],8,le)],6))),128))],64))),256)):y("",!0)])])])],64)}const ke=g(w,[["render",be],["__scopeId","data-v-0e4b0efd"]]);export{ke as default};
