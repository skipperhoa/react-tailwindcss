export const html = `<p>Nay mình sẽ làm một chức năng đó là "<strong>watermark</strong>" cho hình ảnh. <strong>Watermark </strong>thường được dùng nhiều trong website, chẳng hạn người dùng muốn add một logo lên tấm hình của sản phẩm, ta có thể dùng cách này để thêm hàng loạt nhé</p>

 <p><iframe frameborder="0" height="315" src="https://www.youtube.com/embed/qJh8COMd0SQ" title="YouTube video player" width="560"></iframe></p>
 
 <p><br />
 Trong Nodejs có một thư viện giúp ta xử lý vấn đề này "<strong>jimp</strong>"</p>
 
 <pre class="brush:jscript;gutter:false;">
 npm install --save jimp</pre>
 
 <p><strong>jimp :</strong> Là một thư viện xử lý hình ảnh được hổ trợ trên&nbsp;<strong>Nodejs</strong>, được viết bằng ngôn ngử javascript, có các loại hổ trợ sau<br />
 <em>@jimp/jpeg<br />
 @jimp/png<br />
 @jimp/bmp<br />
 @jimp/tiff<br />
 @jimp/gif</em></p>
 
 <p>Bạn có thể tìm hiểu thêm tại đây : <em>https://www.npmjs.com/package/jimp</em></p>
 
 <p>Okay, sau khi bạn đã cài đặt xong, ta tiến hàng setup nó thử xem sau :&nbsp;</p>
 
 <pre class="brush:jscript;gutter:false;">
 const Jimp = require("jimp");
 
 const ORIGINAL_IMAGE =__dirname+"/images/create-project-laravel5_8-using-composer-01.jpg";
 
 const LOGO = __dirname+"/images/logo.png";
 
 //save image name
 const FILENAME = "create-project-laravel5_8-using-composer-01.jpg"; 
 
 const main = async (a) =&gt; {
  
   const [image, logo] = await Promise.all([
     Jimp.read(a),
     Jimp.read(LOGO)
   ]);
 
   logo.resize(logo.bitmap.width , Jimp.AUTO);
 
   const X=10; 
   const Y=10;
 
   return image.composite(logo, X, Y, [
     {
       mode: Jimp.BLEND_SCREEN,
       opacitySource: 0.1,
       opacityDest: 1
     }
   ]);
 };
 
 main(ORIGINAL_IMAGE).then(image =&gt; image.write(FILENAME));</pre>
 
 <p>Để chạy project chạy câu lệnh CMD sau:</p>
 
 <pre class="brush:jscript;gutter:false;">
 node watermark.js </pre>
 
 <p>Các bạn sẽ thấy được hình được save tại project, các bạn hãy mở lên xem thử nhé.<br />
 Trong bài viết này mình chỉ các bạn cách tạo watermark lên hình ảnh rồi, các bạn có thể kết hợp với bài viết<strong><a href="https://hoanguyenit.com/crawl-data-website-using-nodejs.html"><span style="color:#FF0000"> Crawl Data Website Using Nodejs</span></a></strong>&nbsp;<br />
 để có thể vừa download hình ảnh về và vừa làm watermark hình ảnh luôn một lượt nhé!</p>
 
 <p>&nbsp;</p>
 
 <p><iframe frameborder="0" height="315" src="https://www.youtube.com/embed/Ado3oqG4_Tk" title="YouTube video player" width="560"></iframe></p>
 
 <p><u><em><strong>Full Code Crawl Data Website and Image Watermark&nbsp;</strong></em></u></p>
 
 <pre class="brush:jscript;gutter:false;">
 //file: index.js
 const rp = require("request-promise");
 const cheerio = require("cheerio");
 const request = require('request');
 const url = require('url')
 const https = require('https')
 const sizeOf = require('image-size')
 const fs = require("fs");
 const dslink = "dslink.txt";
 const domain = "https://hoanguyenit.com";
 const img_width=500;
 const img_heigth=250;
 
 ///watemat
 const Jimp = require("jimp");
 const LOGO = __dirname+"/images/logo.png";
 const main = async (a) =&gt; {
     //  console.log( a);
     const [image, logo] = await Promise.all([
       Jimp.read(a),
       Jimp.read(LOGO)
     ]);
   
     logo.resize(logo.bitmap.width , Jimp.AUTO);
    // const X=30;
    // const Y=image.bitmap.height - logo.bitmap.height;
     //console.log(X +"/"+Y);
     const X=10;
     const Y=10;
   
     return image.composite(logo, X, Y, [
       {
         mode: Jimp.BLEND_SCREEN,
         opacitySource: 0.1,
         opacityDest: 1
       }
     ]);
   };
 //end
   
 
 
 var array = fs.readFileSync(dslink).toString().split("\n");
 function sleep(ms) {
     return new Promise(resolve =&gt; setTimeout(resolve, ms));
 }
 function removeItemAll(arr, value) {
     var i = 0;
     while (i &lt; arr.length) {
         if (arr[i] === value) {
             arr.splice(i, 1);
         } else {
             ++i;
         }
     }
     return arr;
 }
 async function crawler() {
     await sleep(1000);
     for (i in array) {
         const linkchay = array[i];
 
         try {
             const options = {
                 uri: linkchay,
                 transform: function (body) {
                     //Khi lấy dữ liệu từ trang thành công nó sẽ tự động parse DOM
                     return cheerio.load(body);
                 },
             };
             var $ = await rp(options);
         } catch (error) {
             console.log("Link dang dung:" + array[i]);
             return error;
         }
 
         /* Lấy tên và miêu tả của tutorial*/
         const title = $(".ten_title").text().trim();
         //const description = $(".entry-content &gt; p").text().trim();
 
         /* Phân tích các table và sau đó lấy các posts.
            Mỗi table là một chương 
         */
         const tableContent = $(".info_content");
         let data = [];
         // Tên của chương đó.
         let chaperTitle = tableContent.find("p").text().trim();
 
 
         //Tìm bài viết ở mỗi chương
         let namefile = "";
         let chaperData = []
         const chaperLink = tableContent.find("p").find("img");
      
         for (let j = 0; j &lt; chaperLink.length; j++) {
             const post = $(chaperLink[j]);
             const postLink = post.attr("src");
             //download
             const n = postLink.lastIndexOf("/");
             const filename = postLink.substring(n + 1, postLink.length);
             namefile = filename;
             download(postLink, filename, function () {
                 //console.log("Link:"+linkchay);
             });
             const postTitle = post.text().trim();
             chaperData.push({
                 postTitle,
                 linkchay,
                 filename,
             });
         }
         data.push({
             chaperTitle,
             chaperData,
 
         });
 
 
         // Lưu dữ liệu về máy
         fs.writeFileSync('data.json', JSON.stringify(data))
         console.log(linkchay + "-------------&gt;done");
         removeItemAll(array, linkchay);
         await sleep(1000);
     }
 
 
 };
 
 crawler();
 
 async function getFilesizeInBytes(filename) {
     const stats = fs.statSync(filename);
     const fileSizeInBytes = stats.size;
     return fileSizeInBytes;
 }
 
 var download = function (uri, filename, callback) {
     var link = "";
     if (uri.search("https") == -1) {
         link = domain + "/" + uri;
     } else {
         link = uri;
     }
   
     const imgUrl = link;
     const options = url.parse(imgUrl);
     https.get(options, function (response) {
         const chunks = []
         response.on('data', function (chunk) {
           chunks.push(chunk)
         }).on('end', function() {
           const buffer = Buffer.concat(chunks)
           let width = sizeOf(buffer).width;
           let height = sizeOf(buffer).height;
           //check size image mà ta muốn lấy
           if(width&gt;200 &amp;&amp; height&gt;200){
             request.head(link, function (err, res, body) {
                 if(res.statusCode==200){
                     request(link).pipe(fs.createWriteStream('./images/' + filename)).on('close', callback);
                     setTimeout(function(){
                         main(__dirname+"/images/"+filename).then(image =&gt; image.write(__dirname+"/luu/"+filename));
                     },2000);
                    
                 }
                 
             });
           }
         })
     })
 
    
 };
 
 </pre>
 
 <p>Đoạn code trên là mình kết hợp 2 bài viết lại với nhau để vừa download hình ảnh và vừa watermark cho hình ảnh luôn nhé</p> `
