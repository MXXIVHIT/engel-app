import { Injectable } from '@angular/core';
import { HttpParams} from '@angular/common/http';

import {ApiRequestService} from './api-request.service';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ArticleService {

  constructor(
    private apiRequest: ApiRequestService,
  ) { }

  getArticleDetail(id: number): Observable<any> {
    let params: HttpParams = new HttpParams();
    params = params.append('id', id.toString());
    return this.apiRequest.get('api/article-details', params);
  }

  getArticleInfo(page?: number, size?: number): Observable<any> {
    // Create Request URL params
    const me = this;
    let params: HttpParams = new HttpParams();
    params = params.append('page', typeof page === 'number' ? page.toString() : '0');
    params = params.append('size', typeof page === 'number' ? size.toString() : '1000');
    return this.apiRequest.get('api/articles', params);
  }

  updateArticle(article) {
    console.log('articles:' + article.articlecontent);
    return this.apiRequest.post('api/article-update', article);
  }

  addArticle(article) {
    console.log('articles:' + article.articlecontent);
    return this.apiRequest.post('api/article-add', article);
  }
}

