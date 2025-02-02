import Vue from 'vue'
//import index from 'karma-chai'
import { mount } from '@vue/test-utils';
import { shallowMount } from '@vue/test-utils';

import multistoryboard from '../src/components/multistoryboard.vue';
import shared from '../src/components/shared.js'

import flushPromises from 'flush-promises';
let consoleSpy;

describe('Component', () => {
  beforeEach(() => {
    window.SVGElement.prototype.getBBox = () => ({
      x: 740,
      y: 566, 
      width: 3997,
      height: 4586
      // whatever other props you need
    });
    const div = document.createElement('div');
    div.id = 'root'
    document.body.appendChild(div)
  })
    test('test multistoryboard with mirador and page list', async ()  => {
      const wrapper =  mount(multistoryboard,{
        propsData: {
          annotationurls: 'mc00240.json;page.json'
        },
        attachTo: '#root'
      })
      const saveMock = jest.fn()
      var children = wrapper.vm.boardchildren;
      for (var i=0; i<children.length; i++){
        children[i].createViewer = saveMock;
      }
      await wrapper.vm.$nextTick()
      await flushPromises()

      var data = wrapper.vm.$data
      expect(data.anno_data).toEqual(["mc00240.json", "page.json"])
      expect(data.boardchildren.length).toEqual(2)
      expect(data.stylingstring).toEqual("autorun_interval:3;")
      expect(data.widthvar).toEqual("50%")
      expect(data.multi).toBe(true)
      expect(data.tags).toBe(true)
      expect(data.layerslist).toBe(false)
      expect(Object.keys(data.shortcuts).sort()).toEqual(['tags', 'close', 'home', 'zoomin', 'info', 'fullscreen', 'hide', 'overlay', 'zoomout', 'shortcut', 'next', 'autorun', 'prev'].sort())
      wrapper.destroy()
    })
    test('test multistoryboard 2', async ()  => {
      const wrapper =  mount(multistoryboard,{
        propsData: {
          annotationurls: '4058a628-c593-463e-9736-8a821e178fee-list.json;page.json;paragraph.json',
          styling: 'startenddisplay: keyboard'
        },
        attachTo: '#root'
      })
      const saveMock = jest.fn()
      var children = wrapper.vm.boardchildren;
      for (var i=0; i<children.length; i++){
        children[i].createViewer = saveMock;
      }
      await wrapper.vm.$nextTick()
      await flushPromises()
      var data = wrapper.vm.$data
      expect(data.anno_data).toEqual(["4058a628-c593-463e-9736-8a821e178fee-list.json", "page.json", "paragraph.json"])
      expect(data.boardchildren.length).toEqual(3)
      expect(data.stylingstring).toEqual("startenddisplay:keyboard;autorun_interval:3;")
      expect(data.widthvar).toEqual("33%")
      expect(data.multi).toBe(true)
      expect(data.tags).toBe(true)
      expect(data.layerslist).toBe(false)
      expect(Object.keys(data.shortcuts).sort()).toEqual(['tags', 'close', 'home', 'zoomin', 'info', 'fullscreen', 'hide', 'overlay', 'zoomout', 'shortcut', 'next', 'autorun', 'prev'].sort())
      wrapper.destroy()
    })
    test('test multistoryboard 3', async ()  => {
      const wrapper =  mount(multistoryboard,{
        propsData: {
          annotationurls: 'paragraph.json;techocr.json',
          styling: 'transcription: true; startenddisplay:false;'
        },
        attachTo: '#root'
      })
      const saveMock = jest.fn()
      var children = wrapper.vm.boardchildren;
      for (var i=0; i<children.length; i++){
        children[i].createViewer = saveMock;
      }
      await wrapper.vm.$nextTick()
      await flushPromises()
      var data = wrapper.vm.$data;
      expect(data.anno_data).toEqual(["paragraph.json", "techocr.json"])
      expect(data.boardchildren.length).toEqual(2)
      expect(data.stylingstring).toEqual("transcription:true;startenddisplay:false;autorun_interval:3;")
      expect(data.widthvar).toEqual("50%")
      expect(data.multi).toBe(true)
      expect(data.tags).toBe(false)
      expect(data.layerslist).toBe(false)
      expect(Object.keys(data.shortcuts).sort()).toEqual(['close', 'home', 'zoomin', 'info', 'fullscreen', 'hide', 'overlay', 'zoomout', 'shortcut', 'next', 'autorun', 'prev'].sort())
      wrapper.destroy()
    })
    test('test multistoryboard 4', async ()  => {
      const wrapper =  mount(multistoryboard,{
        propsData: {
          annotationurls: 'recogito.json;techocr.json',
          styling: 'transcription: true;'
        },
        attachTo: '#root'
      })
      const saveMock = jest.fn()
      var children = wrapper.vm.boardchildren;
      for (var i=0; i<children.length; i++){
        children[i].createViewer = saveMock;
      }
      await wrapper.vm.$nextTick()
      await flushPromises()
      var data = wrapper.vm.$data
      expect(data.anno_data).toEqual(["recogito.json", "techocr.json"])
      expect(data.boardchildren.length).toEqual(2)
      expect(data.stylingstring).toEqual("transcription:true;autorun_interval:3;")
      expect(data.widthvar).toEqual("50%")
      expect(data.multi).toBe(true)
      expect(data.tags).toBe(false)
      expect(data.layerslist).toBe(false)
      expect(Object.keys(data.shortcuts).sort()).toEqual(['close', 'home', 'zoomin', 'info', 'fullscreen', 'hide', 'overlay', 'zoomout', 'shortcut', 'next', 'autorun', 'prev'].sort())
      wrapper.destroy()
    })
})
