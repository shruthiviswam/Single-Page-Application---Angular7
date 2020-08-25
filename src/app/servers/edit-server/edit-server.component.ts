import { Component, OnInit } from '@angular/core';
import { ServersService } from '../servers.service';

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
  constructor(private serverService : ServersService) { }

  ngOnInit(): void {
    this.server = this.serverService.getServer(1);
    this.ServerId = 1;
    this.ServerName = this.server.name;
    this.ServerStatus = this.server.status;
  }

  onUpdateServer(){
    this.serverService.UpdateServer(this.ServerId, {name:this.ServerName, status:this.ServerStatus})
    console.log(this.ServerId,this.ServerName,this.ServerStatus);
  }

}
