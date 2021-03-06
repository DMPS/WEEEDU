/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { GameComponent } from './game.component';

describe('Component: Game', () => {
  it('should create an instance', () => {
    let component = new GameComponent();
    expect(component).toBeTruthy();
  });
});
