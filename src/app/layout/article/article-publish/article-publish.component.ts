import { Component, OnInit } from '@angular/core';
import {ArticleService} from '../../../shared/services/article.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

export interface ArticleRequestParam {
    id: string;
    articletitle: string;
    articlecontent: string;
    articletags: string;
    // mail:string;
    articleviewcount:string;
    articlecreatedate:string;
    articleupdatedate:string;
}

@Component({
  selector: 'app-article-publish',
  templateUrl: './article-publish.component.html',
  styleUrls: ['./article-publish.component.scss']
})
export class ArticlePublishComponent implements OnInit {

    option: Object;

    constructor(
        private articleService: ArticleService,
        private fb: FormBuilder,
    ) {
        this.createForm();
    }

    article: ArticleRequestParam = {
        id: '',
        articletitle: '',
        articlecontent: '',
        articletags: '',
        articleviewcount: '',
        articlecreatedate: '',
        articleupdatedate: '',
    }

    articleForm: FormGroup;

    createForm() {
        this.articleForm = this.fb.group({
            articletitle: ['', Validators.required ],
            articlecontent: ['', Validators.required ],
            articletags: ['', Validators.required ],
        });
    }

    get articletitle() { return this.articleForm.get('articletitle'); }
    get articlecontent() { return this.articleForm.get('articlecontent'); }
    get articletags() { return this.articleForm.get('articletags'); }

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
            toolbarButtons: ['fullscreen', '|', 'bold', 'italic', 'underline', 'strikeThrough',
                'align', 'insertLink', 'insertImage', 'insertHR', 'subscript', 'superscript'],
            codeMirror: false, // 高亮显示html代码
            codeMirrorOptions: { // 配置html代码参数
                tabSize: 4
            },
           heightMin: 400,
           heightMax: 700
        };
    }

    articleAdd() {
        this.articleService.addArticle(this.articleForm.value);
    }

}
