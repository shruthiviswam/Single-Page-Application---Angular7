import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServersService {

  constructor() { }
  private servers = [
    {id : 1, name : "Production Server", status : "online"},
    {id : 2, name : "Development Server", status : "offline"},
    {id : 3, name : "Testing Server", status : "online"}
  ]

  getServers(){
    return this.servers;
  }

  getServer(id : number){
    const server = this.servers.find((s)=>
    {
      return s.id === id;
    })
    return server;
  }

  UpdateServer(id:number, serviceInfo : {name : string,status:string})
  {
    const server = this.servers.find((s)=>
    {
      return s.id===id;
    })
    if(server){
      server.name=serviceInfo.name;
      server.status=serviceInfo.status;
    }
  }
}
