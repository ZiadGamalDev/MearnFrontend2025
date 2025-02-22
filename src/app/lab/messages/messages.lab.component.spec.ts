import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MessagesComponentForLab } from './messages.lab.component';
import { MessageService } from '../../services/message/message.service';
import { By } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

describe('MessagesComponent Integration Tests:', () => {
  let component: MessagesComponentForLab;
  let fixture: ComponentFixture<MessagesComponentForLab>;
  let messageService: MessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule],
      declarations: [MessagesComponentForLab],
      providers: [MessageService],
    }).compileComponents();

    fixture = TestBed.createComponent(MessagesComponentForLab);
    component = fixture.componentInstance;
    messageService = TestBed.inject(MessageService);
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should have an empty template initially', () => {
    fixture.detectChanges()

    const element = fixture.debugElement.nativeElement;
    expect(element.querySelector('h2')).toBeNull();
  });

  it('should display messages when added to MessageService', () => {
    messageService.add('Hello World!');
    messageService.add('Testing is fun!');

    fixture.detectChanges();

    const messages = fixture.debugElement.queryAll(By.css('div.msg'));
    expect(messages.length).toBe(2);
    expect(messages[0].nativeElement.textContent).toContain('Hello World!');
    expect(messages[1].nativeElement.textContent).toContain('Testing is fun!');
  });
});
