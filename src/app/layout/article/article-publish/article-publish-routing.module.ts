import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ArticlePublishComponent} from './article-publish.component';

const routes: Routes = [
    {
        path: '', component: ArticlePublishComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ArticlePublishRoutingModule { }
