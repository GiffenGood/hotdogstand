import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { HotdogService } from '../hotdog.service';
import { Injectable } from '@angular/core';

@Injectable()
export class HotdogsResolver implements Resolve<any> {
    
    constructor(private hotdogService: HotdogService) {
        
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.hotdogService.getAll();
    }
}
