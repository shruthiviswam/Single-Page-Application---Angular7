import { Component, OnInit } from '@angular/core';
import { ServersService } from '../servers.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit {

  server : {id:number, name:string, status:string}
  ServerName = ''
  ServerStatus = ''
  ServerId : number
  queryparam : any;
  fragment : any;

  constructor(private serverService : ServersService,
              private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.server = this.serverService.getServer(1);
    this.ServerId = 1;
    this.ServerName = this.server.name;
    this.ServerStatus = this.server.status;
    this.queryparam = this.route.snapshot.queryParams;
    this.fragment = this.route.snapshot.fragment;
  }

  onUpdateServer(){
    this.serverService.UpdateServer(this.ServerId, {name:this.ServerName, status:this.ServerStatus})
    console.log(this.ServerId,this.ServerName,this.ServerStatus);
  }

}
