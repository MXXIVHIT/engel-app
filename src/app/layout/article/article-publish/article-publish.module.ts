import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ArticlePublishComponent} from './article-publish.component';
import {ArticlePublishRoutingModule} from './article-publish-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FroalaEditorModule, FroalaViewModule} from 'angular-froala-wysiwyg';
import {ArticleService} from '../../../shared/services/article.service';
import {ApiRequestService} from '../../../shared/services/api-request.service';
import {AppConfig} from '../../../app-config';

@NgModule({
    imports: [
        CommonModule,
        ArticlePublishRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        FroalaEditorModule.forRoot(),
        FroalaViewModule.forRoot(),
    ],
    providers: [
        ArticleService,
        ApiRequestService,
        AppConfig
    ],
    declarations: [
        ArticlePublishComponent
    ]
})
export class ArticlePublishModule { }
