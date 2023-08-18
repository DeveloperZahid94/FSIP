import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { BreadCrumbServiceService } from 'src/app/Core/bread-crumb-service.service';

@Component({
  selector: 'app-bread-crumb',
  templateUrl: './bread-crumb.component.html',
  styleUrls: ['./bread-crumb.component.css']
})
export class BreadCrumbComponent implements OnInit {
  breadcrumbs: { label: string, url: string }[] = [];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private breadcrumbService: BreadCrumbServiceService
  ) {}

  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.breadcrumbs = this.createBreadcrumbs(this.activatedRoute.root);
    });
  }

  createBreadcrumbs(route: ActivatedRoute, url: string = '', breadcrumbs: { label: string, url: string }[] = []): { label: string, url: string }[] {
    const routeURL: string = route.snapshot.url.map(segment => segment.path).join('/');
    if (routeURL !== '') {
      url += `/${routeURL}`;
    }
  
    if (route.snapshot.data && route.snapshot.data['breadcrumb']) {
      breadcrumbs.push({ label: route.snapshot.data['breadcrumb'], url: url });
    }
  
    const children: ActivatedRoute[] = route.children;
  
    if (children.length === 0) {
      return breadcrumbs;
    }
    for (const child of children) {
      const newBreadcrumbs = this.createBreadcrumbs(child, url, [...breadcrumbs]);
      breadcrumbs.push(...newBreadcrumbs);
    }
  
    // Process only the first child route
    //return this.createBreadcrumbs(children[0], url, breadcrumbs);
    console.log("breadcrumb",breadcrumbs)
    return breadcrumbs;
  }

  
  
  
  
}
