import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ArticlePublishComponent} from './article-publish.component';
import {ArticlePublishRoutingModule} from './article-publish-routing.module';
import {FormsModule} from '@angular/forms';
import {FroalaEditorModule, FroalaViewModule} from 'angular-froala-wysiwyg';

@NgModule({
    imports: [
        CommonModule,
        ArticlePublishRoutingModule,
        FormsModule,
        FroalaEditorModule.forRoot(),
        FroalaViewModule.forRoot(),
    ],
    declarations: [
        ArticlePublishComponent
    ]
})
export class ArticlePublishModule { }
