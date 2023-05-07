import { Route } from "@angular/router";
import { AuthGuard } from "./core/auth/guards/auth-guard";
import { LoginGuard } from "./core/auth/guards/login-guard";
import { LayoutComponent } from "./layout/layout.component";
import { SignInComponent } from "./modules/auth/sign-in/sign-in.component";

export const appRoutes: Route[] = [
    // Redirect empty path to 'sign-in'
    {path: '', pathMatch : 'full', redirectTo: 'sign-in'}, 
    
    {
        path: '',
        component: SignInComponent,
        canActivate: [LoginGuard],
        children: [
            {
                path: 'sign-in',
                loadChildren: () => import('./modules/auth/sign-in/sign-in.module').then(m => m.SignInModule)
            }
        ]
    },

    // Main app routs
    {
        path: 'app',
        component: LayoutComponent,
        children: [
            // Process list route
            {
                path: 'process-list',
                canActivate: [AuthGuard],
                loadChildren: () => import('./modules/process-list/process-list.module').then(m => m.ProcessListModule),
                data: {
                    urls: [
                        {title: 'Process List', current: true}
                    ]
                }
            },

            // Add hierarchies route
            {
                path: 'add-hierarchy',
                canActivate: [AuthGuard],
                loadChildren: () => import('./modules/add-hierarchy/add-hierarchy.module').then(m => m.AddHierarchyModule),
                data: {
                    urls: [
                        {title: 'Hierarchies list'},
                        {title: 'Add New Hierarchy', current: true}
                    ]
                }                
            },
        ]
    }
] 