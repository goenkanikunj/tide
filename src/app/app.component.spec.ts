import { TestBed, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
//-----------------------------------------------------------------

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Materials
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';

import { CreditPartyApiService } from './dsui/shared/credit-party-api.service';
import { MockCreditPartyApiService } from './dsui/shared/mock-credit-party-api.service';

// ----------------------------------------------------------------
describe('AppComponent', () => {

    let component: ComponentFixture<AppComponent>;
    let element: DebugElement;
    let html: HTMLElement;

    beforeEach(() => {

        TestBed.configureTestingModule({
            imports: [
                BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
                RouterModule.forRoot([]),
                CommonModule,
                BrowserAnimationsModule, // required animations module
                HttpClientModule,
                FormsModule, ReactiveFormsModule,

                // Material
                MatIconModule, MatButtonModule,
                MatMenuModule, MatSidenavModule,
                MatToolbarModule,
                MatInputModule
            ],

            declarations: [
                AppComponent,
                NavMenuComponent
            ],

            providers: [
                { provide: APP_BASE_HREF, useValue: '/' },
                {provide: CreditPartyApiService, useClass: MockCreditPartyApiService}
            ]
        });

        component = TestBed.createComponent(AppComponent);
    });

    it('app should have a title', () => {
        const title = 'Credit Party Manager';

        component.detectChanges();
        element = component.debugElement.query(By.css('.app-title'));
        html = element.nativeElement;

        expect(html.innerText).toBe(title);
    });

});