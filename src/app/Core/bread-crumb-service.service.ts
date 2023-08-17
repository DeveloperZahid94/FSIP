import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BreadCrumbServiceService {

  constructor() { }
  breadcrumbs: { label: string, url: string }[] = [];

  setBreadcrumb(path: string, label: string): void {
    this.breadcrumbs.push({ label, url: path });
  }

  getBreadcrumbs(): { label: string, url: string }[] {
    return this.breadcrumbs;
  }
}
