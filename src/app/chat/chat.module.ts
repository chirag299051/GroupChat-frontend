import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatRoomComponent } from './chat-room/chat-room.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { SharedModule } from '../shared/shared.module';
import { UserDetailsComponent } from '../shared/user-details/user-details.component';
import { RemoveSpecialCharPipe } from '../shared/pipe/remove-special-char.pipe';
import { FirstCharComponent } from '../shared/first-char/first-char.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forChild([
      { path: 'chat', component: ChatRoomComponent }
    ]),
    SharedModule
  ],
  declarations: [RemoveSpecialCharPipe,FirstCharComponent,UserDetailsComponent,ChatRoomComponent]
})
export class ChatModule { }
