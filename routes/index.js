
/*
 * GET home page.
 */
/*
var booksArr = [
	 	{
	 		_id:001,
  	 	bookName : "Javascript权威指南",
  	 	bookImg : "http://img4.gomein.net.cn/image/bbcimg/production_image/img/20130423/8001307611/102026828_800.jpg",
  	 	bookAuthor : '弗拉纳根',
  	 	bookPublisher : '机械工业',
  	 	bookTime : 2010,
  	 	bookPrice : 56,
  	 	bookInfo : '《JavaScript权威指南(第5版)》全面介绍了JavaScript语言的核心，以及Web浏览器中实现的遗留和标准的DOM。它运用了一些复杂的例子，说明如何处理验证表单数据、使用cookie、创建可移植的DHTML动画等常见任务。《JavaScript权威指南(第5版)》还包括详细的参考手册，涵盖了JavaScript的核心API、遗留的客户端API和W3C标准DOM API，记述了这些API中的每一个JavaScript对象、方法、性质、构造函数、常量和事件处理程序。'
  	 },
  	 {
  	 	_id:002,
  	 	bookName : "高性能HTML5",
  	 	bookImg : "http://img10.360buyimg.com/n0/jfs/t589/138/807595534/35538/70e9927e/5489e5eaN1bf591f5.jpg",
  	 	bookAuthor : '弗拉纳根',
  	 	bookPublisher : '机械工业',
  	 	bookTime : 2010,
  	 	bookPrice : 56,
  	 	bookInfo : '《高性能html5》为读者讲解了如何用html5 从一开始就设计一个高性能的网站，以及如何对已有网站进行改良，使得它们具备优越的性能。《高性能html5》中总结了许多实践经验、关键技巧，并提供了丰富的示例，作者有意无意地将软件工程以及前端开发技术之道隐藏于朴实的描述中。'
  	 },
  	 {
  	 	_id:003,
  	 	bookName : "图解CSS3",
  	 	bookImg : "http://img.b5m.com/image/T13mCgB4hs1RCvBVdK",
  	 	bookAuthor : '弗拉纳根',
  	 	bookPublisher : '机械工业',
  	 	bookTime : 2010,
  	 	bookPrice : 56,
  	 	bookInfo : '本书是CSS3领域的标准性著作，由资深Web前端工程师根据CSS3的最新技术标准撰写。内容极为全面、丰富和翔实，由浅入深地讲解了CSS3新特性的语法、功能和使用技巧，涵盖选择器、边框、背景、文本、颜色、UI、动画、新型盒模型、媒体查询、响应式设计等各种模块；写作方式创新，有趣且易懂，用图解的方式来描述CSS3的每一个特性甚至每一个步骤都配有实战效果图；包含大量案例，实战性强，每个特性都有作者从实践中精心归纳和挑选出来的案例辅助讲解，同时还包含一个综合性的大案例。无论你是完全没有经验的准前端工程师，还是已经有一定经验的前端工程师，如果你想系统学习CSS3，那么本书将会是你的最佳选择；如果你是一位成熟的前端开发工程师，但时常为如何合理地使用某些特性而费时去查阅相关资料，那么本书也是你的不二选择。'
  	 },
  	 {
  	 	_id:004,
  	 	bookName : "深入浅出Node",
  	 	bookImg : "http://shopimg.kongfz.com.cn/20140319/2363192/2363192iT7A90_n.jpg",
  	 	bookAuthor : '弗拉纳根',
  	 	bookPublisher : '机械工业',
  	 	bookTime : 2010,
  	 	bookPrice : 56,
  	 	bookInfo : '本书从不同的视角介绍了 Node 内在的特点和结构。由首章Node 介绍为索引，涉及Node 的各个方面，主要内容包含模块机制的揭示、异步I/O 实现原理的展现、异步编程的探讨、内存控制的介绍、二进制数据Buffer 的细节、Node 中的网络编程基础、Node 中的Web 开发、进程间的消息传递、Node 测试以及通过Node 构建产品需要的注意事项。最后的附录介绍了Node 的安装、调试、编码规范和NPM 仓库等事宜。'
  	 },
  	 {
  	 	_id:005,
  	 	bookName : "PHP6高级编程",
  	 	bookImg : "http://img7.paipaiimg.com/00000000/item-51E426E6-073EE14F00000000040100002F85BD8B.0.300x300.jpg",
  	 	bookAuthor : '弗拉纳根',
  	 	bookPublisher : '机械工业',
  	 	bookTime : 2010,
  	 	bookPrice : 56,
  	 	bookInfo : '本书在保持了前一版风格的基础上，根据最新的标准对内容进行了修订和增补，反映了最新的技术发展。书中除了介绍UNIX文件和目录、标准I/O库、系统数据文件和信息、进程环境、进程控制、进程关系、信号、线程、线程控制、守护进程、各种I/O、进程间通信、网络IPC、伪终端等方面的内容，还在此基础上介绍了多个应用示例，包括如何创建数据库函数库以及如何与网络打印机通信等。此外，还在附录中给出了函数原型和部分习题的答案。'
  	 }
];
*/

var mongoose = require('mongoose');

var _ = require('underscore');

var bookModel = require('../dataModel/bookModel');



//首页
exports.index = function(req, res){
  //console.log(req.query.id);
  bookModel.fetch(function(err,data){
    if(err){
      console.log(err,'error');
      return ;
    }else{
      console.log(data);
      res.render('pages/index', {
         title: 'Index',
         bookArr :data
      });
    }
  });
  
};

//书籍详情页
exports.detail = function(req,res){
	var id = req.params.id;
  bookModel.getById(id, function(err,data){
    if(err){
      console.log(err);
      return ;
    }else{
      console.log(data);
      res.render('pages/detail',{
        title : 'detail-详情页',
        book : data
      });
    }
  });
	
};

//添加或修改书籍
exports.addList = function(req,res){
	res.render('pages/add',{
    title:'添加书籍',
    book : []
  });
};
exports.update = function(req,res){
  var id = req.params.id;
  bookModel.getById(id,function(err,data){
    if(err){
      console.log(err);
    }else{
      res.render('pages/add',{
        title:'修改书籍信息',
        book : data
      });
    }
  });
  
};


//管理书籍列表
exports.adminBooks = function(req,res){
  bookModel.fetch(function(err,data){
    if(err){
      console.log(err);
    }else{
      res.render('admin/adminBooks',{
        title:'书籍列表',
        bookList : data
      });
    }
  });
	
};

//POST 提交书籍信息
exports.addPost = function(req,res){
  //console.log(req.body);
  var bookObj = req.body;
  var id = bookObj.bookId;

  if(id){
    bookModel.getById(id,function(err,data){
      if(err){
        console.log(err);
      }else{
        var _book = _.extend(data,bookObj);
        _book.save(function(err,book){
            if(err){
              console.log(err);
            }else{
              res.redirect('/detail/'+book._id);
            }
        });
      }
    });
  }else{
    var mybook = new bookModel({
      //add.jade post name
      bookName : bookObj.bookName,
      bookImg: bookObj.bookImg,
      bookAuthor: bookObj.bookAuthor,
      bookPublisher : bookObj.bookPublisher,
      bookTime : bookObj.bookTime,
      bookPrice : bookObj.bookPrice,
      bookInfo : bookObj.bookInfo,
      meta :{
        createAt : {
          type : Date,
          default : Date.now()
        },
        updateAt : {
          type : Date,
          default : Date.now()
        }
      }
    });

    mybook.save(function(err,book){
      if(err){
        console.log(err);
        //console.log('a');
      }else{
        //console.log('b');
        res.redirect('/detail/'+book._id);
      }
    });

  }
  //res.render('pages/add',{title:'添加或修改书籍'});
};