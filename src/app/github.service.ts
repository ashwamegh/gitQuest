import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()

export class GithubService{
    private username : string;
    private client_id = '2bced018804362c05419';
    private client_secret='a1a324c3c3c74fa464605e770a34ac41154dd5ce'

    constructor(private _http : Http){
        console.log('Github Service Ready...');
        this.username= 'shashank7200';
    }

    getUser(){
        return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
        .map(res => res.json());
    }

        getRepos(){
        return this._http.get('http://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
        .map(res => res.json());
    }

    updateUser(username :string){
        this.username=username;
    }

}
