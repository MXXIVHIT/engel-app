import { Component, OnInit } from '@angular/core';

export interface ArticleRequestParam {
    id: string;
    articletitle: string;
    articlecontent: string;
    // tags:string;
    // mail:string;
    // viewcount:string;
    // createdate:string;
    // updatedate:string;
}

@Component({
  selector: 'app-article-publish',
  templateUrl: './article-publish.component.html',
  styleUrls: ['./article-publish.component.scss']
})
export class ArticlePublishComponent implements OnInit {

    option: Object;

    constructor() { }

    article: ArticleRequestParam = {
        id: '',
        articletitle: '',
        articlecontent: '',
    }

    ngOnInit() {
        // 在事件中要使用外部的this,因为函数内部也有this所以讲this的值赋给that
        const that = this;

        // 参数配置
        this.option = {
            language: 'zh_cn', // 配置语言
            placeholderText: '请输入内容', // 文本框提示内容
            charCounterCount: true, // 是否开启统计字数
            charCounterMax: 800, // 最大输入字数,目前只支持英文字母
            // 注意导航条的配置, 按照官方的文档,无法配置,只能使用toolbarButtons来配置了。
            toolbarButtons: ['fullscreen', '|', 'bold', 'italic', 'underline', 'strikeThrough', 'align', 'insertLink', 'insertImage', 'insertHR', 'subscript', 'superscript'],
            codeMirror: false, // 高亮显示html代码
            codeMirrorOptions: { // 配置html代码参数
                tabSize: 4
            },
           heightMin: 400,
           heightMax: 700
        };
    }

}
