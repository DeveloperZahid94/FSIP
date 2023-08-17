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
    const routeSnapshot = route.snapshot;

    if (routeSnapshot.data && routeSnapshot.data['breadcrumb']) {
      breadcrumbs.push({ label: routeSnapshot.data['breadcrumb'], url: url });
    }

    if (routeSnapshot.firstChild) {
      const childRoute:any = routeSnapshot.firstChild;
      return this.createBreadcrumbs(childRoute, `${url}/${childRoute.routeConfig.path}`, breadcrumbs);
    }

    return breadcrumbs;
  }
}
